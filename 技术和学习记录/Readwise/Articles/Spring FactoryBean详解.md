---
tags:
  - spring
  - java
---
# Spring FactoryBean详解

tags:: source
## Metadata
- Author: jianshu.com
- Full Title: Spring FactoryBean详解
- Category: #articles
- URL: https://www.jianshu.com/p/271cefdd708c

## Highlights
- Spring 容器中有两种bean：普通bean和工厂bean。Spring直接使用前者，FactoryBean跟普通Bean不同，其返回的对象不是指定类的一个实例，而是该FactoryBean的getObject方法所返回的对象。
- FactoryBean 通常是用来创建比较复杂的bean，一般的bean 直接用xml配置和基于Java配置即可，但如果一个bean的创建过程中涉及到很多其他的bean 和复杂的逻辑，用xml配置比较困难，这时可以考虑用FactoryBean
