# Slf4j中的桥接器是如何运作的？-阿里云开发者社区

tags:: source
## Metadata
- Author: developer.aliyun.com
- Full Title: Slf4j中的桥接器是如何运作的？-阿里云开发者社区
- Category: #articles
- URL: https://developer.aliyun.com/article/844332

## Highlights
- 在日志框架slf4j中有一组项目，除了核心的slf4j-api之外，还有slf4j-log4j12、slf4j-jdk14等项目。这一类项目统称桥接器项目，针对不同的日志框架有不同的桥接器项目
- 要了解桥接器的运作，首先需要回顾一下slf4j的SPI机制。在我们通过LoggerFactory.getLogger(Foo.class);时，slf4j会通过SPI机制寻找并初始化SLF4JServiceProvider的实现类。
- 我们知道，在new对象执行会先执行static代码块，本类的静态代码块的核心工作就是检查依赖文件中是否同时存在反向桥接器的依赖。
