---
tags:
  - spring
  - springboot
---
# 配置Spring Boot通过@ConditionalOnProperty来控制Configuration是否生效_大浪中航行的博客-CSDN博客_conditionalonproperty

tags:: source
## Metadata
- Author: blog.csdn.net
- Full Title: 配置Spring Boot通过@ConditionalOnProperty来控制Configuration是否生效_大浪中航行的博客-CSDN博客_conditionalonproperty
- Category: #articles
- URL: https://blog.csdn.net/dalangzhonghangxing/article/details/78420057

## Highlights
- 经过一番寻觅，发现了Spring boot中有个注解@ConditionalOnProperty，这个注解能够控制某个configuration是否生效。具体操作是通过其两个属性name以及havingValue来实现的，其中name用来从application.properties中读取某个属性值，如果该值为空，则返回false;如果值不为空，则将该值与havingValue指定的值进行比较，如果一样则返回true;否则返回false。如果返回值为false，则该configuration不生效；为true则生效
