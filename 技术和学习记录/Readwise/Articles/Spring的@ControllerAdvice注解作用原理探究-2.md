# Spring的@ControllerAdvice注解作用原理探究

tags:: source
## Metadata
- Author: zhuanlan.zhihu.com
- Full Title: Spring的@ControllerAdvice注解作用原理探究
- Category: #articles
- URL: https://zhuanlan.zhihu.com/p/73087879

## Highlights
- 我们重点关注initHandlerAdapters(context)和initHandlerExceptionResolvers(context)这两个方法。
- 当Controller抛出异常时，DispatcherServlet通过ExceptionHandlerExceptionResolver来解析异常，而ExceptionHandlerExceptionResolver又通过ExceptionHandlerMethodResolver 来解析异常， ExceptionHandlerMethodResolver 最终解析异常找到适用的@ExceptionHandler标注的方法是这里
