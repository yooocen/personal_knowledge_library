---
tags:
  - 接口设计
  - 幂等性
---
# 接口的幂等性_Ruo_Xiao的博客-Csdn博客_接口幂等性

tags:: source
## Metadata
- Author: blog.csdn.net
- Full Title: 接口的幂等性_Ruo_Xiao的博客-Csdn博客_接口幂等性
- Category: #articles
- URL: https://blog.csdn.net/itworld123/article/details/117071929

## Highlights
- 接口幂等性就是用户对于同一操作发起的一次请求或者多次请求的结果是一致的，不会因为多次点击而产生了副作用。举个最简单的例子，那就是支付，用户购买商品后支付，支付扣款成功，但是返回结果的时候网络异常，此时钱已经扣了，用户再次点击按钮，此时会进行第二次扣款，返回结果成功，用户查询余额返发现多扣钱了，流水记录也变成了两条．．．这就没有保证接口的幂等性。
