import { type App, type EventRef, type TFile } from "obsidian";
import { buildForest, type Forest, type ZRecord } from "./forest";

/**
 * Indexer — Obsidian 耦合：扫描 vault、读 frontmatter、建森林、防抖监听变更。
 * 纯逻辑（buildForest）在 forest.ts，本类只做 I/O 与事件接线。
 */
export class Indexer {
  app: App;
  forest: Forest = {
    byCode: new Map(),
    byPath: new Map(),
    roots: [],
    orphans: [],
    mismatches: [],
    duplicates: [],
  };

  private listeners: Array<() => void> = [];
  private reindexTimer: number | null = null;
  private reindexDebounce: number;
  private refs: EventRef[] = [];

  constructor(app: App, reindexDebounce = 500) {
    this.app = app;
    this.reindexDebounce = reindexDebounce;
  }

  setReindexDebounce(ms: number): void {
    this.reindexDebounce = ms;
  }

  /** 全量重建森林（遍历 vault，O(n)） */
  build(): void {
    const records: ZRecord[] = [];
    const files: TFile[] = this.app.vault.getMarkdownFiles();
    const cache = this.app.metadataCache;
    for (const file of files) {
      const fc = cache.getFileCache(file);
      const fm = fc?.frontmatter;
      if (!fm) continue;
      const no = fm["zettelkastenNo"];
      if (no === undefined || no === null) continue;
      const rec: ZRecord = { path: file.path, basename: file.basename, no };
      const up = fm["zettelkastenUp"];
      if (typeof up === "string") rec.up = up;
      records.push(rec);
    }
    this.forest = buildForest(records);
    this.emit();
  }

  onChange(cb: () => void): () => void {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== cb);
    };
  }

  private emit(): void {
    for (const l of this.listeners) {
      try {
        l();
      } catch (e) {
        console.error("[zk-forest] onChange listener error", e);
      }
    }
  }

  scheduleRebuild(): void {
    if (this.reindexTimer !== null) window.clearTimeout(this.reindexTimer);
    this.reindexTimer = window.setTimeout(() => {
      this.reindexTimer = null;
      this.build();
    }, this.reindexDebounce);
  }

  register(): void {
    this.refs.push(this.app.metadataCache.on("changed", () => this.scheduleRebuild()));
    this.refs.push(this.app.metadataCache.on("resolved", () => this.scheduleRebuild()));
  }

  unregister(): void {
    for (const r of this.refs) this.app.metadataCache.offref(r);
    this.refs = [];
    if (this.reindexTimer !== null) {
      window.clearTimeout(this.reindexTimer);
      this.reindexTimer = null;
    }
    this.listeners = [];
  }
}
