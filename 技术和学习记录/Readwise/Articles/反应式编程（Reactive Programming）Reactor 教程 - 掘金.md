---
tags:
  - 响应式编程
  - reactor
  - java
---
# 反应式编程（Reactive Programming）Reactor 教程 - 掘金

tags:: source
## Metadata
- Author: juejin.cn
- Full Title: 反应式编程（Reactive Programming）Reactor 教程 - 掘金
- Category: #articles
- URL: https://juejin.cn/post/7011463863602249741

## Highlights
- 但是如何在 JVM 上生成异步代码呢？Java 提供了两种异步编程模型：
  Callbacks：异步方法没有返回值，但是需要一个额外的回调参数（lambda或者匿名函数），当结果可用时调用这个参数。一个著名的例子是Swing’s的EventListener层次结构。
  Futures：异步方法立即返回一个Future。异步进程计算T值，通过Future对象包装对T值的访问。该值不是立即可用的，可以轮询该对象，直到该值可用为止。例如，ExecutorService使用Future对象，运行**Callable**任务。
- Reactor的核心是Flux /Mono类型，它代表了数据或事件的流。它的目的是实现推送（反应式），但是也可以用于拉取（交互式）。它是延迟执行的（lazy），不是立即执行的（eager）。它可以同步使用，也可以异步使用。它能够代表随着时间推移产生的0个、1个、多个或者无穷个值或事件。
