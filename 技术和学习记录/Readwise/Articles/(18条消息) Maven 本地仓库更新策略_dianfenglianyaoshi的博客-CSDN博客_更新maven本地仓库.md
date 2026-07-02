# (18条消息) Maven 本地仓库更新策略_dianfenglianyaoshi的博客-CSDN博客_更新maven本地仓库

tags:: source
## Metadata
- Author: blog.csdn.net
- Full Title: (18条消息) Maven 本地仓库更新策略_dianfenglianyaoshi的博客-CSDN博客_更新maven本地仓库
- Category: #articles
- URL: https://blog.csdn.net/dianfenglianyaoshi/article/details/119077750

## Highlights
- 元文件有三个：maven-metadata-local.xml，maven-metadata-snapshot-nexus.xml，resolver-status.properties
- 从远程仓库拉取jar包的时候，也会生成该文件，并且每次拉取都会更新。该文件主要作用是记录maven-metadata--nexus.xml 文件的上次更新时间戳，并结合标签完成更新策略的一部分
