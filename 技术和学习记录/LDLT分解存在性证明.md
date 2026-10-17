---
title: 对称矩阵 LDLᵀ 分解的存在性证明
book: "[[线性代数引论原书第五版(introduction to linear algebra 中译版) .pdf|线性代数引论(第五版)]]"
chapter: 2
related:
  - "[[第2章 求解线性方程组]]"
  - "[[第2章 中等难度习题]]"
tags:
  - 线性代数
  - 数学证明
  - LDLT分解
  - 对称矩阵
  - math
created: 2026-08-08
zettelkastenNo: 1/131a1
---
# 对称矩阵 $LDL^\mathsf{T}$ 分解的存在性证明

> 配套笔记：解答 [[第2章 中等难度习题]] 习题 4 时"为什么一定能分解"这一层。本文用 **Schur 补 + 数学归纳** 给出严格证明，并顺带解释对称性为何让消元只需处理"半边"。

## 1. 定理陈述

**定理（$LDL^\mathsf{T}$ 分解存在性）**：设 $S$ 是 $n\times n$ 实对称矩阵，且 $S$ 的所有**顺序主子式**非零（即高斯消元全程无需置换、主元均非零）。则存在**单位下三角**矩阵 $L$ 和**对角**矩阵 $D$，使得

$$S = L\,D\,L^\mathsf{T}$$

并且这种分解在 $D$ 的对角元按消元顺序固定时是唯一的。

> 说明：条件"顺序主子式非零"是保证分母（主元）不为零。若某个中间主元为 0，可先做对称置换 $P S P^\mathsf{T}$ 再分解（见第 5 节）。正定矩阵自然满足该条件（正定 ⇒ 各阶顺序主子式 > 0）。

## 2. 证明思路：分块消元，逐步剥壳

核心思想：**把消元的第一步做个"块"版本，看它如何把对称性保留下来，然后对缩小的对称子矩阵重复。**

把 $S$ 分成 $2\times2$ 块：

$$S = \begin{pmatrix} a & b^\mathsf{T} \\ b & C \end{pmatrix}$$

其中 $a = s_{11}$（第一行第一列，非零主元），$b$ 是第一列下方的 $n-1$ 维列向量，$C$ 是右下角 $(n-1)\times(n-1)$ 对称子矩阵（$S$ 对称 ⟹ $C=C^\mathsf{T}$）。

## 3. 关键一步：块消元保持对称性

定义第一列下方的乘数向量

$$l = \frac{1}{a}\,b$$

（即消元第一步中 $l_{i1} = b_i / a$ 的向量形式），并定义 **Schur 补**

$$C' = C - \frac{1}{a}\,b b^\mathsf{T} = C - a\,l l^\mathsf{T}.$$

**这个式子从哪来？** 它不是凭空定义的，而是从"想把 $S$ 写成三明治形式"反推出来的。设 $al=b$，先把右端乘开：

$$\begin{pmatrix} 1 & 0 \\ l & I \end{pmatrix}\begin{pmatrix} a & 0 \\ 0 & C' \end{pmatrix}\begin{pmatrix} 1 & l^\mathsf{T} \\ 0 & I \end{pmatrix} = \begin{pmatrix} a & al^\mathsf{T} \\ la & lal^\mathsf{T}+C' \end{pmatrix}$$

再与 $S=\begin{pmatrix}a&b^\mathsf{T}\\b&C\end{pmatrix}$ 逐块对齐：左上、右上、左下（用 $al=b$）自动吻合；右下要 $lal^\mathsf{T}+C'=C$，于是 $C'=C-lal^\mathsf{T}$ —— 正是"右下块必须对上"这一条件唯一逼出的剩余块。

两种写法等价：用 $l=b/a$ 代回得 $lal^\mathsf{T}=\frac{1}{a}bb^\mathsf{T}$；用 $b=al$ 代又得 $C'=C-all^\mathsf{T}$（注意 $ll^\mathsf{T}$ 是**外积**矩阵而非标量，$a$ 是标量）。

直观上这就是普通高斯消元的矩阵化：用主元 $a$ 消第一列时，右下角每个元素变为 $C_{ij}-\dfrac{b_ib_j}{a}$，而 $bb^\mathsf{T}$ 的第 $(i,j)$ 元恰为 $b_ib_j$，故 $C'$ 正是"消完第一行第一列后剩下的右下块"（Schur 补）。下面验证这一分解确实成立。

**断言**：$S$ 可以写成下面的"三明治"形式：

$$S = \underbrace{\begin{pmatrix} 1 & 0 \\ l & I \end{pmatrix}}_{L'} \underbrace{\begin{pmatrix} a & 0 \\ 0 & C' \end{pmatrix}}_{\text{对角块} + C'} \underbrace{\begin{pmatrix} 1 & l^\mathsf{T} \\ 0 & I \end{pmatrix}}_{L'^\mathsf{T}}$$

**验证**（逐块相乘）：

- 第一列：$\begin{pmatrix} 1 & 0 \\ l & I \end{pmatrix}\begin{pmatrix} a \\ 0 \end{pmatrix} = \begin{pmatrix} a \\ a\,l \end{pmatrix} = \begin{pmatrix} a \\ b \end{pmatrix}$ ✓（用了 $al=b$）。
- 第一行：右乘 $L'^\mathsf{T}$ 时第一行贡献 $a\cdot(1,\,l^\mathsf{T}) = (a,\,b^\mathsf{T})$ ✓（用了 $al^\mathsf{T}=b^\mathsf{T}$）。
- 右下块：得 $b\,l^\mathsf{T} + C' = \dfrac{bb^\mathsf{T}}{a} + \left(C - \dfrac{bb^\mathsf{T}}{a}\right) = C$ ✓。

**关键观察**：$C' = C - \frac{1}{a}bb^\mathsf{T}$ 仍是**对称矩阵**（$C$ 对称，$bb^\mathsf{T}$ 对称，差仍对称）。所以 $C'$ 满足与 $S$ 完全相同的条件，可以继续对它做同样的事。

## 4. 归纳完成证明

对 $n$ 做数学归纳。

- **$n=1$**：$S = [a]$，取 $L=[1],\ D=[a]$，则 $LDL^\mathsf{T}=[a]=S$ ✓。
- **归纳步**：设结论对 $n-1$ 成立。由第 3 节，

$$S = L' \begin{pmatrix} a & 0 \\ 0 & C' \end{pmatrix} L'^\mathsf{T}$$

其中 $C'$ 是 $n-1$ 阶对称矩阵且其顺序主子式即原 $S$ 的后 $n-1$ 个顺序主子式（非零）。由归纳假设，$C' = L_1 D_1 L_1^\mathsf{T}$（$L_1$ 单位下三角，$D_1$ 对角）。代入：

$$\begin{pmatrix} a & 0 \\ 0 & C' \end{pmatrix} = \underbrace{\begin{pmatrix} 1 & 0 \\ 0 & L_1 \end{pmatrix}}_{L''}\underbrace{\begin{pmatrix} a & 0 \\ 0 & D_1 \end{pmatrix}}_{D}\underbrace{\begin{pmatrix} 1 & 0 \\ 0 & L_1^\mathsf{T} \end{pmatrix}}_{L''^\mathsf{T}}$$

于是 $S = (L'L'')\,D\,(L'L'')^\mathsf{T}$。令 $L = L'L''$。$L'$ 与 $L''$ 都是单位下三角，其乘积 $L$ 仍为单位下三角；$D = \operatorname{diag}(a,\,D_1)$ 为对角。故 $S = LDL^\mathsf{T}$。归纳完成。

> 分解形态：$L$ 由各层乘数向量 $l^{(1)},l^{(2)},\dots$ 拼成，$D$ 由各层主元 $a_1,a_2,\dots$（即消元残留的 $d_1,d_2,\dots$）拼成。

## 5. 为什么只需处理"半边"（对称性的真正威力）

回看第 3 节的关键等式：

$$C' = C - \frac{1}{a}\,b b^\mathsf{T} = C - a\,l l^\mathsf{T}$$

它只用到了**第一列** $b$（下三角乘数的来源）和**一个对角元** $a$，就更新了整个右下块 $C'$。而 $L'$ 的上三角部分不是另行计算的——它**自动等于 $l^\mathsf{T}$**（$l$ 的转置）。

把各层展开：$U = D L^\mathsf{T}$，逐元素即 $u_{ij} = d_i\,l_{ji}$。也就是说，**上三角每个元素都被下三角对应乘数与主元"锁定"**，无需单独算。这就是"消元只需处理半边"的严格出处：
- 你只需计算并存储**下三角的乘数**（填充 $L$）与**对角的主元**（填充 $D$）；
- 上三角由对称性强制等于 $L^\mathsf{T}$（再挂上 $D$）。

计算量：对称矩阵做一次消元的乘除次数约 $n^3/6$，只有非对称 LU（$n^3/3$）的一半。

## 6. 主元为零怎么办（前提条件的边界）

上面的证明每一步都要求主元 $a \neq 0$（否则 $l=b/a$ 无意义）。若某个中间主元为 0：

- 若 $S$ 正定，则所有顺序主子式 > 0，主元永不为 0，条件自动满足（这是本书最关心的情形）。
- 一般对称矩阵，中间可能遇到 0 主元。此时可做**对称置换** $P S P^\mathsf{T}$（$P$ 为置换矩阵），把非零元素换到主元位置，再分解：$P S P^\mathsf{T} = L_0 D_0 L_0^\mathsf{T}$，从而 $S = (P^\mathsf{T}L_0 P)(P^\mathsf{T}D_0 P)(P^\mathsf{T}L_0P)^\mathsf{T}$。注意 $P$ 同时作用在两侧，保证对称性不被破坏。

因此"一定能分解"的准确表述是：**非零对角线主元路径存在时**（正定乃至各阶顺序主子式非零即足够），对称矩阵必可分解为 $LDL^\mathsf{T}$。

## 7. 一行直观总结

> 对称矩阵的消元是"自洽"的：第一步只消一列，对称性就让同一份信息自动补全了另一半。于是每剥一层壳，剩下的 Schur 补仍是对称的，可以一直剥到 1×1——这就是 $LDL^\mathsf{T}$ 必然存在的原因。