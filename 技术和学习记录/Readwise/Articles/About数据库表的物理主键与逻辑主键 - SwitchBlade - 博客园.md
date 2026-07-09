---
tags:
  - 数据库
---
# About数据库表的物理主键与逻辑主键 - SwitchBlade - 博客园

tags:: source
## Metadata
- Author: cnblogs.com
- Full Title: About数据库表的物理主键与逻辑主键 - SwitchBlade - 博客园
- Category: #articles
- URL: https://www.cnblogs.com/LIS2011/archive/2012/10/31/2748001.html

## Highlights
- *viewPoint01
  既然有业务主键，数据唯一性就能得到保证了。 那么你的逻辑主键的存在的意义或者是目的是什么呢？ 逻辑主键的存在的意义在于当业务主键是多个字段组合的和/或业务主键的数据类型不便于比较的时候，用业务主键作为聚集索引影响性能，这个时候加一个冗余的数字型的逻辑主键显得很必要，也会方便编程。 加逻辑主键应该主要是从性能考虑
