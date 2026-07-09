---
tags:
  - ddd
  - 领域建模
---
# DDD - Enforce Invariants for Associations Inside the Aggregate

tags:: source
## Metadata
- Author: stackoverflow.com
- Full Title: DDD - Enforce Invariants for Associations Inside the Aggregate
- Category: #articles
- URL: https://stackoverflow.com/questions/55086752/ddd-enforce-invariants-for-associations-inside-the-aggregate

## Highlights
- Business rule bypass implementation
    - Note: 绕过规则的实现
- That is, if you design your model such that invalid states are not representable, then you get some assistance in catching errors in your domain logic.
  At a fundamental level, we're dealing with a state machine. The aggregate begins in some initial state A. We invoke some method on the root, and either we remain in the same state, or we transition to some new state B that also satisfies the entire invariant.
  It shouldn't feel like we are doing anything new here -- this is just good "object oriented programming". Any method we invoke on an object should satisfy its post conditions. The fact that we've chosen to carve up "the aggregate" into a composition of multiple objects really doesn't change that.
    - Note: 任何方法我们对一个对象调用都需要满足后续的条件
