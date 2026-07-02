---
createDate: 2022-07-16
---


#前端 


#flashcards


karma vs turbo-ui-test
?
- turbo-ui-test先使用`yarn build`打出zip包，然后起一个http服务器，然后用wdio的api来做功能测试，可以支持验证页面是否达到预期，可以有代码覆盖率报告
- karma是利用webpack将source-code和test-code打包在一起，嵌入到script-tag进行加载，所以可以精细到函数级别，简单地说就是这些具体执行的函数是否给到我预期的结果，比如测试缓存的功能，测试reload和refresh函数，测试其他的一些函数
<!--SR:!2022-12-05,1,230-->