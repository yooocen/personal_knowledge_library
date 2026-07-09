---
tags:
  - 并发
  - java
  - AQS
---
# 一文了解AQS(AbstractQueuedSynchronizer) - 掘金

tags:: source
## Metadata
- Author: juejin.cn
- Full Title: 一文了解AQS(AbstractQueuedSynchronizer) - 掘金
- Category: #articles
- URL: https://juejin.cn/post/6948030364321333262

## Highlights
- AQS(AbstractQueuedSynchronizer)也叫“抽象队列同步器”，它提供了“把锁分配给谁"这一问题的一种解决方案，使得锁的开发人员可以将精力放在“如何加解锁上”，避免陷于把锁进行分配而带来的种种细节陷阱之中。
- 例如JUC中，如CountDownLatch、Semaphore、ReentrantLock、ReentrantReadWriteLock等并发工具，均是借助AQS完成他们的所需要的锁分配问题。
