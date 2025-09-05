# Spring源码解析 – @Configuration配置类及注解Bean的解析 - 互联网荒漠 - 博客园

tags:: source
## Metadata
- Author: cnblogs.com
- Full Title: Spring源码解析 – @Configuration配置类及注解Bean的解析 - 互联网荒漠 - 博客园
- Category: #articles
- URL: https://www.cnblogs.com/ashleyboy/p/9667485.html

## Highlights
- 其中 ConfigurationClassPostProcessor这个后置处理器专门处理带有@Configuration注解的类，ConfigurationClassPostProcessor后置处理实现了BeanDefinitionRegistryPostProcessor接口和PriorityOrdered接口，所以会在容器初始化refresh()方法中执行后置处理器时优先执行，主要负责解析所有@Configuration标签类，并将Bean定义注册到容器中。
