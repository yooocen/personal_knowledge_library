# 简单理解 ObjectMapper 中 writeValue() 和 writeValueAsString() 的区别_于小猿的博客-CSDN博客_mapper.writevalueasstring

tags:: source
## Metadata
- Author: blog.csdn.net
- Full Title: 简单理解 ObjectMapper 中 writeValue() 和 writeValueAsString() 的区别_于小猿的博客-CSDN博客_mapper.writevalueasstring
- Category: #articles
- URL: https://blog.csdn.net/YyjYsj/article/details/109137452

## Highlights
- 将对象转为json字符串时可以使用ObjectMapper中的两个方法： 
  writeValue（参数，obj）：直接将传入的对象序列化为json，并且返回给客户端 writeValueAsString（obj）：将传入的对象序列化为json，返回给调用者
