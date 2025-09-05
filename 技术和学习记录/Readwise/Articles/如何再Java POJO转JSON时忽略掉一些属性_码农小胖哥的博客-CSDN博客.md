# 如何再Java POJO转JSON时忽略掉一些属性_码农小胖哥的博客-CSDN博客

tags:: source
## Metadata
- Author: blog.csdn.net
- Full Title: 如何再Java POJO转JSON时忽略掉一些属性_码农小胖哥的博客-CSDN博客
- Category: #articles
- URL: https://blog.csdn.net/qq_35067322/article/details/113488401

## Highlights
- 使用@JsonIgnoreProperties 注解
  这个注解比@JsonIgnore更加强大一些，通常该注解标记到POJO之上，它有更多的能力：
  忽略多个字段，配置value属性即可。忽略未知的属性，配置ignoreUnknown为true，默认不忽略。允许忽略字段被序列化，配置allowGetters为true，序列化的时候不会被忽略。允许忽略字段被反序列化，配置allowSetters为true，反序列化的时候不会被忽略。
  例如我们要忽略UserInfo中的secret和address，我们可以这样配置：
  @JsonIgnoreProperties({"secret", "address"})
