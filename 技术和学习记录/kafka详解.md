# 端口

9092 kafka明文端口
9094 kafka ssl/安全端口(SASL)


# 那如何做到同一条消息，可以被不同的消费者消费到？
靠 **不同的 Consumer Group**。

Kafka 里不是“消息被某个消费者读了就没了”，而是：

> 每个 Consumer Group 都有自己独立的消费进度 offset。

所以同一条消息可以被多个不同的 group 各自消费一次。

比如 topic：

```text
orders
  offset 0 -> order-created
  offset 1 -> order-paid
```

你有三个业务系统都想消费订单消息：

```text
库存服务 inventory-service
通知服务 notification-service
数据分析 analytics-service
```

它们应该使用不同的 `group.id`：

```text
group.id = inventory-service
group.id = notification-service
group.id = analytics-service
```

于是同一条消息会被三组消费者都读到：

```text
orders topic
  offset 0 -> order-created

inventory-service group      读到 offset 0
notification-service group   读到 offset 0
analytics-service group      读到 offset 0
```

---

如果多个消费者属于 **同一个 Consumer Group**，它们是“分工消费”：

```text
group.id = order-service

consumer-1 -> partition-0
consumer-2 -> partition-1
consumer-3 -> partition-2
```

同一个 group 里，同一个 partition 的同一条消息通常只会被其中一个 consumer 处理。

这适合扩容同一个服务。

---

如果多个消费者属于 **不同 Consumer Group**，它们是“广播消费”：

```text
group.id = inventory-service
group.id = notification-service
group.id = analytics-service
```

每个 group 都能独立消费同一份消息。

这适合多个业务系统订阅同一事件。
