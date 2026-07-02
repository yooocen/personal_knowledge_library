# @Configuration(proxyBeanMethods = False) 设置这个为false有啥用 - 蒙恬括 - 博客园

tags:: source
## Metadata
- Author: cnblogs.com
- Full Title: @Configuration(proxyBeanMethods = False) 设置这个为false有啥用 - 蒙恬括 - 博客园
- Category: #articles
- URL: https://www.cnblogs.com/krock/p/15743401.html

## Highlights
- 1: 如果为true, 则表示被@Bean标识的方法都会被CGLIB进行代理，而且会走bean的生命周期中的一些行为（比如：@PostConstruct,@Destroy等 spring中提供的生命周期）, 如果bean是单例的，那么在同一个configuration中调用
  @Bean标识的方法，无论调用几次得到的都是同一个bean，就是说这个bean只初始化一次。
  2:  如果为false,则标识被@Bean标识的方法，不会被拦截进行CGLIB代理，也就不会走bean的生命周期中的一些行为（比如：@PostConstruct,@Destroy等 spring中提供的生命周期），如果同一个configuration中调用@Bean标识的方法，就只是普通方法的执行而已，并不会从容器中获取对象。所以如果单独调用@Bean标识的方法就是普通的方法调用，而且不走bean的生命周期。
  所以，如果配置类中的@Bean标识的方法之间不存在依赖调用的话，可以设置为false，可以避免拦截方法进行代理操作，也是提升性能的一种优化。但是需要注意，@Bean标识的返回值对象还是会放入到容器中的，从容器中获取bean还是可以是单例的，会走生命周期。
