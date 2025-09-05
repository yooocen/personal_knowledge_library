Aggregate这一章讲了聚合的使用原则
- 使用小聚合
- 通过id来引用其他聚合
- 优先采取最终一致性而不是事务一致性
然后讲什么时候可以打破这些规则

![[Pasted image 20221009234419.png]]

[What is Dependency Resolution - Startup House | Startup House](https://startup-house.com/glossary/what-is-dependency-resolution)
![[resolution]]

把领域服务传给聚合的函数
无论聚合怎么访问其他聚合，在一个请求中引用多个聚合并不能获得许可导致其他聚合的修改

theta joins
CQRS

不变性相当于一个方程式
backlogitem的状态 和 所有task的剩余时间有关系

有个核心问题，所谓的聚合拆分，究竟是怎么拆分，处理放成两个文件夹，代码上应该有什么改变

核心问题：把ID建模成值对象，这个在代码上是怎么去写

大聚合和小聚合之间的差异，大聚合拆成小聚合后，其实不会再从生命周期上去管理分拆出去的小聚合，小聚合之间是通过领域事件来互相通知。这样就可以解决所谓的并发问题