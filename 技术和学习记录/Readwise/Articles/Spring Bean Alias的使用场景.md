---
tags:
  - spring
---
# Spring Bean Alias的使用场景

tags:: source
## Metadata
- Author: jianshu.com
- Full Title: Spring Bean Alias的使用场景
- Category: #articles
- URL: https://www.jianshu.com/p/27f0833bd30e

## Highlights
- For example, the configuration metadata for subsystem A may refer to a DataSource via the name 'subsystemA-dataSource. The configuration metadata for subsystem B may refer to a DataSource via the name 'subsystemB-dataSource'. When composing the main application that uses both these subsystems the main application refers to the DataSource via the name 'myApp-dataSource'. To have all three names refer to the same object you add to the MyApp configuration metadata the following aliases definitions:
