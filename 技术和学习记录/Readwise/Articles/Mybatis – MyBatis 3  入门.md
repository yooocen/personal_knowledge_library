---
tags:
  - mybatis
---
# Mybatis – MyBatis 3 | 入门

tags:: source
## Metadata
- Author: mybatis.org
- Full Title: Mybatis – MyBatis 3 | 入门
- Category: #articles
- URL: https://mybatis.org/mybatis-3/zh/getting-started.html

## Highlights
- 每个线程都应该有它自己的 SqlSession 实例。SqlSession
  的实例不是线程安全的，因此是不能被共享的，所以它的最佳的作用域是请求或方法作用域
- 方法作用域才是映射器实例的最合适的作用域
