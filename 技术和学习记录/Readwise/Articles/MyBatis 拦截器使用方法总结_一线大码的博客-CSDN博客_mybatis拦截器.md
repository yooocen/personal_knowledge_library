# MyBatis 拦截器使用方法总结_一线大码的博客-CSDN博客_mybatis拦截器

tags:: source
## Metadata
- Author: blog.csdn.net
- Full Title: MyBatis 拦截器使用方法总结_一线大码的博客-CSDN博客_mybatis拦截器
- Category: #articles
- URL: https://blog.csdn.net/wb1046329430/article/details/111501755

## Highlights
- MyBatis拦截器用到责任链模式+动态代理+反射机制； 所有可能被拦截的处理类都会生成一个代理类，如果有N个拦截器，就会有N个代理，层层生成动态代理是比较耗性能的。而且虽然能指定插件拦截的位置，但这个是在执行方法时利用反射动态判断的，初始化的时候就是简单的把拦截器插入到了所有可以拦截的地方。所以尽量不要编写不必要的拦截器。另外我们可以在调用插件的地方添加判断，只要是当前拦截器拦截的对象才进行调用，否则直接返回目标对象本身，这样可以减少反射判断的次数，提高性能。
