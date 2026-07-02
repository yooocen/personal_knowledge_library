# Java常用机制 - SPI机制详解

tags:: source
## Metadata
- Author: pdai.tech
- Full Title: Java常用机制 - SPI机制详解
- Category: #articles
- URL: https://pdai.tech/md/java/advanced/java-advanced-spi.html

## Highlights
- SPI（Service Provider Interface），是JDK内置的一种 服务提供发现机制，可以用来启用框架扩展和替换组件，主要是被框架的开发人员使用
## New highlights added September 5, 2022 at 11:19 PM
- resources
  接下来可以在resources下新建META-INF/services/目录，然后新建接口全限定名的文件：com.cainiao.ys.spi.learn.Search，里面加上我们需要用到的实现类
