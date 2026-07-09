---
tags:
  - java
  - spring
  - 泛型
---
# 你真的了解Java泛型参数？spring ResolvableType更好的处理泛型_汪小哥的博客-CSDN博客

tags:: source
## Metadata
- Author: blog.csdn.net
- Full Title: 你真的了解Java泛型参数？spring ResolvableType更好的处理泛型_汪小哥的博客-CSDN博客
- Category: #articles
- URL: https://blog.csdn.net/u012881904/article/details/80813294

## Highlights
- Type体系中类型的包括：原始类型(Class)、参数化类型(ParameterizedType)、数组类型(GenericArrayType)、类型变量(TypeVariable)、基本类型(Class);
- 泛型的类型变量，指的是List< T>、Map< K,V>中的T，K，V等值，实际的Java类型是TypeVariableImpl（TypeVariable的子类；此外，还可以对类型变量加上extend限定，这样会有类型变量对应的上限；值得注意的是，类型变量的上限可以为多个，必须使用&符号相连接，例如 List< T extends Number & Serializable>；其中，& 后必须为接口；
