# Servlet与多线程的关系是什么？ - 知乎

tags:: source
## Metadata
- Author: zhihu.com
- Full Title: Servlet与多线程的关系是什么？ - 知乎
- Category: #articles
- URL: https://www.zhihu.com/question/23219109/answer/617396435

## Highlights
- JVM的运行内存可以分为程序计数器（Program Counter Register），虚拟机栈(Java Virtual Machine Stacks) ， 本地方法栈，方法区，和堆，程序技术器，虚拟机栈和本地方法栈都是线程私有的，生命周期和线程的生命周期相同；其中new出的对象都在堆中，当多个线程共享一个对象的时候，如果是方法内局部变量，这些都会在虚拟机栈中创建和销毁，而用到全局变量的话则是线程共享的，因此说Servlet不是线程安全的。
