# 搭建 Karma+Mocha+Chai 测试 TypeScript 项目
tags:: source
## Metadata
- Author: blog.crimx.com
- Full Title: Crimx Blog
- Category: #articles
- URL: https://blog.crimx.com/2019/06/19/%E6%90%AD%E5%BB%BA-karma-mocha-chai-%E6%B5%8B%E8%AF%95-typescript-%E9%A1%B9%E7%9B%AE/

## Highlights
- Jest 是一个非常简单易用的测试框架，它内置了测试中各种常用功能，API 简洁清晰，只需少量配置即可快速编写测试。但同时 Jest 内部造了很多轮子，比如模块路径解析就曾踩到坑；其使用 JSDOM 模拟浏览器环境来支持并行测试，大大加快了速度，但也带来了 JSDOM 的局限性与坑；最大的问题是不能方便地在真实浏览器中测试，这个缺陷多年一直没有得到官方重视，未来支持的可能性很小。
  所以，如果只需要简单地测试框架组件以及一些纯逻辑的功能，使用 Jest 无疑是最方便的；但如果涉及到 DOM 相关的一些测试，就不必费时间在 Jest 上折腾 puppeteer 了，直接上 Karma 全家桶反而更容易。
