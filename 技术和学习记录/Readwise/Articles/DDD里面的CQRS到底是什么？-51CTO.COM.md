# DDD里面的CQRS到底是什么？-51CTO.COM

tags:: source
## Metadata
- Author: 51cto.com
- Full Title: DDD里面的CQRS到底是什么？-51CTO.COM
- Category: #articles
- URL: https://www.51cto.com/article/644144.html

## Highlights
- 随着业务不断发展，软件系统的架构也越来越复杂，但无论多复杂的业务最终在系统中实现的时候，无非是读写操作。用户根据业务规则写入商业数据，再根据查询规则获取想要的结果。通常而言我们会讲这些读写的数据放到一个数据库中保存，通过一套模型对其进行读写操作。而在大型系统中往往查询操作远远多于写入操作，于是就有了读写分离的思想，将读操作和写操作的模型分开定义并且提供不同的通道供用户使用。CQRS(Command-Query Responsibility Segregation) 就是基于这一思想提供的一种模式读写分离的模式
