---
createDate: 2022-07-03
---


#前端

## karma vs cypress and wdio

#flashcards


karma vs cypress and wdio
?
- karma 是做单元测试的test runner，我们写好的js测试代码可以在nodejs跑，但是我们希望在浏览器跑的话，需要做很多的工作，需要有一个html文件，一大堆的依赖相关的script标签，karma就是做这个事情，它会启动一个http服务器，然后加载它的依赖和我们所有的单元测试js代码
- cypress 和 wdio是e2e测试框架，他们各自有自己的test runner，他们能够做任意的集成测试，控制浏览器的很多功能，必须浏览某一个网页，打开一些新的tab页签等等karma做不到的功能，他们可以说是更高层级的框架
- karma的doc：[Karma - Spectacular Test Runner for Javascript](https://karma-runner.github.io/latest/index.html)
<!--SR:!2023-01-05,32,230-->