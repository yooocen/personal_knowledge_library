---
createDate: 2022-07-04
---


#前端

## karma 自动打开浏览器，执行完用例后关闭

#flashcards


karma 自动打开浏览器，执行完用例后关闭
?
- 在karma.config.js中配置
`browser:['chrome']`
karma start后就会自动打开谷歌浏览器，然后开始执行代码
- 在karma中配置
`singelRun=true`
karma 执行完用例之后就会自动关闭浏览器
[[Karma - Configuration File]]
<!--SR:!2022-12-24,20,210-->