---
tags:
  - typescript
  - vue
  - webpack
---
# TypeScript和Vue · Webpack指南

tags:: source
## Metadata
- Author: webpack.toobug.net
- Full Title: TypeScript和Vue · Webpack指南
- Category: #articles
- URL: https://webpack.toobug.net/zh-cn/chapter6/ts-and-vue.html

## Highlights
- transpileOnly的含义是指让ts-loader只做转译。什么意思呢？就是不加这个选项的话，它会把转义的结果写入到文件中，而不是在内存中由webpack来处理，这会导致后续loader无法处理ts-loader的结果。所以加上transpileOnly让它按webpack的操作来，这样后续loader就可以继续处理。
  appendTsSuffixTo的含义是碰到.vue结尾的文件时，加上.ts的后缀，这样ts-loader就会去处理.vue文件中的ts代码。
