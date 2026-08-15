import { type App, Modal, Notice, Setting, TFile } from "obsidian";
import type { Indexer } from "./indexer";

interface BackfillCandidate {
  file: TFile;
  title: string;
  parentTitle: string;
  parentCode: string;
}

/**
 * 回填命令：扫描森林，找出缺 zettelkastenUp 的卡，预览四组，确认后批量写。
 * 只填缺失、尊重手动值、不写不一致/无法回填/根卡。幂等。
 */
export async function runBackfill(app: App, indexer: Indexer): Promise<void> {
  const forest = indexer.forest;
  const willFill: BackfillCandidate[] = [];
  let skippedHas = 0;
  let mismatchCount = forest.mismatches.length;
  let cannotCount = 0;
  let rootCount = 0;

  for (const node of forest.byCode.values()) {
    if (node.isDuplicate) continue;
    if (node.hasManualUp) {
      skippedHas++;
      continue;
    }
    if (node.parentCode === null) {
      rootCount++;
      continue;
    }
    if (node.parentPath === null) {
      // orphan：父笔记缺失，无法写有效 wikilink
      cannotCount++;
      continue;
    }
    const parent = forest.byCode.get(node.parentCode);
    if (!parent) {
      cannotCount++;
      continue;
    }
    const file = app.vault.getAbstractFileByPath(node.path);
    if (!(file instanceof TFile)) continue;
    willFill.push({
      file,
      title: node.title,
      parentTitle: parent.title,
      parentCode: node.parentCode,
    });
  }

  // 也计入孤儿/根到报告（cannot/root 来自 byCode 遍历，孤儿中部分已在 byCode）
  // 注意：orphans 数组里的节点也在 byCode（孤儿是 byCode 中 parentPath 为空者），上面已计 cannotCount

  new BackfillModal(app, {
    willFill,
    skippedHas,
    mismatchCount,
    cannotCount,
    rootCount,
  }).open();
}

interface BackfillReport {
  willFill: BackfillCandidate[];
  skippedHas: number;
  mismatchCount: number;
  cannotCount: number;
  rootCount: number;
}

class BackfillModal extends Modal {
  report: BackfillReport;
  app: App;

  constructor(app: App, report: BackfillReport) {
    super(app);
    this.app = app;
    this.report = report;
  }

  onOpen(): void {
    const { contentEl } = this;
    contentEl.addClass("zk-backfill-modal");
    contentEl.createEl("h2", { text: "回填 zettelkastenUp 预览" });

    const r = this.report;
    const summary = contentEl.createEl("p");
    summary.innerHTML =
      `将写入 <b>${r.willFill.length}</b> · ` +
      `跳过(已有) ${r.skippedHas} · ` +
      `标记(不一致) ${r.mismatchCount} · ` +
      `无法(父缺失) ${r.cannotCount} · ` +
      `根卡 ${r.rootCount}`;

    if (r.willFill.length === 0) {
      contentEl.createEl("p", {
        text: "没有需要回填的笔记。所有 zettelkasten 笔记要么已填 up，要么是根卡/孤儿。",
      });
      new Setting(contentEl).addButton((b) => {
        b.buttonEl.style.display = "none";
      });
      const closeBtn = contentEl.createEl("button", { text: "关闭" });
      closeBtn.onclick = () => this.close();
      return;
    }

    const list = contentEl.createEl("div", { cls: "zk-backfill-list" });
    for (const c of r.willFill) {
      const row = list.createEl("div", { cls: "zk-backfill-row" });
      row.createEl("span", { text: c.title });
      row.createEl("span", { text: " → ", cls: "zk-arrow" });
      row.createEl("span", { text: `[[${c.parentTitle}]]`, cls: "zk-up-value" });
      row.createEl("span", { text: `  (${c.parentCode})`, cls: "zk-muted" });
    }

    const btns = contentEl.createEl("div", { cls: "zk-backfill-buttons" });
    const cancel = btns.createEl("button", { text: "取消" });
    cancel.onclick = () => this.close();
    const confirm = btns.createEl("button", {
      text: `确认写入 ${r.willFill.length} 篇`,
      cls: "mod-warning",
    });
    confirm.onclick = async () => {
      confirm.disabled = true;
      confirm.textContent = "写入中…";
      let ok = 0;
      let fail = 0;
      for (const c of r.willFill) {
        try {
          await this.app.fileManager.processFrontMatter(c.file, (fm) => {
            fm["zettelkastenUp"] = `[[${c.parentTitle}]]`;
          });
          ok++;
        } catch (e) {
          console.error("[zk-forest] backfill write failed", c.file.path, e);
          fail++;
        }
      }
      new Notice(`Zettelkasten 回填完成：新增 ${ok} 篇${fail ? `，失败 ${fail} 篇` : ""}`);
      this.close();
    };
  }

  onClose(): void {
    this.contentEl.empty();
  }
}
