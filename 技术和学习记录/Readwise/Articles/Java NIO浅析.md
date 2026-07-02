# Java NIO浅析

tags:: source
## Metadata
- Author: tech.meituan.com
- Full Title: Java NIO浅析
- Category: #articles
- URL: https://tech.meituan.com/2016/11/04/nio.html

## Highlights
- 这是一个经典的每连接每线程的模型，之所以使用多线程，主要原因在于socket.accept()、socket.read()、socket.write()三个主要函数都是同步阻塞的，当一个连接在处理I/O的时候，系统是阻塞的，如果是单线程的话必然就挂死在那里；但CPU是被释放出来的，开启多线程，就可以让CPU去处理更多的事情。其实这也是所有使用多线程的本质：
  1. 利用多核。
  2. 当I/O阻塞系统，但CPU空闲的时候，可以利用多线程使用CPU资源。
