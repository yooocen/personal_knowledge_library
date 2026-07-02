# RocketMQ入门教程 - Ryelqy - 博客园

tags:: source
## Metadata
- Author: cnblogs.com
- Full Title: RocketMQ入门教程 - Ryelqy - 博客园
- Category: #articles
- URL: https://www.cnblogs.com/ryelqy/p/14317528.html

## Highlights
- Producer 与 NameServer 集群中的其中一个节点（随机选择）建立长连接，定期从 NameServer 获取 Topic 路由信息，并向提供 Topic 服务的 Broker Master 建立长连接，且定时向 Broker 发送心跳。Producer 只能将消息发送到 Broker master，但是 Consumer 则不一样，它同时和提供 Topic 服务的 Master 和 Slave建立长连接，既可以从 Broker Master 订阅消息，也可以从 Broker Slave 订阅消息。
