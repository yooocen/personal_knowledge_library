---
tags:
  - jdbc
  - 数据库
  - java
---
# JDBC 简介_w3cschool

tags:: source
## Metadata
- Author: w3cschool.cn
- Full Title: JDBC 简介_w3cschool
- Category: #articles
- URL: https://www.w3cschool.cn/jdbc/84pl1my8.html

## Highlights
- JDBC 的 API 支持两层和三层处理模式进行数据库访问，但一般的 JDBC 架构由两层处理模式组成：JDBC API: 提供了应用程序对 JDBC 管理器的连接。JDBC Driver API: 提供了 JDBC 管理器对驱动程序连接。JDBC API 使用驱动程序管理器和数据库特定的驱动程序来提供异构（heterogeneous）数据库的透明连接。JDBC 驱动程序管理器可确保正确的驱动程序来访问每个数据源。该驱动程序管理器能够支持连接到多个异构数据库的多个并发的驱动程序。以下是结构图，其中显示了驱动程序管理器相对于在 JDBC 驱动程序和 Java 应用程序所处的位置。
