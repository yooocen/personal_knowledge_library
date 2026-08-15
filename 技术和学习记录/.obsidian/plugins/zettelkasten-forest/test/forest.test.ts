import { describe, it, expect } from "vitest";
import { buildForest, computeTopicTree, type ZRecord, type Forest, type TreeNode } from "../src/forest";

// 工厂：便捷构造记录。no 接受 string|number，up 可选
function rec(path: string, no: unknown, up?: string): ZRecord {
  const basename = path.replace(/\.md$/, "");
  const r: ZRecord = { path, basename, no };
  if (up !== undefined) r.up = up;
  return r;
}

describe("buildForest — empty / invalid", () => {
  it("returns empty forest for no records", () => {
    const f = buildForest([]);
    expect(f.byCode.size).toBe(0);
    expect(f.roots).toEqual([]);
    expect(f.orphans).toEqual([]);
    expect(f.mismatches).toEqual([]);
    expect(f.duplicates).toEqual([]);
  });

  it("skips records with invalid zettelkastenNo (null/empty)", () => {
    const f = buildForest([
      rec("bad1.md", null),
      rec("bad2.md", ""),
      rec("good.md", "1/1"),
    ]);
    expect(f.byCode.size).toBe(1);
    expect(f.byCode.get("1/1")?.title).toBe("good");
  });
});

describe("buildForest — root & parent linking", () => {
  it("marks a lone root with no parent", () => {
    const f = buildForest([rec("数学.md", "1")]);
    const root = f.byCode.get("1")!;
    expect(root.parentCode).toBeNull();
    expect(root.parentPath).toBeNull();
    expect(root.isOrphan).toBe(false);
    expect(f.roots).toContain(root);
  });

  it("links child to parent and fills children/parentPath", () => {
    const f = buildForest([
      rec("数学.md", "1"),
      rec("线性代数.md", "1/1"),
    ]);
    const math = f.byCode.get("1")!;
    const la = f.byCode.get("1/1")!;
    expect(la.parentCode).toBe("1");
    expect(la.parentPath).toBe("数学.md");
    expect(la.isOrphan).toBe(false);
    expect(math.children).toContain(la);
    expect(f.roots).toEqual([math]);
  });

  it("links a 3-level chain (数学→线性代数→绪论)", () => {
    const f = buildForest([
      rec("数学.md", "1"),
      rec("线性代数.md", "1/1"),
      rec("线性代数绪论.md", "1/11"),
    ]);
    const intro = f.byCode.get("1/11")!;
    expect(intro.parentPath).toBe("线性代数.md");
    expect(f.byCode.get("1/1")!.children).toContain(intro);
  });
});

describe("buildForest — orphans (missing parent note)", () => {
  it("flags orphan when inferred parent note does not exist", () => {
    // 分量数 1/11a2 → parent 1/11a, but no 1/11a note exists
    const f = buildForest([rec("分量数.md", "1/11a2")]);
    const node = f.byCode.get("1/11a2")!;
    expect(node.parentCode).toBe("1/11a");
    expect(node.parentPath).toBeNull();
    expect(node.isOrphan).toBe(true);
    expect(f.orphans).toContain(node);
    expect(f.roots).not.toContain(node);
  });

  it("does not flag orphan when parent note exists", () => {
    const f = buildForest([
      rec("数学.md", "1"),
      rec("线性代数.md", "1/1"),
    ]);
    expect(f.byCode.get("1/1")!.isOrphan).toBe(false);
    expect(f.orphans).toEqual([]);
  });
});

describe("buildForest — manual zettelkastenUp resolution", () => {
  it("resolves up '[[数学]]' to code 1 and matches inferred parent → ok", () => {
    const f = buildForest([
      rec("数学.md", "1"),
      rec("线性代数.md", "1/1", "[[数学]]"),
    ]);
    const la = f.byCode.get("1/1")!;
    expect(la.hasManualUp).toBe(true);
    expect(la.upTargetCode).toBe("1");
    expect(la.isMismatch).toBe(false);
    expect(f.mismatches).toEqual([]);
  });

  it("flags mismatch when up points to a note whose code != inferred parent", () => {
    // 第1章 1/12 → inferred parent 1/1 (线性代数), but up wrongly points to 数学(1)
    const f = buildForest([
      rec("数学.md", "1"),
      rec("线性代数.md", "1/1"),
      rec("第1章.md", "1/12", "[[数学]]"),
    ]);
    const ch1 = f.byCode.get("1/12")!;
    expect(ch1.upTargetCode).toBe("1");
    expect(ch1.parentCode).toBe("1/1");
    expect(ch1.isMismatch).toBe(true);
    expect(f.mismatches).toContain(ch1);
  });

  it("leaves upTargetCode null (no mismatch) when up target note not found", () => {
    const f = buildForest([
      rec("数学.md", "1"),
      rec("线性代数.md", "1/1", "[[不存在的笔记]]"),
    ]);
    const la = f.byCode.get("1/1")!;
    expect(la.upTargetCode).toBeNull();
    expect(la.isMismatch).toBe(false);
    expect(la.hasManualUp).toBe(true);
  });

  it("handles up with path/alias form [[folder/数学|alias]]", () => {
    const f = buildForest([
      rec("数学.md", "1"),
      rec("线性代数.md", "1/1", "[[sub/数学|线代之父]]"),
    ]);
    expect(f.byCode.get("1/1")!.upTargetCode).toBe("1");
  });
});

describe("buildForest — duplicates", () => {
  it("flags the second note sharing a code as duplicate", () => {
    const f = buildForest([
      rec("数学.md", "1"),
      rec("数学-copy.md", "1"),
    ]);
    expect(f.byCode.size).toBe(1);
    expect(f.byCode.get("1")?.path).toBe("数学.md");
    expect(f.duplicates).toHaveLength(1);
    expect(f.duplicates[0].path).toBe("数学-copy.md");
    expect(f.duplicates[0].isDuplicate).toBe(true);
  });
});

describe("buildForest — real vault subset (integration)", () => {
  it("builds the math + zettelkasten branches correctly", () => {
    const f = buildForest([
      rec("数学.md", "1"),
      rec("线性代数.md", "1/1", "[[数学]]"),
      rec("线性代数绪论.md", "1/11", "[[线性代数]]"),
      rec("第1章-向量引论.md", "1/12", "[[线性代数]]"),
      rec("第2章 求解线性方程组.md", "1/13", "[[线性代数]]"),
      rec("分量数.md", "1/11a2"), // orphan: 1/11a missing
      rec("卡片盒笔记法-编码系统.md", "2"),
      rec("卡片盒编码 vs TheBrain.md", "2/1", "[[卡片盒笔记法-编码系统]]"),
      rec("zettelkasten编码规则.md", "2/2", "[[卡片盒笔记法-编码系统]]"),
    ]);

    expect(f.byCode.size).toBe(9);
    expect(f.roots.map((n) => n.code).sort()).toEqual(["1", "2"]);

    // 线性代数绪论的 up 正确指向 线性代数
    expect(f.byCode.get("1/11")!.upTargetCode).toBe("1/1");
    expect(f.byCode.get("1/11")!.isMismatch).toBe(false);

    // 分量数是孤儿（1/11a 不存在）
    expect(f.byCode.get("1/11a2")!.isOrphan).toBe(true);
    expect(f.orphans.map((n) => n.code)).toEqual(["1/11a2"]);

    // 线性代数的孩子：绪论、第1章、第2章（但不是分量数，分量数的父是 1/11a）
    const la = f.byCode.get("1/1")!;
    expect(la.children.map((n) => n.code).sort()).toEqual(["1/11", "1/12", "1/13"]);

    // 无 mismatch、无 duplicate
    expect(f.mismatches).toEqual([]);
    expect(f.duplicates).toEqual([]);
  });
});

describe("buildForest — byPath index", () => {
  it("indexes nodes by vault path for current-card lookup", () => {
    const f = buildForest([
      rec("数学.md", "1"),
      rec("线性代数.md", "1/1"),
    ]);
    expect(f.byPath.get("线性代数.md")?.code).toBe("1/1");
    expect(f.byPath.get("数学.md")?.code).toBe("1");
    expect(f.byPath.get("nope.md")).toBeUndefined();
  });
});

// ---- computeTopicTree ----

// 测试用森林：数学(1) > 线性代数(1/1) > 绪论(1/11) + 第1章(1/12 同级) > 分支a(1/11a) > 分量数(1/11a2) > 孙(1/11a21)
function mathForest(): Forest {
  return buildForest([
    rec("数学.md", "1"),
    rec("线性代数.md", "1/1"),
    rec("绪论.md", "1/11"),
    rec("第1章.md", "1/12"),
    rec("分支a.md", "1/11a"),
    rec("分量数.md", "1/11a2"),
    rec("孙.md", "1/11a21"),
  ]);
}

function codes(tree: TreeNode | null): string[] {
  if (!tree) return [];
  return [tree.code, ...tree.children.flatMap(codes)];
}

describe("computeTopicTree — current is root", () => {
  it("returns root with descendants to maxDepth", () => {
    const f = mathForest();
    const tree = computeTopicTree(f, "数学.md", { includeSiblings: false, maxDescendantDepth: 5 });
    expect(tree?.code).toBe("1");
    expect(tree?.isCurrent).toBe(true);
    // descendants: 1/1 > 1/11 > 1/11a > 1/11a2 > 1/11a21, plus 1/12
    expect(codes(tree).sort()).toEqual(["1", "1/1", "1/11", "1/11a", "1/11a2", "1/11a21", "1/12"]);
  });

  it("limits descendants by maxDescendantDepth", () => {
    const f = mathForest();
    const tree = computeTopicTree(f, "数学.md", { includeSiblings: false, maxDescendantDepth: 1 });
    // depth 1 below current: only direct children of 数学 (1/1)
    expect(tree?.children.map((c) => c.code)).toEqual(["1/1"]);
    expect(tree?.children[0].children).toEqual([]); // deeper hidden
  });
});

describe("computeTopicTree — mid-chain current (i: chain + descendants)", () => {
  it("shows ancestor chain root→current + current's descendants", () => {
    const f = mathForest();
    // current = 分量数(1/11a2)
    const tree = computeTopicTree(f, "分量数.md", { includeSiblings: false, maxDescendantDepth: 5 });
    // chain: 1>1/1>1/11>1/11a>1/11a2(cur) ; descendants: 1/11a21 ; sibling 1/12 NOT shown
    expect(codes(tree).sort()).toEqual(["1", "1/1", "1/11", "1/11a", "1/11a2", "1/11a21"]);
    expect(tree?.code).toBe("1");
    // current node marked
    const cur = tree?.children[0].children[0].children[0].children[0];
    expect(cur?.code).toBe("1/11a2");
    expect(cur?.isCurrent).toBe(true);
  });
});

describe("computeTopicTree — orphan ancestor → ghost node", () => {
  it("inserts a ghost for a missing intermediate ancestor", () => {
    // current = 分量数(1/11a2) but 1/11a note does NOT exist → ghost in chain
    const f = buildForest([
      rec("数学.md", "1"),
      rec("线性代数.md", "1/1"),
      rec("绪论.md", "1/11"),
      rec("分量数.md", "1/11a2"), // orphan: parent 1/11a missing
    ]);
    const tree = computeTopicTree(f, "分量数.md", { includeSiblings: false, maxDescendantDepth: 5 });
    // chain: 1 > 1/1 > 1/11 > [ghost 1/11a] > 1/11a2(cur)
    const ghost = tree?.children[0].children[0].children[0];
    expect(ghost?.code).toBe("1/11a");
    expect(ghost?.isGhost).toBe(true);
    expect(ghost?.node).toBeNull();
    expect(ghost?.children[0].code).toBe("1/11a2");
    expect(ghost?.children[0].isCurrent).toBe(true);
  });
});

describe("computeTopicTree — includeSiblings toggle", () => {
  it("without siblings: hides non-chain children of ancestors (1/12)", () => {
    const f = mathForest();
    const tree = computeTopicTree(f, "分量数.md", { includeSiblings: false, maxDescendantDepth: 5 });
    expect(codes(tree)).not.toContain("1/12");
  });

  it("with siblings: shows sibling 1/12 at the 1/1 level as a leaf", () => {
    const f = mathForest();
    const tree = computeTopicTree(f, "分量数.md", { includeSiblings: true, maxDescendantDepth: 5 });
    // 线性代数(1/1) children should include both 绪论(1/11, chain) and 第1章(1/12, sibling leaf)
    const la = tree?.children[0]; // 1/1
    const childCodes = la?.children.map((c) => c.code);
    expect(childCodes?.sort()).toEqual(["1/11", "1/12"]);
    // sibling 1/12 is a leaf (no descendants expanded)
    const sib = la?.children.find((c) => c.code === "1/12");
    expect(sib?.children).toEqual([]);
  });
});

describe("computeTopicTree — edge cases", () => {
  it("returns null when currentPath not a zettelkasten note", () => {
    const f = mathForest();
    expect(computeTopicTree(f, "nonexistent.md", { includeSiblings: false, maxDescendantDepth: 5 })).toBeNull();
  });

  it("returns null when currentPath is null", () => {
    const f = mathForest();
    expect(computeTopicTree(f, null, { includeSiblings: false, maxDescendantDepth: 5 })).toBeNull();
  });
});
