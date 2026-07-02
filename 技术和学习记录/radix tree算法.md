---
tags:
  - linux
  - 操作系统
  - idr
---
![[Pasted image 20260616211335.png]]![[Pasted image 20260616211338.png]]

公式：
idx >> (shift - 2) & 0b11

![[Pasted image 20260616211651.png|379]] ![[Pasted image 20260616211713.png|378]]

![[Pasted image 20260616211756.png|588]]


我的理解：
这个算法的本质和前缀树是有点像的，将74进行二进制展开是 01_00_10_10  94展开是01_10_00_10, 前三个2位是level（中间结点）, 最后一个是entry（叶子结点）
01是相同的，所以对应树节点中的 slot 1
00 10 不同，对应树节点 slot 0 slot 2
74是先插入的，所以插到shift 8树节点为null，再建一个节点shift 6插到null的位置就行
94是后插入的，shift8发现不为null，从shift6发现有null，再建一个节点shift4 插到null的位置

![[radix-tree-demo.html]]