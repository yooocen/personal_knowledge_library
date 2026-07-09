---
tags:
  - tomcat
  - 类加载
---
# Tomcat - 启动过程:类加载机制详解

tags:: source
## Metadata
- Author: pdai.tech
- Full Title: Tomcat - 启动过程:类加载机制详解
- Category: #articles
- URL: https://pdai.tech/md/framework/tomcat/tomcat-x-classloader.html

## Highlights
- 假如我们自己编写一个类java.util.Object，它的实现可能有一定的危险性或者隐藏的bug。而我们知道Java自带的核心类里面也有java.util.Object，如果JVM启动的时候先行加载的是我们自己编写的java.util.Object，那么就有可能出现安全问题！
