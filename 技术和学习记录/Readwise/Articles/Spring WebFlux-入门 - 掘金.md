# Spring WebFlux-入门 - 掘金

tags:: source
## Metadata
- Author: juejin.cn
- Full Title: Spring WebFlux-入门 - 掘金
- Category: #articles
- URL: https://juejin.cn/post/7001032584821997598

## Highlights
- 而在webflux中，数据在一个个operator间流转，订阅者只能获取到上游传递下来的数据，假如有一些数据并不是下游的所有operator都要用，我们也需要把这些数据打包一层层传递到下游。
- 是的，你没有看错，读取是要在写入的上游，“没有订阅，一切都不会发生”，context写入的数据，只有上游能够读到。在实际中，我们可能要把context写入放置在离订阅最近的地方，这样，所有的上游处理才能读到。
