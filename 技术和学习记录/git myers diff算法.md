
● 根因和修复总结：

  根因：addedLines() 用 multiset（内容计数）计算新增行。当 AI
  重写代码块时，即使某些行（如 if (added.length > 0) {）被 AI
  写在新位置，multiset 认为"内容已存在不算新增"，但 git
  diff（位置感知算法）正确地将它们算作新增行。导致 pending lines 比实际
  commit diff 少。

  修复：用 Myers diff 算法（git 使用的同族算法）替换 multiset。Myers diff
  按位置追踪行的增删改，和 git diff 结果一致。