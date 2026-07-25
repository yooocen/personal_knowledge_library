---
createDate: 2022-07-08
---


#前端

## 【karma】sourcemap怎么开启

#flashcards


【karma】sourcemap怎么开启
?
参考karma-webpack的readme[GitHub - ryanclark/karma-webpack: Karma webpack Middleware](https://github.com/ryanclark/karma-webpack)
有一个奇怪的现象，如果直接在ts文件上面打debugger，其实是成功的。但是在浏览器的source页签的浏览器看不到任何webpack的东西，似乎是用例执行完之后马上销毁了。
但是如果使用karma-typescript就可以 [[karma 的各种配置#^4e1e36]]
还有一个问题是，用例执行失败之后没有sourcemap看, 终端只会告诉你打包后的文件的哪一行
<!--SR:!2022-12-27,23,210-->