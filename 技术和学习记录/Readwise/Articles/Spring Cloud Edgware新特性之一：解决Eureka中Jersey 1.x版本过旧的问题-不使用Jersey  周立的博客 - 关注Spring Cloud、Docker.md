---
tags:
  - springcloud
  - eureka
---
# Spring Cloud Edgware新特性之一：解决Eureka中Jersey 1.x版本过旧的问题-不使用Jersey | 周立的博客 - 关注Spring Cloud、Docker

tags:: source
## Metadata
- Author: itmuch.com
- Full Title: Spring Cloud Edgware新特性之一：解决Eureka中Jersey 1.x版本过旧的问题-不使用Jersey | 周立的博客 - 关注Spring Cloud、Docker
- Category: #articles
- URL: https://www.itmuch.com/spring-cloud/edgware-new-eureka-jersey1/

## Highlights
- Spring Cloud Edgware新特性之一：解决Eureka中Jersey 1.x版本过旧的问题-不使用Jersey
- Spring Cloud Edgware 中，Jersey并非必选。可为Eureka Client禁用掉Jersey，转而使用我们想要的HTTP客户端，例如RestTemplate。只需将Jersey的包从依赖中删除，Spring Cloud就会自动配置一个基于Spring RestTemplate 的传输客户端。
