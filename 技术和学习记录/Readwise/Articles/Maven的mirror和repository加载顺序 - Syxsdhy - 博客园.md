---
tags:
  - maven
  - 镜像仓库
---
# Maven的mirror和repository加载顺序 - Syxsdhy - 博客园

tags:: source
## Metadata
- Author: cnblogs.com
- Full Title: Maven的mirror和repository加载顺序 - Syxsdhy - 博客园
- Category: #articles
- URL: https://www.cnblogs.com/ctxsdhy/p/8482725.html

## Highlights
- maven的settings.xml文件里面有proxy、server、repository、mirror的配置，在配置仓库地址的时候容易混淆
  proxy是服务器不能直接访问外网时需要设置的代理服务，不常用
  server是服务器要打包上传到私服时，设置私服的鉴权信息
  repository是服务器下载jar包的仓库地址
  mirror是用于替代仓库地址的镜像地址
  下面查看源码来确定repository和mirror的优先顺序
