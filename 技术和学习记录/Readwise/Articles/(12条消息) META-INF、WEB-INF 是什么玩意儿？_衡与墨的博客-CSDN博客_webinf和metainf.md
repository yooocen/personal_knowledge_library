---
tags:
  - java
  - web
---
# (12条消息) META-INF、WEB-INF 是什么玩意儿？_衡与墨的博客-CSDN博客_webinf和metainf

tags:: source
## Metadata
- Author: blog.csdn.net
- Full Title: (12条消息) META-INF、WEB-INF 是什么玩意儿？_衡与墨的博客-CSDN博客_webinf和metainf
- Category: #articles
- URL: https://blog.csdn.net/le_17_4_6/article/details/108547604

## Highlights
- META-INF 存放的是 jar 包的标签信息，jar 都会有这个文件夹，war 也会有。
- 如果想在页面中直接访问其中的文件，必须通过web.xml文件对要访问的文件进行相应映射才能访问。这样如果我们的页面中出现超链接<a>标签或者<script></script>脚本下的location.href去直接转向到WEB-INF下的某一个jsp或者html页面，那么就会引用不到，因为这样的请求方式是客户端的请求。css/js/html没有必要放在WEB-INF下。 最终这些会被原封不动的展现在客户端，所以访问安全根本就不会成为问题。
- 远古时代的模式会把业务逻辑，数据库连接等敏感信息写在jsp里面，被用户直接访问会有安全问题。 现代模式里这个不再成为问题，不应该成为问题。
- jsp是在服务器端运行的，而且通常都需要其他程序支持——比如后台处理好数据再让jsp渲染等，用户直接访问一则没有意义，二则会抛异常，这些都浪费服务器资源。
- 对于安全要求很严格的系统来说，不允许随便访问你的jsp文件，你可以放到web-inf下面，对于安全性要求没有那么严格的系统来说，你可以直接放到webroot下面。
# (12条消息) META-INF、WEB-INF 是什么玩意儿？_衡与墨的博客-CSDN博客_webinf和metainf

tags:: source
## Metadata
- Author: blog.csdn.net
- Full Title: (12条消息) META-INF、WEB-INF 是什么玩意儿？_衡与墨的博客-CSDN博客_webinf和metainf
- Category: #articles
- URL: https://blog.csdn.net/le_17_4_6/article/details/108547604

## Highlights
- META-INF 存放的是 jar 包的标签信息，jar 都会有这个文件夹，war 也会有。
- 如果想在页面中直接访问其中的文件，必须通过web.xml文件对要访问的文件进行相应映射才能访问。这样如果我们的页面中出现超链接<a>标签或者<script></script>脚本下的location.href去直接转向到WEB-INF下的某一个jsp或者html页面，那么就会引用不到，因为这样的请求方式是客户端的请求。css/js/html没有必要放在WEB-INF下。 最终这些会被原封不动的展现在客户端，所以访问安全根本就不会成为问题。
- 远古时代的模式会把业务逻辑，数据库连接等敏感信息写在jsp里面，被用户直接访问会有安全问题。 现代模式里这个不再成为问题，不应该成为问题。
- jsp是在服务器端运行的，而且通常都需要其他程序支持——比如后台处理好数据再让jsp渲染等，用户直接访问一则没有意义，二则会抛异常，这些都浪费服务器资源。
- 对于安全要求很严格的系统来说，不允许随便访问你的jsp文件，你可以放到web-inf下面，对于安全性要求没有那么严格的系统来说，你可以直接放到webroot下面。
