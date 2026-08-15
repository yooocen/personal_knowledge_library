/**
 * parser.ts — Folgezettel 编码解析（纯函数，零依赖，全单元测试）
 *
 * 规则（经 16 篇真实笔记 + 6 个手动 zettelkastenUp 全部验证）：
 *   - 值按第一个 `/` 切分：前半 = 根（多位数字，如 1/2/21），后半 = 后缀
 *   - 后缀去掉所有 `/` 后按【单字符】切成单元（每个字符一个 unit）
 *   - 完整路径 = [根, …后缀字符]
 *   - 父 = 去掉末单元后的规范码；路径仅 1 个单元 → 根，无父
 *   - 规范码 = 根 +（路径长 >1 时）`/` + 后缀字符拼接 → 不同写法归一（去重）
 *
 * 约束：单条思路延续 ≤10 → 数字单元永远个位（1-9），零歧义。
 */

export interface ParsedZettel {
  /** 完整路径单元，如 ['1','1','1','a','2'] */
  path: string[];
  /** 规范码，如 '1/11a2'（去重键） */
  canonical: string;
  /** 推断的父规范码；根节点为 null */
  parent: string | null;
}

/** 由路径单元数组计算规范码 */
function canonicalOf(path: string[]): string {
  if (path.length <= 1) return path[0] ?? "";
  return path[0] + "/" + path.slice(1).join("");
}

/**
 * 解析 zettelkastenNo 原始值（YAML 可能给出 number 或 string）。
 * 无效输入（空/null/非字符串非数字）返回 null。
 */
export function parseZettelkastenNo(value: unknown): ParsedZettel | null {
  // 归一化：number → string
  if (typeof value === "number") {
    value = String(value);
  }
  if (typeof value !== "string") {
    return null;
  }

  // 去空白 + 去外层匹配引号
  let s = value.trim();
  if (s.length >= 2) {
    const first = s[0];
    const last = s[s.length - 1];
    if ((first === '"' && last === '"') || (first === "'" && last === "'")) {
      s = s.slice(1, -1).trim();
    }
  }
  if (s.length === 0) {
    return null;
  }

  // 按第一个 / 切分根与后缀
  const slashIdx = s.indexOf("/");
  let root: string;
  let suffixRaw: string;
  if (slashIdx === -1) {
    root = s;
    suffixRaw = "";
  } else {
    root = s.slice(0, slashIdx);
    suffixRaw = s.slice(slashIdx + 1);
  }

  // 根不能为空（如输入 "/1"）
  if (root.length === 0) {
    return null;
  }

  // 后缀去掉所有 /，按单字符切单元
  const suffixStr = suffixRaw.replace(/\//g, "");
  const units: string[] = [];
  for (const ch of suffixStr) {
    units.push(ch);
  }

  const path = [root, ...units];
  const canonical = canonicalOf(path);
  const parent = path.length > 1 ? canonicalOf(path.slice(0, -1)) : null;

  return { path, canonical, parent };
}
