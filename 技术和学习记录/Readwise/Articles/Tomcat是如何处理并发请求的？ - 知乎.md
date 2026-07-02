# Tomcat是如何处理并发请求的？ - 知乎

tags:: source
## Metadata
- Author: zhihu.com
- Full Title: Tomcat是如何处理并发请求的？ - 知乎
- Category: #articles
- URL: https://www.zhihu.com/question/20194686/answer/2292928758

## Highlights
- Tomcat是如何处理并发请求的？
- 其中在连接器的启动过程中，会弄出一个叫做endpoint的东西去和底层的网络IO打交道，会调用其bind()方法
