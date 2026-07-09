---
tags:
  - spring
  - 配置
---
# 用户对问题“application.properties与applicationContext.xml”的回答 - 问答 - 腾讯云开发者社区-腾讯云

tags:: source
## Metadata
- Author: cloud.tencent.com
- Full Title: 用户对问题“application.properties与applicationContext.xml”的回答 - 问答 - 腾讯云开发者社区-腾讯云
- Category: #articles
- URL: https://cloud.tencent.com/developer/ask/sof/1307484/answer/1805406

## Highlights
- applicationContext.xml包含bean定义和关系，application.properties只是用于一般的系统配置。通常您会使用基于Annotation / Java的配置，但是如果您碰巧有一些想要使用的遗留beans配置，那么您通常会将其放在下面：
