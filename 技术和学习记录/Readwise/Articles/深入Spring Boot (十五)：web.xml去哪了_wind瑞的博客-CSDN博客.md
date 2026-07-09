---
tags:
  - springboot
  - web
---
# 深入Spring Boot (十五)：web.xml去哪了_wind瑞的博客-CSDN博客

tags:: source
## Metadata
- Author: blog.csdn.net
- Full Title: 深入Spring Boot (十五)：web.xml去哪了_wind瑞的博客-CSDN博客
- Category: #articles
- URL: https://blog.csdn.net/windrui/article/details/112057763

## Highlights
- Spring框架从3.1版本开始支持Servlet3.0，可以在基于Java的配置中声明Servlet、Filter和Listener，并且从3.2版本开始可以使用AbstractAnnotationConfigDispatcherServletInitializer的子类来配置DispatcherServlet，它会创建DispatcherServlet和ContextLoaderListener，真正实现不再需要使用web.xml，例如如下代码自定义了一个DispatcherServletInitializer，它继承了AbstractAnnotationConfigDispatcherServletInitializer。
