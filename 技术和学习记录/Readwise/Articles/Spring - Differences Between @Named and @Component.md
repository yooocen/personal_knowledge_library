---
tags:
  - spring
  - 依赖注入
---
# Spring - Differences Between @Named and @Component

tags:: source
## Metadata
- Author: stackoverflow.com
- Full Title: Spring - Differences Between @Named and @Component
- Category: #articles
- URL: https://stackoverflow.com/questions/36203489/spring-differences-between-named-and-component

## Highlights
- Spring - differences between @Named and @Component
- So I got the answer directly from Juergen Hoeller. According to him, this line -
  JSR-330 does not provide a composable model, just a way to identify
  named components.
  means that the javax.inject.Named can only be declared directly on a given bean class. The composable annotation story just works with Spring's own annotations, which is exactly what I suspected.
