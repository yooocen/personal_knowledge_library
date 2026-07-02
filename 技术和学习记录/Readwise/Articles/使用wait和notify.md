# 使用wait和notify

tags:: source
## Metadata
- Author: liaoxuefeng.com
- Full Title: 使用wait和notify
- Category: #articles
- URL: https://www.liaoxuefeng.com/wiki/1252599548343744/1306580911915042

## Highlights
- wait和notify用于多线程协调运行：
  在synchronized内部可以调用wait()使线程进入等待状态；
  必须在已获得的锁对象上调用wait()方法；
  在synchronized内部可以调用notify()或notifyAll()唤醒其他等待线程；
  必须在已获得的锁对象上调用notify()或notifyAll()方法；
  已唤醒的线程还需要重新获得锁后才能继续执行。
