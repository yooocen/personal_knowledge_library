---
view-count: 4
---
首先明白一点：开线程代价很高，为每个请求都开线程，无法做到高并发

[Java NIO全面详解(看这篇就够了) - mikechen的互联网架构 - 博客园](https://www.cnblogs.com/mikechenshare/p/16587635.html)

[Java NIO详解_huahua.Dr的博客-CSDN博客_java nio](https://blog.csdn.net/use_admin/article/details/102679985?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-102679985-blog-118896522.pc_relevant_multi_platform_featuressortv2dupreplace&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-102679985-blog-118896522.pc_relevant_multi_platform_featuressortv2dupreplace&utm_relevant_index=2)

# 阻塞与非阻塞
传统的 IO 流都是阻塞式的。也就是说，当一个线程调用 read() 或 write()
时，该线程被阻塞，直到有一些数据被读取或写入，该线程在此期间不
能执行其他任务。因此，在完成网络通信进行 IO 操作时，由于线程会
阻塞，所以服务器端必须为每个客户端都提供一个独立的线程进行处理，
当服务器端需要处理大量客户端时，性能急剧下降。

Java NIO 是非阻塞模式的。当线程从某通道进行读写数据时，若没有数
据可用时，该线程可以进行其他任务。线程通常将非阻塞 IO 的空闲时
间用于在其他通道上执行 IO 操作，所以单独的线程可以管理多个输入
和输出通道。因此，NIO 可以让服务器端使用一个或有限几个线程来同
时处理连接到服务器端的所有客户端。
