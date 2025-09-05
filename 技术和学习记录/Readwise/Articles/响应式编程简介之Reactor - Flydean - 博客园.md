# 响应式编程简介之:Reactor - Flydean - 博客园

tags:: source
## Metadata
- Author: cnblogs.com
- Full Title: 响应式编程简介之:Reactor - Flydean - 博客园
- Category: #articles
- URL: https://www.cnblogs.com/flydean/p/13935084.html

## Highlights
- Reactor是基于JVM的非阻塞API，他直接跟JDK8中的API相结合，比如：CompletableFuture，Stream和Duration等。
  它提供了两个非常有用的异步序列API：Flux和Mono，并且实现了Reactive Streams的标准。
  并且还可以和reactor-netty相结合，作为一些异步框架的底层服务，比如我们非常熟悉的Spring MVC 5中引入的WebFlux。
- 在现代应用程序中，随着用户量的增多，程序员需要考虑怎么才能提升系统的处理能力。
  传统的block IO的方式，因为需要占用大量的资源，所以是不适合这样的场景的。我们需要的是NO-block IO。
  JDK中提供了两种异步编程的模型：
  第一种是Callbacks，异步方法可以通过传入一个Callback参数的形式来在Callback中执行异步任务。比较典型的像是java Swing中的EventListener。
  第二中就是使用Future了。我们使用Callable来提交一个任务，然后通过Future来拿到它的运行结果。
  这两种异步编程会有什么问题呢？
  callback的问题就在于回调地狱。熟悉JS的朋友应该很理解这个回调地狱的概念。
  简单点讲，回调地狱就是在callback中又使用了callback，从而造成了这种callback的层级调用关系。
  而Future主要是对一个异步执行的结果进行获取，它的 get()实际上是一个block操作。并且不支持异常处理，也不支持延迟计算。
  当有多个Future的组合应该怎么处理呢？JDK8 实际上引入了一个CompletableFuture类，这个类是Future也是一个CompletionStage，CompletableFuture支持then的级联操作。不过CompletableFuture提供的方法不是那么的丰富，可能满足不了我的需求。
  于是我们的Reactor来了。
