# Maven：mirror和repository 区别 - Bollen - 博客园

tags:: source
## Metadata
- Author: cnblogs.com
- Full Title: Maven：mirror和repository 区别 - Bollen - 博客园
- Category: #articles
- URL: https://www.cnblogs.com/bollen/p/7143551.html

## Highlights
- 配置两个Repository之间的镜像关系，一般是出于访问速度和下载速度考虑。
  例如， 有一个项目，需要在公司和住所都编码，并在项目pom.xml配置了A 
  Maven库。在公司，是电信网络，访问A库很快，所以maven管理依赖和插件都从A库下载；在住所，是网通网络，访问A库很慢，但是访问B库很快。这时，在住所的setting.xml里，只要配置一下<mirrors><mirror>....</mirror></mirrors>，让B库成为A库的mirror，即可不用更改项目pom.xml里对于A库的相关配置。
  如果该镜像仓库需要认证，则配置setting.xml中的<server></server>即可。
