---
tags:
  - java
  - 异常处理
---
# 怎么解决java.lang.NoClassDefFoundError错误_AlwaysOnMyWay的博客-CSDN博客_noclassdeffounderror

tags:: source
## Metadata
- Author: blog.csdn.net
- Full Title: 怎么解决java.lang.NoClassDefFoundError错误_AlwaysOnMyWay的博客-CSDN博客_noclassdeffounderror
- Category: #articles
- URL: https://blog.csdn.net/jamesjxin/article/details/46606307

## Highlights
- NoClassDefFoundError错误的发生，是因为Java虚拟机在编译时能找到合适的类，而在运行时不能找到合适的类导致的错误。例如在运行时我们想调用某个类的方法或者访问这个类的静态成员的时候，发现这个类不可用，此时Java虚拟机就会抛出NoClassDefFoundError错误。与ClassNotFoundException的不同在于，这个错误发生只在运行时需要加载对应的类不成功，而不是编译时发生。很多Java开发者很容易在这里把这两个错误搞混。
- 我们经常被java.lang.ClassNotFoundException和java.lang.NoClassDefFoundError这两个错误迷惑不清，尽管他们都与Java classpath有关，但是他们完全不同。NoClassDefFoundError发生在JVM在动态运行时，根据你提供的类名，在classpath中找到对应的类进行加载，但当它找不到这个类时，就发生了java.lang.NoClassDefFoundError的错误，而ClassNotFoundException是在编译的时候在classpath中找不到对应的类而发生的错误。ClassNotFoundException比NoClassDefFoundError容易解决，是因为在编译时我们就知道错误发生，并且完全是由于环境的问题导致。而如果你在J2EE的环境下工作，并且得到NoClassDefFoundError的异常，而且对应的错误的类是确实存在的，这说明这个类对于类加载器来说，可能是不可见的。
- 如果你工作在J2EE的环境，有多个不同的类加载器，也可能导致NoClassDefFoundError
