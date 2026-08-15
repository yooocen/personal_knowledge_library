import { describe, it, expect } from "vitest";
import { parseZettelkastenNo, type ParsedZettel } from "../src/parser";

describe("parseZettelkastenNo — normalization", () => {
  it("normalizes YAML number 1 to root path ['1']", () => {
    expect(parseZettelkastenNo(1)).toEqual<ParsedZettel>({
      path: ["1"],
      canonical: "1",
      parent: null,
    });
  });

  it("normalizes quoted string '1' the same as number 1", () => {
    expect(parseZettelkastenNo("1")).toEqual<ParsedZettel>({
      path: ["1"],
      canonical: "1",
      parent: null,
    });
  });

  it("trims surrounding whitespace", () => {
    expect(parseZettelkastenNo(" 1/1 ")).toEqual<ParsedZettel>({
      path: ["1", "1"],
      canonical: "1/1",
      parent: "1",
    });
  });
});

describe("parseZettelkastenNo — real vault cases (16 notes)", () => {
  it("parses root 1 (数学) → no parent", () => {
    expect(parseZettelkastenNo(1)).toEqual<ParsedZettel>({
      path: ["1"],
      canonical: "1",
      parent: null,
    });
  });

  it("parses 1/1 (线性代数) → parent 1", () => {
    expect(parseZettelkastenNo("1/1")).toEqual<ParsedZettel>({
      path: ["1", "1"],
      canonical: "1/1",
      parent: "1",
    });
  });

  it("parses 1/11 (线性代数绪论) → parent 1/1 [single-char suffix]", () => {
    expect(parseZettelkastenNo("1/11")).toEqual<ParsedZettel>({
      path: ["1", "1", "1"],
      canonical: "1/11",
      parent: "1/1",
    });
  });

  it("parses 1/12 (第1章-向量引论) → parent 1/1 [not 'root 1 item 12']", () => {
    expect(parseZettelkastenNo("1/12")).toEqual<ParsedZettel>({
      path: ["1", "1", "2"],
      canonical: "1/12",
      parent: "1/1",
    });
  });

  it("parses 1/13 (第2章 求解线性方程组) → parent 1/1", () => {
    expect(parseZettelkastenNo("1/13")).toEqual<ParsedZettel>({
      path: ["1", "1", "3"],
      canonical: "1/13",
      parent: "1/1",
    });
  });

  it("parses 1/11a2 (分量数) → parent 1/11a [letter branches]", () => {
    expect(parseZettelkastenNo("1/11a2")).toEqual<ParsedZettel>({
      path: ["1", "1", "1", "a", "2"],
      canonical: "1/11a2",
      parent: "1/11a",
    });
  });

  it("parses 1/11c1 → parent 1/11c", () => {
    expect(parseZettelkastenNo("1/11c1")).toEqual<ParsedZettel>({
      path: ["1", "1", "1", "c", "1"],
      canonical: "1/11c1",
      parent: "1/11c",
    });
  });

  it("parses root 2 (卡片盒笔记法-编码系统) → no parent", () => {
    expect(parseZettelkastenNo(2)).toEqual<ParsedZettel>({
      path: ["2"],
      canonical: "2",
      parent: null,
    });
  });

  it("parses 2/1 (卡片盒编码 vs TheBrain) → parent 2", () => {
    expect(parseZettelkastenNo("2/1")).toEqual<ParsedZettel>({
      path: ["2", "1"],
      canonical: "2/1",
      parent: "2",
    });
  });

  it("parses 2/2 (zettelkasten编码规则) → parent 2", () => {
    expect(parseZettelkastenNo("2/2")).toEqual<ParsedZettel>({
      path: ["2", "2"],
      canonical: "2/2",
      parent: "2",
    });
  });
});

describe("parseZettelkastenNo — multi-digit root", () => {
  it("parses multi-digit root 21 as single unit", () => {
    expect(parseZettelkastenNo("21")).toEqual<ParsedZettel>({
      path: ["21"],
      canonical: "21",
      parent: null,
    });
  });

  it("parses 21/3 → parent 21", () => {
    expect(parseZettelkastenNo("21/3")).toEqual<ParsedZettel>({
      path: ["21", "3"],
      canonical: "21/3",
      parent: "21",
    });
  });
});

describe("parseZettelkastenNo — canonical dedup", () => {
  it("normalizes 1/1/1 (multi-slash) to canonical 1/11", () => {
    expect(parseZettelkastenNo("1/1/1")).toEqual<ParsedZettel>({
      path: ["1", "1", "1"],
      canonical: "1/11",
      parent: "1/1",
    });
  });

  it("normalizes 1//1 (double slash) to canonical 1/1", () => {
    expect(parseZettelkastenNo("1//1")).toEqual<ParsedZettel>({
      path: ["1", "1"],
      canonical: "1/1",
      parent: "1",
    });
  });

  it("treats trailing slash 1/ as root 1", () => {
    expect(parseZettelkastenNo("1/")).toEqual<ParsedZettel>({
      path: ["1"],
      canonical: "1",
      parent: null,
    });
  });
});

describe("parseZettelkastenNo — invalid input returns null", () => {
  it("returns null for empty string", () => {
    expect(parseZettelkastenNo("")).toBeNull();
  });

  it("returns null for whitespace-only string", () => {
    expect(parseZettelkastenNo("   ")).toBeNull();
  });

  it("returns null for null", () => {
    expect(parseZettelkastenNo(null)).toBeNull();
  });

  it("returns null for undefined", () => {
    expect(parseZettelkastenNo(undefined)).toBeNull();
  });

  it("returns null for object", () => {
    expect(parseZettelkastenNo({ foo: "bar" })).toBeNull();
  });

  it("returns null for array", () => {
    expect(parseZettelkastenNo([1, 2])).toBeNull();
  });

  it("returns null for boolean", () => {
    expect(parseZettelkastenNo(true)).toBeNull();
  });
});

describe("parseZettelkastenNo — parent chain helpers", () => {
  it("parent of 1/11a2 is 1/11a", () => {
    expect(parseZettelkastenNo("1/11a2")?.parent).toBe("1/11a");
  });

  it("parent of root is null", () => {
    expect(parseZettelkastenNo("1")?.parent).toBeNull();
    expect(parseZettelkastenNo("2")?.parent).toBeNull();
  });

  it("canonical equals input for already-canonical codes", () => {
    expect(parseZettelkastenNo("1/11a2")?.canonical).toBe("1/11a2");
    expect(parseZettelkastenNo("2/1")?.canonical).toBe("2/1");
  });
});
