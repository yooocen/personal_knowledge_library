---
tags:
  - 单元测试
  - mockito
---
# Mockito: doReturn vs thenReturn

tags:: source
## Metadata
- Author: sangsoonam.github.io
- Full Title: Mockito: doReturn vs thenReturn
- Category: #articles
- URL: http://sangsoonam.github.io/2019/02/04/mockito-doreturn-vs-thenreturn.html

## Highlights
- when-thenReturn and doReturn-when. In most cases, when-thenReturn is used and has better readability.
- A side effect doesn’t happen always but here are the usual cases:
  A method throws an exception with precondition checking.
  A method does what you don’t want while unit testing. For example, network or disk access.
