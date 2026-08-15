import { type WorkspaceLeaf, Plugin } from "obsidian";
import { Indexer } from "./indexer";
import { DEFAULT_SETTINGS, ZKSettingTab, type ZKPluginLike, type ZKSettings } from "./settings";
import { runBackfill } from "./backfill";
import { ZKTreeView, ZK_VIEW_TYPE, type ZKViewHost } from "./treeView";

export default class ZKForestPlugin extends Plugin implements ZKViewHost, ZKPluginLike {
  settings: ZKSettings = DEFAULT_SETTINGS;
  indexer!: Indexer;

  async onload(): Promise<void> {
    await this.loadSettings();
    this.indexer = new Indexer(this.app, this.settings.reindexDebounce);

    this.registerView(ZK_VIEW_TYPE, (leaf: WorkspaceLeaf) => new ZKTreeView(leaf, this));

    this.addRibbonIcon("git-branch", "Zettelkasten 演化森林", () => this.openView());

    this.addCommand({
      id: "zk-open-forest-view",
      name: "打开演化森林视图",
      callback: () => this.openView(),
    });

    this.addCommand({
      id: "zk-backfill-up",
      name: "回填缺失的 zettelkastenUp",
      callback: () => {
        void runBackfill(this.app, this.indexer);
      },
    });

    this.addSettingTab(new ZKSettingTab(this.app, this));

    this.indexer.register();
    this.app.workspace.onLayoutReady(() => {
      this.indexer.build();
    });
  }

  onunload(): void {
    this.indexer.unregister();
    // 视图由 Obsidian 自行回收；registerView 已接管生命周期
  }

  async loadSettings(): Promise<void> {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
    // 让 indexer 拿到新的防抖值
    this.indexer.setReindexDebounce(this.settings.reindexDebounce);
  }

  refreshViews(): void {
    for (const leaf of this.app.workspace.getLeavesOfType(ZK_VIEW_TYPE)) {
      const view = leaf.view;
      if (view instanceof ZKTreeView) {
        // 设置改了默认范围时同步按钮状态
        view.setIncludeSiblings(this.settings.defaultIncludeSiblings);
        view.render();
      }
    }
  }

  openView(): void {
    const existing = this.app.workspace.getLeavesOfType(ZK_VIEW_TYPE);
    if (existing.length > 0) {
      void this.app.workspace.revealLeaf(existing[0]);
      return;
    }
    const leaf = this.app.workspace.getLeaf(true);
    void leaf.setViewState({ type: ZK_VIEW_TYPE, active: true });
  }
}
