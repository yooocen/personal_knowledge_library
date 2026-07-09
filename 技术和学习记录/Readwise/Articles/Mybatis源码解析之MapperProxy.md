---
tags:
  - mybatis
  - 源码分析
---
# Mybatis源码解析之MapperProxy

tags:: source
## Metadata
- Author: jianshu.com
- Full Title: Mybatis源码解析之MapperProxy
- Category: #articles
- URL: https://www.jianshu.com/p/33ec00cecab6

## Highlights
- 我们知道Spring实例化一个类有两个时机，一个是在初始化的时候getBean实例化，第二个是对设置了lazy-init属性的在第一次向Spring索要Bean的时候getBean实例化，最终都是调用Spring中的getBean方法
