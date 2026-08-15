import { type App, Plugin, PluginSettingTab, Setting } from "obsidian";

export interface ZKSettings {
  layout: "horizontal" | "vertical";
  descendantFoldDepth: number;
  showGhosts: boolean;
  defaultIncludeSiblings: boolean;
  branchColors: boolean;
  switchDebounce: number; // ms, active-leaf-change 重渲染防抖
  reindexDebounce: number; // ms, metadataCache 重建防抖
}

export const DEFAULT_SETTINGS: ZKSettings = {
  layout: "horizontal",
  descendantFoldDepth: 2,
  showGhosts: true,
  defaultIncludeSiblings: false,
  branchColors: true,
  switchDebounce: 300,
  reindexDebounce: 500,
};

/** 插件需满足的接口（避免 settings ↔ main 循环依赖） */
export interface ZKPluginLike {
  settings: ZKSettings;
  saveSettings(): Promise<void>;
  refreshViews(): void;
}

export class ZKSettingTab extends PluginSettingTab {
  plugin: Plugin & ZKPluginLike;

  constructor(app: App, plugin: Plugin & ZKPluginLike) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    const s = this.plugin.settings;
    containerEl.empty();

    new Setting(containerEl)
      .setName("布局方向")
      .setDesc("从左到右（根在左，后代向右）或从上到下")
      .addDropdown((dd) =>
        dd
          .addOption("horizontal", "左 → 右")
          .addOption("vertical", "上 → 下")
          .setValue(s.layout)
          .onChange(async (v) => {
            s.layout = v as ZKSettings["layout"];
            await this.plugin.saveSettings();
            this.plugin.refreshViews();
          })
      );

    new Setting(containerEl)
      .setName("后代默认展开层数")
      .setDesc("当前卡之后代默认展开的深度，更深层折叠为 +N")
      .addText((t) =>
        t.setValue(String(s.descendantFoldDepth)).onChange(async (v) => {
          const n = parseInt(v, 10);
          if (!Number.isNaN(n) && n >= 0) {
            s.descendantFoldDepth = n;
            await this.plugin.saveSettings();
            this.plugin.refreshViews();
          }
        })
      );

    new Setting(containerEl)
      .setName("幽灵节点")
      .setDesc("显示缺失的中间卡（灰色虚线，默认折叠）")
      .addToggle((tg) =>
        tg.setValue(s.showGhosts).onChange(async (v) => {
          s.showGhosts = v;
          await this.plugin.saveSettings();
          this.plugin.refreshViews();
        })
      );

    new Setting(containerEl)
      .setName("默认范围")
      .setDesc("打开卡片时默认只显祖先链+后代（关）；开启则含每层兄弟")
      .addToggle((tg) =>
        tg.setValue(s.defaultIncludeSiblings).onChange(async (v) => {
          s.defaultIncludeSiblings = v;
          await this.plugin.saveSettings();
          this.plugin.refreshViews();
        })
      );

    new Setting(containerEl)
      .setName("分支配色")
      .setDesc("每个根分支一色；关闭则为单色")
      .addToggle((tg) =>
        tg.setValue(s.branchColors).onChange(async (v) => {
          s.branchColors = v;
          await this.plugin.saveSettings();
          this.plugin.refreshViews();
        })
      );

    containerEl.createEl("h3", { text: "高级" });
    new Setting(containerEl)
      .setName("切换防抖 (ms)")
      .setDesc("切换当前卡时重渲染的防抖延迟")
      .addText((t) =>
        t.setValue(String(s.switchDebounce)).onChange(async (v) => {
          const n = parseInt(v, 10);
          if (!Number.isNaN(n) && n >= 0) {
            s.switchDebounce = n;
            await this.plugin.saveSettings();
          }
        })
      );

    new Setting(containerEl)
      .setName("重索引防抖 (ms)")
      .setDesc("frontmatter 变更后重建森林的防抖延迟")
      .addText((t) =>
        t.setValue(String(s.reindexDebounce)).onChange(async (v) => {
          const n = parseInt(v, 10);
          if (!Number.isNaN(n) && n >= 0) {
            s.reindexDebounce = n;
            await this.plugin.saveSettings();
          }
        })
      );
  }
}
