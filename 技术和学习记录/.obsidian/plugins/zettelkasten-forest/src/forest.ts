/**
 * forest.ts — 纯函数建森林（零 Obsidian 依赖，全单元测试）
 *
 * 输入 ZRecord[]（从 frontmatter 提取的原始记录）→ 输出 Forest：
 *   - byCode/byPath 索引
 *   - roots（根）、orphans（推断父码但父笔记缺失）、mismatches（手动 up 与推断父不一致）、duplicates（同码碰撞）
 *
 * 幽灵节点不在本层生成（treeView 渲染时按祖先链按需合成），本层只标记 orphan。
 */
import { parseZettelkastenNo } from "./parser";

export interface ZRecord {
  /** vault path, e.g. "数学.md" */
  path: string;
  /** note name without extension */
  basename: string;
  /** raw zettelkastenNo value (string or number) */
  no: unknown;
  /** raw zettelkastenUp value, e.g. "[[数学]]" (with brackets), if present */
  up?: string;
}

export interface ZNode {
  code: string;
  path: string;
  title: string;
  parentCode: string | null;
  parentPath: string | null;
  children: ZNode[];
  hasManualUp: boolean;
  upTargetCode: string | null;
  isOrphan: boolean;
  isMismatch: boolean;
  isDuplicate: boolean;
}

export interface Forest {
  byCode: Map<string, ZNode>;
  byPath: Map<string, ZNode>;
  roots: ZNode[];
  orphans: ZNode[];
  mismatches: ZNode[];
  duplicates: ZNode[];
}

/** 从 zettelkastenUp 原始值 "[[target|alias]]" 或 "[[folder/target]]" 提取目标笔记名 */
export function parseUpTarget(up: string): string | null {
  const s = up.trim();
  const m = s.match(/^\[\[(.+)\]\]$/);
  let inner: string;
  if (m) {
    inner = m[1];
  } else if (s.length > 0) {
    // 无括号的裸笔记名（容错）
    return s;
  } else {
    return null;
  }
  // 去 alias
  const pipe = inner.indexOf("|");
  if (pipe !== -1) inner = inner.slice(0, pipe);
  // 取最后一段作 basename
  const slash = inner.lastIndexOf("/");
  const basename = slash !== -1 ? inner.slice(slash + 1) : inner;
  return basename.length > 0 ? basename : null;
}

export function buildForest(records: ZRecord[]): Forest {
  const byCode = new Map<string, ZNode>();
  const byPath = new Map<string, ZNode>();
  const byBasename = new Map<string, ZRecord>();
  const recByPath = new Map<string, ZRecord>();
  const roots: ZNode[] = [];
  const orphans: ZNode[] = [];
  const mismatches: ZNode[] = [];
  const duplicates: ZNode[] = [];
  const allNodes: ZNode[] = [];

  // 预建 basename / path 索引（供 up 解析）
  for (const r of records) {
    byBasename.set(r.basename, r); // 末位胜（重名时取最后；v1 容忍歧义）
    recByPath.set(r.path, r);
  }

  // 第一遍：解析编码、建节点、按规范码去重
  for (const r of records) {
    const parsed = parseZettelkastenNo(r.no);
    if (!parsed) continue; // 无效编码跳过
    const hasUp = r.up !== undefined && r.up !== null && r.up !== "";
    const node: ZNode = {
      code: parsed.canonical,
      path: r.path,
      title: r.basename,
      parentCode: parsed.parent,
      parentPath: null,
      children: [],
      hasManualUp: hasUp,
      upTargetCode: null,
      isOrphan: false,
      isMismatch: false,
      isDuplicate: false,
    };
    allNodes.push(node);
    byPath.set(r.path, node);
    if (byCode.has(node.code)) {
      node.isDuplicate = true;
      duplicates.push(node);
    } else {
      byCode.set(node.code, node);
    }
  }

  // 第二遍：连父边
  for (const node of allNodes) {
    if (node.isDuplicate) continue; // 重复节点不参与连边（歧义）
    if (node.parentCode === null) {
      roots.push(node);
    } else {
      const parent = byCode.get(node.parentCode);
      if (parent) {
        node.parentPath = parent.path;
        parent.children.push(node);
      } else {
        node.isOrphan = true;
        orphans.push(node);
      }
    }
  }

  // 第三遍：解析手动 up，检测 mismatch
  for (const node of allNodes) {
    if (!node.hasManualUp || node.isDuplicate) continue;
    const rec = recByPath.get(node.path);
    const upRaw = rec?.up;
    if (!upRaw) continue;
    const target = parseUpTarget(upRaw);
    if (!target) continue;
    const targetRec = byBasename.get(target);
    if (!targetRec) continue;
    const targetParsed = parseZettelkastenNo(targetRec.no);
    if (!targetParsed) continue;
    node.upTargetCode = targetParsed.canonical;
    if (targetParsed.canonical !== node.parentCode) {
      node.isMismatch = true;
      mismatches.push(node);
    }
  }

  return { byCode, byPath, roots, orphans, mismatches, duplicates };
}

// ---- computeTopicTree ----

export interface TreeNode {
  code: string;
  node: ZNode | null; // null = ghost (missing intermediate)
  isGhost: boolean;
  isCurrent: boolean;
  children: TreeNode[];
}

function canonicalOfPath(path: string[]): string {
  if (path.length <= 1) return path[0] ?? "";
  return path[0] + "/" + path.slice(1).join("");
}

/** 祖先链规范码：从根到 code 自身（含），按路径前缀 */
function ancestorCodes(code: string): string[] {
  const p = parseZettelkastenNo(code);
  if (!p) return [];
  const out: string[] = [];
  for (let i = 1; i <= p.path.length; i++) {
    out.push(canonicalOfPath(p.path.slice(0, i)));
  }
  return out;
}

/** 后代子树（纯后代，深度受限） */
function buildDescendant(node: ZNode, depth: number, maxDepth: number): TreeNode {
  const tn: TreeNode = { code: node.code, node, isGhost: false, isCurrent: false, children: [] };
  if (depth < maxDepth) {
    for (const child of node.children) {
      tn.children.push(buildDescendant(child, depth + 1, maxDepth));
    }
  }
  return tn;
}

function buildLeaf(node: ZNode): TreeNode {
  return { code: node.code, node, isGhost: false, isCurrent: false, children: [] };
}

/**
 * 计算当前卡的话题树：
 *   - 祖先链（根→当前）全显，缺失中间卡插幽灵节点
 *   - 当前后代展开到 maxDescendantDepth 层
 *   - includeSiblings 时在每个祖先层附挂兄弟（叶节点，不展开其后代）
 *   - 当前是根时退化为"全部后代子树"
 */
export function computeTopicTree(
  forest: Forest,
  currentPath: string | null,
  opts: { includeSiblings: boolean; maxDescendantDepth: number }
): TreeNode | null {
  if (!currentPath) return null;
  const current = forest.byPath.get(currentPath);
  if (!current) return null;
  const chain = ancestorCodes(current.code);
  if (chain.length === 0) return null;
  const k = chain.length - 1; // 当前的链索引

  const build = (chainIdx: number): TreeNode => {
    const code = chain[chainIdx];
    const node = forest.byCode.get(code) ?? null;
    const isGhost = node === null;
    const isCurrent = chainIdx === k;
    const tn: TreeNode = { code, node, isGhost, isCurrent, children: [] };

    if (isCurrent) {
      if (node) {
        for (const child of node.children) {
          tn.children.push(buildDescendant(child, 1, opts.maxDescendantDepth));
        }
      }
      return tn;
    }

    // 祖先层：附挂链子（可能是幽灵）+ 可选兄弟
    const nextCode = chain[chainIdx + 1];
    tn.children.push(build(chainIdx + 1));
    if (opts.includeSiblings && node) {
      for (const child of node.children) {
        if (child.code !== nextCode) {
          tn.children.push(buildLeaf(child));
        }
      }
    }
    return tn;
  };

  return build(0);
}
