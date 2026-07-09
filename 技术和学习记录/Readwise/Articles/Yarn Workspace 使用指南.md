---
tags:
  - yarn
  - 前端
  - 包管理
---
# Yarn Workspace 使用指南

tags:: source
## Metadata
- Author: jianshu.com
- Full Title: Yarn Workspace 使用指南
- Category: #articles
- URL: https://www.jianshu.com/p/990afa30b6fe

## Highlights
- 如果 project1 和 project2 有相同的依赖项目 a，a 都会各自下载一次，这不仅耗时降低开发效率，还额外占用重复的磁盘空间；当 project 项目比较多的时候，此类问题就会显得十分严重。
  如果 project2 依赖 project1，而 project1 并没有发布到 npm 仓库，只是一个本地项目，有两种方式配置依赖：
  使用相对路径（如 file: 协议）在 project2 中指定 project1 的依赖。
  使用 yarn|npm link 来配置依赖。
  第 1 种方式缺少版本号的具体指定，每次发布版本时都需要相应的依赖版本的修改；第 2 种方式需要自行手工操作，配置复杂易出错。
  需要 npm-2.0.0+ 才支持模块间的相对路径依赖，详见 npm 官方文档 package.json/Local Paths
  没有一个统一的地方对全部项目进行统一构建等，需要到各个项目内执行 yarn|npm build 来构架项目。
