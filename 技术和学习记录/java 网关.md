
[[微服务架构]]

[97](https://www.bilibili.com/video/BV1Lb4y1r7Jk?p=97)

[[Wiki 网关开发指南]]
[[为什么微服务一定要有网关？]]
统一管理调用入口

zuul属于业务的网关，聚合服务，分发服务

[98](https://www.bilibili.com/video/BV1Lb4y1r7Jk?p=98)

[99](https://www.bilibili.com/video/BV1Lb4y1r7Jk?p=99)
- 身份认证
- 审查监控
- 动态路由
- 压力测试
- 负载分配
- 静态响应处理
- 多区域弹性
[100](https://www.bilibili.com/video/BV1Lb4y1r7Jk?p=100)
Nginx 企业级的防火墙 
Zuul 业务级的防火墙
- 聚合接口使得服务对调用者透明，客户端与后端的耦合度降低
- 聚合后台服务，节省流量，提高性能，提升用户体验
- 提供安全、流控、过滤、缓存、计费、监控等API管理功能 
网关的核心 ==路由+过滤==
