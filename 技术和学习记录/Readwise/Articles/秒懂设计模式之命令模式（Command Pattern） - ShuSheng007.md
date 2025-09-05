# 秒懂设计模式之命令模式（Command Pattern） - ShuSheng007

tags:: source
## Metadata
- Author: shusheng007.top
- Full Title: 秒懂设计模式之命令模式（Command Pattern） - ShuSheng007
- Category: #articles
- URL: http://shusheng007.top/2021/09/08/027/

## Highlights
- Command 接口非常简单，通常只有一个execute方法，如果要支持撤销操作的话，再加一个unexecute方法
  每个具体的命令类内部封装了实际执行命令的那个类（Recevier），或者那些类，以及执行需要的数据
  每个具体命令类只完成一个请求，有多少个请求就有多少个命令
  Invoker类只认识接口Command，其他的都不认识
  客户端类负责生成命令，并通过Invoker组装执行。
