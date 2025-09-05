---
createDate: 2022-07-16
---


#前端 


#flashcards


怎么处理打包过程中的无法识别"@斜杠component"
?
光在tsconfig里面配置不够
最重要的是在webpack里面配置
```
resolve: {
	alias: {
		'@' ： path.join(__dirname, 'src')
	}
}
```
[[Vuejs Module Not Found Error Can't Resolve '@Components Error Using Webpack]]
<!--SR:!2022-12-05,1,230-->