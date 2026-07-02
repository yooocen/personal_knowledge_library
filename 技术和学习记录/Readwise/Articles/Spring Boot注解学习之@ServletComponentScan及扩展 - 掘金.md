# Spring Boot注解学习之@ServletComponentScan及扩展 - 掘金

tags:: source
## Metadata
- Author: juejin.cn
- Full Title: Spring Boot注解学习之@ServletComponentScan及扩展 - 掘金
- Category: #articles
- URL: https://juejin.cn/post/6844904019391938574

## Highlights
- ServletComponentScanRegistrar 内部会解析 @ServletComponentScan 注解，然后会在 Spring 容器中注册 ServletComponentRegisteringPostProcessor，是个 BeanFactoryPostProcessor，会去解析扫描出来的类是不是有 @WebServlet、@WebListener、@WebFilter 这三种注解，有的话会把这三种类型的类转换成 ServletRegistrationBean、FilterRegistrationBean 或者ServletListenerRegistrationBean，然后让 Spring 容器去解析。
