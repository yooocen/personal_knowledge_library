---
tags:
  - maven
  - 报错解决
  - intellij-idea
---
# Malformed \Uxxxx Encoding解决总结_奇点_97的博客-Csdn博客

tags:: source
## Metadata
- Author: blog.csdn.net
- Full Title: Malformed \Uxxxx Encoding解决总结_奇点_97的博客-Csdn博客
- Category: #articles
- URL: https://blog.csdn.net/qq_29235677/article/details/126342388

## Highlights
- 打开IDEA之后更新项目开始启动： 
  1、突然发现build failure报了一个奇怪的错误：Malformed \uxxxx encoding. 
  2、pom.xml文件中的<project>标签也标红报错。 
  但是 但是 但是pom中的代码和master上一模一样，其他人都没有问题，但是自己的不行，部分文件中的import类还会报错 找不到。 
  原因：更新项目依赖的jar包的时，可能由于网络问题导致下载的jar包不完整。 
  解决：删掉下载的jar包 重新下载即可。 
  实际上并不需要，泛泛的删除再重新下载肯定是很耗费时间的，所以我觉得肯定有方法能将出现问题的包找到。做到精准删除
- 1）在./m2/文件夹（根据自己情况修改）下，找到path-to-the-library，然后删掉（若无此文件，可直接忽略此步骤）； （2）在./m2/repository （根据自己情况修改）文件夹下全局搜索:resolver-status.properties 文件，将搜索到的所有此文件全部删除，然后重新编译即可。
