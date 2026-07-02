# Spring Data JPA中常用的注解详解

tags:: source
## Metadata
- Author: zhuanlan.zhihu.com
- Full Title: Spring Data JPA中常用的注解详解
- Category: #articles
- URL: https://zhuanlan.zhihu.com/p/78021832

## Highlights
- 我们在Address里加上了@Embeddable这个注解表示，Address这个类是一个可以被嵌套的类，而在Author类中，我们声明了一个Address类型的变量address，然后给它加上@Embedded注解，意思是我们要在Author类嵌套Address类，
