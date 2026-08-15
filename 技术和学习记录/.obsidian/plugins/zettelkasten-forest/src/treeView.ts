import { type App, type EventRef, ItemView, type WorkspaceLeaf } from "obsidian";
import * as d3 from "d3";
import type { Indexer } from "./indexer";
import type { ZKSettings } from "./settings";
import type { Forest, TreeNode } from "./forest";
import { computeTopicTree } from "./forest";
import { parseZettelkastenNo } from "./parser";

export const ZK_VIEW_TYPE = "zk-forest";

/** 视图宿主接口（避免 treeView ↔ main 循环依赖） */
export interface ZKViewHost {
  app: App;
  indexer: Indexer;
  settings: ZKSettings;
  refreshViews(): void;
}

export class ZKTreeView extends ItemView {
  host: ZKViewHost;
  includeSiblings: boolean;

  private offIndexer: (() => void) | null = null;
  private offActive: EventRef | null = null;
  private renderTimer: number | null = null;
  private rafId: number | null = null;
  private sibBtn: HTMLButtonElement | null = null;
  private lastRenderedPath: string | null = null;

  constructor(leaf: WorkspaceLeaf, host: ZKViewHost) {
    super(leaf);
    this.host = host;
    this.includeSiblings = host.settings.defaultIncludeSiblings;
  }

  getViewType(): string {
    return ZK_VIEW_TYPE;
  }
  getDisplayText(): string {
    return "Zettelkasten 演化森林";
  }
  getIcon(): string {
    return "git-branch";
  }

  async onOpen(): Promise<void> {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("zk-forest-view");

    const toolbar = contentEl.createDiv({ cls: "zk-forest-toolbar" });
    this.sibBtn = toolbar.createEl("button", { text: "显示兄弟" });
    this.sibBtn.toggleClass("is-active", this.includeSiblings);
    this.sibBtn.title = "切换：祖先链+后代 / 含每层兄弟";
    this.sibBtn.onclick = () => {
      this.includeSiblings = !this.includeSiblings;
      this.sibBtn?.toggleClass("is-active", this.includeSiblings);
      this.render();
    };

    const svgSel = d3.select(contentEl).append("svg").attr("class", "zk-forest-svg");
    const svgEl = svgSel.node();
    if (svgEl) {
      // 右键拖动平移：阻止右键菜单，让 d3 zoom 接管右键拖拽
      svgEl.addEventListener("contextmenu", (e) => e.preventDefault());
    }

    this.offIndexer = this.host.indexer.onChange(() => this.scheduleRender());
    this.offActive = this.host.app.workspace.on("active-leaf-change", () =>
      this.onActiveLeafChange()
    );

    // 等容器布局完成后再首次渲染（避免 clientWidth=0 导致居中偏移）
    this.rafRender();
  }

  async onClose(): Promise<void> {
    if (this.offIndexer) this.offIndexer();
    if (this.offActive) this.host.app.workspace.offref(this.offActive);
    if (this.renderTimer !== null) window.clearTimeout(this.renderTimer);
    if (this.rafId !== null) window.cancelAnimationFrame(this.rafId);
  }

  private scheduleRender(): void {
    if (this.renderTimer !== null) window.clearTimeout(this.renderTimer);
    this.renderTimer = window.setTimeout(() => {
      this.renderTimer = null;
      this.render();
    }, this.host.settings.switchDebounce);
  }

  private rafRender(): void {
    if (this.rafId !== null) window.cancelAnimationFrame(this.rafId);
    this.rafId = window.requestAnimationFrame(() => {
      this.rafId = null;
      this.render();
    });
  }

  private onActiveLeafChange(): void {
    // 仅当当前笔记确实变了才重渲染；点击视图自身聚焦不应重渲染（否则丢失用户的平移/缩放）
    if (this.currentPath() !== this.lastRenderedPath) {
      this.scheduleRender();
    }
  }

  setIncludeSiblings(v: boolean): void {
    this.includeSiblings = v;
    this.sibBtn?.toggleClass("is-active", v);
  }

  private currentPath(): string | null {
    const f = this.host.app.workspace.getActiveFile();
    return f && f.extension === "md" ? f.path : null;
  }

  render(): void {
    const svgEl = this.contentEl.querySelector("svg.zk-forest-svg") as SVGSVGElement | null;
    if (!svgEl) return;
    const cur = this.currentPath();
    this.lastRenderedPath = cur;

    // 容器尚未布局（尺寸为 0）→ 推迟到下一帧，避免居中算偏把当前卡甩到角落
    if (svgEl.clientWidth === 0 || svgEl.clientHeight === 0) {
      this.rafRender();
      return;
    }

    const svg = d3.select(svgEl);
    svg.selectAll("*").remove();

    const emptyEl = this.contentEl.querySelector(".zk-empty") as HTMLElement | null;
    if (emptyEl) emptyEl.style.display = "none";

    const forest = this.host.indexer.forest;
    const s = this.host.settings;
    const tree = computeTopicTree(forest, cur, {
      includeSiblings: this.includeSiblings,
      maxDescendantDepth: s.descendantFoldDepth,
    });

    if (!tree) {
      this.renderEmptyState(forest);
      return;
    }
    this.renderTree(svg, tree, s.showGhosts, s.branchColors);
  }

  private renderEmptyState(forest: Forest): void {
    let empty = this.contentEl.querySelector(".zk-empty") as HTMLElement | null;
    if (!empty) {
      empty = this.contentEl.createDiv({ cls: "zk-empty" });
    } else {
      empty.empty();
    }
    empty.style.display = "flex";

    empty.createEl("div", {
      text: forest.roots.length
        ? "当前笔记不是 Zettelkasten 卡片。点击根卡片查看其演化森林："
        : "尚未发现带 zettelkastenNo 的笔记。",
    });

    if (forest.roots.length) {
      const list = empty.createEl("div", { cls: "zk-root-list" });
      for (const root of forest.roots) {
        const a = list.createEl("a", {
          cls: "zk-root-link",
          text: `${root.code}  ${root.title}`,
        });
        a.style.display = "block";
        a.style.color = "var(--text-accent)";
        a.style.cursor = "pointer";
        a.onclick = (ev) => {
          ev.preventDefault();
          this.openNode(root.path);
        };
      }
    }
  }

  private renderTree(
    svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
    tree: TreeNode,
    showGhosts: boolean,
    branchColors: boolean
  ): void {
    const rootUnit = parseZettelkastenNo(tree.code)?.path[0] ?? tree.code;
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    const hier = d3
      .hierarchy<TreeNode>(tree, (d) => d.children)
      .count();

    const layout = d3
      .tree<TreeNode>()
      .nodeSize([44, 210])
      .separation((a, b) => (a.parent === b.parent ? 1 : 1.4));
    layout(hier);

    const g = svg.append("g").attr("class", "zk-canvas");

    // 连线
    const linkGen = d3
      .linkHorizontal<any, any>()
      .x((d: any) => d.y)
      .y((d: any) => d.x);
    g.selectAll(".zk-link")
      .data(hier.links())
      .enter()
      .append("path")
      .attr("class", "zk-link")
      .attr("d", linkGen);

    // 节点
    const node = g
      .selectAll(".zk-node")
      .data(hier.descendants())
      .enter()
      .append("g")
      .attr("class", (d) => {
        const t = d.data;
        const cls = ["zk-node"];
        if (t.isCurrent) cls.push("is-current");
        if (t.isGhost) cls.push("is-ghost");
        return cls.join(" ");
      })
      .attr("transform", (d) => `translate(${d.y},${d.x})`)
      .style("cursor", (d) => (d.data.node ? "pointer" : "default"))
      .style("opacity", (d) => (!showGhosts && d.data.isGhost ? 0.25 : 1));

    node
      .append("rect")
      .attr("x", (d) => (d.data.isCurrent ? -60 : -52))
      .attr("y", -18)
      .attr("width", (d) => (d.data.isCurrent ? 120 : 104))
      .attr("height", 36)
      .attr("rx", 6)
      .attr("fill", (d) =>
        d.data.isGhost || d.data.isCurrent
          ? null
          : branchColors
          ? (colorScale(rootUnit) as string)
          : null
      );

    // 第一行：zettelkastenNo 编码（结构身份）
    node
      .append("text")
      .attr("class", "zk-node-code")
      .attr("dy", -3)
      .attr("text-anchor", "middle")
      .text((d) => (d.data.isGhost ? d.data.code : d.data.node?.code ?? d.data.code));

    // 第二行：标题（截断）
    node
      .append("text")
      .attr("class", "zk-node-title")
      .attr("dy", 13)
      .attr("text-anchor", "middle")
      .text((d) => {
        if (d.data.isGhost) return "⚠ 缺失";
        const title = d.data.node?.title ?? "";
        return title.length > 7 ? title.slice(0, 7) + "…" : title;
      });

    node
      .append("title")
      .text((d) =>
        d.data.node ? `${d.data.node.title} (${d.data.code})` : `缺失中间卡 ${d.data.code}`
      );

    // 不一致角标
    node
      .filter((d) => d.data.node?.isMismatch === true)
      .append("circle")
      .attr("class", "zk-warn-badge")
      .attr("cx", 46)
      .attr("cy", -14)
      .attr("r", 5);

    // 点击开笔记
    node.on("click", (ev, d) => {
      if (d.data.node) {
        ev.preventDefault();
        this.openNode(d.data.node.path);
      }
    });

    // 平移/缩放
    const svgNode = svg.node();
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.2, 4])
      // svg 无 width/height 属性（仅 CSS），默认 extent 会退化成 0×0；用实际 CSS 尺寸
      .extent(() => {
        const n = svgNode;
        if (!n) return [[0, 0], [600, 400]] as [[number, number], [number, number]];
        return [[0, 0], [n.clientWidth, n.clientHeight]] as [[number, number], [number, number]];
      })
      // 允许右键拖动平移（默认只允许左键）；屏蔽中键避免误触自动滚动
      .filter((ev: any) => (!ev.ctrlKey || ev.type === "wheel") && ev.button !== 1)
      .on("zoom", (ev) => g.attr("transform", ev.transform.toString()));
    svg.call(zoom);

    // 居中当前卡
    const curNode = hier.descendants().find((d) => d.data.isCurrent);
    if (curNode) {
      const w = svgNode?.clientWidth ?? 600;
      const h = svgNode?.clientHeight ?? 400;
      const tx = w / 2 - (curNode.y ?? 0);
      const ty = h / 2 - (curNode.x ?? 0);
      svg.call(zoom.transform, d3.zoomIdentity.translate(tx, ty));
    }
  }

  private openNode(path: string): void {
    const file = this.host.app.vault.getAbstractFileByPath(path);
    if (file) {
      this.host.app.workspace.getLeaf(false).openFile(file as import("obsidian").TFile);
    }
  }
}
