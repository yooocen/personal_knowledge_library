---
title: 为什么"代入"可以——LDLᵀ 证明第 4 节补充
related:
  - "[[LDLT分解存在性证明]]"
tags:
  - 线性代数
  - LDLT分解
  - 数学证明
  - math
created: 2026-08-09
zettelkastenNo: 1/131a12
---

# 为什么"代入"可以——LDLᵀ 证明第 4 节补充

> 本文是针对 [[LDLT分解存在性证明]] 第 4 节（归纳步）中"代入"一行的**低速展开**。原证明只写一步就得到结果，这里把"为什么合法"讲透，并附具体数值例子。

## 1. 原证明里的那一行

原笔记第 83–85 行：

> 由归纳假设，$C' = L_1 D_1 L_1^\mathsf{T}$（$L_1$ 单位下三角，$D_1$ 对角）。代入：
>
> $$\begin{pmatrix} a & 0 \\ 0 & C' \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & L_1 \end{pmatrix}\begin{pmatrix} a & 0 \\ 0 & D_1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & L_1^\mathsf{T} \end{pmatrix}$$

"代入"看起来像一步魔术，其实拆成两件独立的事，每件事都平凡。

## 2. 第一件事：代入为什么合法（矩阵等式）

归纳假设给的是**矩阵等式**：

$$C' = L_1 D_1 L_1^\mathsf{T}$$

意思是 $C'$ 与 $L_1D_1L_1^\mathsf{T}$ 的**每一个元素都相等**。

我们要处理的矩阵

$$\begin{pmatrix} a & 0 \\ 0 & C' \end{pmatrix}$$

右下角那块**就是** $C'$。既然 $C'$ 和 $L_1D_1L_1^\mathsf{T}$ 处处相同，把这一整块替换掉，矩阵内容分毫不变。所以：

$$\begin{pmatrix} a & 0 \\ 0 & C' \end{pmatrix}
= \begin{pmatrix} a & 0 \\ 0 & L_1D_1L_1^\mathsf{T} \end{pmatrix}$$

这不是近似、不是假设，是**同一个矩阵的两种写法**。类比：把 $S$ 写成 $\begin{pmatrix} a & b^\mathsf{T} \\ b & C \end{pmatrix}$ 时你也没怀疑"为什么能写 $C$"——$C$ 本来就是那块的名字。现在不过是"这块的名字 $C'$ = 它的分解式"。

## 3. 第二件事：块对角矩阵相乘是"逐块独立"的（常见卡点）

代入之后真正的难点：怎么把 $\operatorname{diag}(a,\,L_1D_1L_1^\mathsf{T})$ 拆成三个矩阵相乘。

**关键规则**：形如 $\operatorname{diag}(X,Y)$（左上、右下两块，其余全 0）的矩阵，相乘时**逐块独立**：

$$\begin{pmatrix} X & 0 \\ 0 & Y \end{pmatrix}\begin{pmatrix} X' & 0 \\ 0 & Y' \end{pmatrix}
= \begin{pmatrix} XX' & 0 \\ 0 & YY' \end{pmatrix}$$

- 左上的块只跟左上的乘；
- 右下的块只跟右下的乘；
- 因为中间隔着零，两块之间**互不通信**。

于是直接验证：

$$\begin{pmatrix} 1 & 0 \\ 0 & L_1\end{pmatrix}\begin{pmatrix} a & 0 \\ 0 & D_1\end{pmatrix}
= \begin{pmatrix} 1\cdot a & 0 \\ 0 & L_1D_1\end{pmatrix}
= \begin{pmatrix} a & 0 \\ 0 & L_1D_1\end{pmatrix}$$

再乘上第三个：

$$\begin{pmatrix} a & 0 \\ 0 & L_1D_1\end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & L_1^\mathsf{T}\end{pmatrix}
= \begin{pmatrix} a\cdot 1 & 0 \\ 0 & L_1D_1L_1^\mathsf{T}\end{pmatrix}
= \begin{pmatrix} a & 0 \\ 0 & L_1D_1L_1^\mathsf{T}\end{pmatrix}$$

而 $L_1D_1L_1^\mathsf{T}=C'$，正好走回代入后的结果。✓

**注意左上角那格**：$a$ 从头到尾只跟 $1$ 相乘（$1\cdot a\cdot 1 = a$），完全没被右下角的分解打扰。这就是"块对角"的威力——两块隔零而居，互不干扰。

## 4. 一个直觉图景

把 $a$ 想象成"单独一个 1×1 的小房间"，把 $L_1, D_1$ 想象成"右下角一个自洽的小世界"。

- 两块之间隔着一道零墙，不能通信；
- 所以小世界**自己**分解成 $L_1D_1L_1^\mathsf{T}$；
- 左边 $a$ 一个人陪跑，自己乘自己；
- 最后把两间房拼起来，就是完整分解。

因为 $S$ 一开始就是 $\operatorname{diag}(a,\,C')$ 这个"对角块+残余块"的形态，而 $C'$ 满足与 $S$ 完全相同的归纳条件，所以可以无限剥壳。

## 5. 具体数值例子（$n=3$）

> 这一段对应 [[LDLT分解存在性证明]] 第 4 节归纳步，把 $C'$ 取成 $2\times2$ 时右边小世界 $L_1D_1L_1^\mathsf{T}$ 已分解好的情形。

设分解到的这一步是（$a=4$，右下 $2\times2$）：

$$S = \begin{pmatrix} 4 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 3 \end{pmatrix}$$

这里 $C' = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$ 是右下 $2\times2$ 块。对它做 $L_1D_1L_1^\mathsf{T}$（可直接验证）：

$$C' = \begin{pmatrix} 1 & 0 \\ \tfrac12 & 1 \end{pmatrix}\begin{pmatrix} 2 & 0 \\ 0 & \tfrac52 \end{pmatrix}\begin{pmatrix} 1 & \tfrac12 \\ 0 & 1 \end{pmatrix}$$

即 $L_1=\begin{pmatrix}1&0\\\tfrac12&1\end{pmatrix}$，$D_1=\begin{pmatrix}2&0\\0&\tfrac52\end{pmatrix}$。

代入 $S=\operatorname{diag}(a,\,C')=\operatorname{diag}(4,\,C')$，它就是 $\operatorname{diag}(4,\,L_1D_1L_1^\mathsf{T})$。而根据"逐块独立"规则：

$$\underbrace{\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & \tfrac12 & 1\end{pmatrix}}_{L''}
\underbrace{\begin{pmatrix} 4 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & \tfrac52\end{pmatrix}}_{D}
\underbrace{\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & \tfrac12 \\ 0 & 0 & 1\end{pmatrix}}_{L''^\mathsf{T}}
= \begin{pmatrix} 4 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 3 \end{pmatrix}$$

左上 $4$ 一路只乘 $1$ 保持 $4$；右下 $2\times2$ 自行复现 $C'$。两块各行其是，最后拼回 $S$。✓

## 6. 一句话总结

- **代入合法**：因为 $C'=L_1D_1L_1^\mathsf{T}$ 是矩阵等式，整块替换不改内容；
- **拆成三块合法**：因为块对角矩阵相乘逐块独立，左上 $a$ 只跟 $1$ 相乘，全程不被右下分解打扰。

> 配套主证明：[[LDLT分解存在性证明]]