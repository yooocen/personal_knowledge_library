[[DDD 问题反思]]

[DDD（领域驱动设计）-讲给P8听的业务设计课！理论+实践（坦克大战/抽丝剥茧设计模式），一个案例透彻理解！_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Rq4y197u8?spm_id_from=333.788.top_right_bar_window_history.content.click)

[[有趣的网站#^ef99e9]]
# MVC vs DDD

业务快速的变化驱动着软件系统越来越复杂，为了应对这种复杂度的提升，软件工程也在跟随着这种复杂度快速地发展，DDD的出现正是为了解决特别复杂并且快速变化的业务系统
 
[05:25](https://www.bilibili.com/video/BV1Rq4y197u8?spm_id_from=333.788.top_right_bar_window_history.content.click#t=325.58872)

[05:53](https://www.bilibili.com/video/BV1Rq4y197u8?spm_id_from=333.788.top_right_bar_window_history.content.click#t=353.610321)

选课系统

[09:06](https://www.bilibili.com/video/BV1Rq4y197u8?spm_id_from=333.788.top_right_bar_window_history.content.click#t=546.676935)
整洁架构（埃文斯架构） 六边形架构

为什么要分层：我理解是提供复用性，service是dao的组合，controller是service的组合

贫血模型：跟业务逻辑无关，纯粹的数据

充血模型：和自身状态相关的业务逻辑
[13:51](https://www.bilibili.com/video/BV1Rq4y197u8?p=3#t=831.320189)
对于域的封装不要受到其他域变化的影响
视频中会提到 学生域、老师域、课程域


DDD是战略层面的，不是战术层面的（具体代码怎么写）

[DDD（领域驱动设计）-讲给P8听的业务设计课！理论+实践（坦克大战/抽丝剥茧设计模式），一个案例透彻理解！_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Rq4y197u8?p=3)



[12:36](https://www.bilibili.com/video/BV1Rq4y197u8?p=3#t=756.563503)
是不是有更优雅的方式来应对业务的变化，并且我们的代码还可以往前发展，后面的人只敢打补丁而不敢改代码  


[18:02](https://www.bilibili.com/video/BV1Rq4y197u8?p=3#t=1082.92385)

复用、封装变化
复用就是实体中不变的api
域和域之间的联系可能是是不停地变化的，这个联系就需要封装，当联系发生变化了，只要切换实现即可

领域
领域服务
防腐层
仓库
工厂


[35:00](https://www.bilibili.com/video/BV1Rq4y197u8?p=3#t=2100.268763)
了解业务，甚至预测业务变化
[40:38](https://www.bilibili.com/video/BV1Rq4y197u8?p=3#t=2438.450583)
康威定律

[DDD（领域驱动设计）-讲给P8听的业务设计课！理论+实践（坦克大战/抽丝剥茧设计模式），一个案例透彻理解！_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Rq4y197u8?p=4)


[31:54](https://www.bilibili.com/video/BV1Rq4y197u8?p=4#t=1914.161987)
解决大量的微服务错综复杂的调用，膨胀的开发团队，划分好域，做好复用、封装变化 
领域服务可以发生变化，但是具体的领域还是在独立发展

==领域模型是不同的开发团队，是领域专家和开发人员的通用语言，这个领域模型可以不停地发展变化，跟你具体的实现无关，不同的团队可以做不同的实现==

就好像我做的ConfigGrid，用户对于表格的使用会有自己通用的理解，表格（域）的输入数据、表格的操作总是大同小异的、表格的相关用法总是会有通用相似的地方，但是表格的实现可以不一样，可以使SpreadGrid，可以是AuiGrid，虽然他们的性能不一样，实现方式不一样，适用的场景也不一样


一个团队就只在他自己的领域里，只关心自己领域的变化


[地图就是模型，而模型被用来描绘人们所关注的现实或想法的某个方面。模型是一种简化。它是对现实的解释一一把与解决问题密切相关的方面抽象出来，而忽略无关的细节。](obsidian://booknote?type=annotation&book=resources/%E9%A2%86%E5%9F%9F%E9%A9%B1%E5%8A%A8%E8%AE%BE%E8%AE%A1%20%E8%BD%AF%E4%BB%B6%E6%A0%B8%E5%BF%83%E5%A4%8D%E6%9D%82%E6%80%A7%E5%BA%94%E5%AF%B9%E4%B9%8B%E9%81%93%20%E4%BF%AE%E8%AE%A2%E7%89%88%20by%20%EF%BC%88%E7%BE%8E%EF%BC%89EricEvans%E8%91%97%20(z-lib.org).pdf&id=2ceb1268-82fe-4e6f-fdb0-362e19e63382&page=23&rect=36.018,85.369,451.539,125.985)

[每个软件程序是为了执行用户的某项活动，或是满足用户的某种需求。这些用户应用软件的问题区域就是软件的领域。](obsidian://booknote?type=annotation&book=resources/%E9%A2%86%E5%9F%9F%E9%A9%B1%E5%8A%A8%E8%AE%BE%E8%AE%A1%20%E8%BD%AF%E4%BB%B6%E6%A0%B8%E5%BF%83%E5%A4%8D%E6%9D%82%E6%80%A7%E5%BA%94%E5%AF%B9%E4%B9%8B%E9%81%93%20%E4%BF%AE%E8%AE%A2%E7%89%88%20by%20%EF%BC%88%E7%BE%8E%EF%BC%89EricEvans%E8%91%97%20(z-lib.org).pdf&id=5927e2b2-112c-2245-4e2a-1009d72dd268&page=23&rect=36.372,52.943,451.666,78.262)




[The design of the old application, if there was one, had accreted as one capability after another had been laid on top of the existing code, without any noticeable generalization or abstraction.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=ab21b893-6e7a-b6a0-157a-dcf1e0f73ff5&page=49&rect=60,343.597,552.719,391.774)

[[从句详解#^1d0e32]]

The design of the old application, if there was one, had accreted as “one capability after another had been laid on top of the existing code”, without any noticeable generalization or abstraction. ^664d75

[But the second time around, if the developers perceive analysis to be a separate process, modeling happens in a less disciplined way.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=81b7aeeb-617b-567c-2897-417993d0b846&page=51&rect=60,746.924,529.868,778.609)

它这本书提到的关于pcb的程序，我是这么理解，多个net同属一个bus，一个bus的规则可以应用到多个同属这个bus的net上，这样去应用规则就可以省事很多。但是不同的pcb软件存储net的格式不一样，那是否意味着要为每一种格式开发它的script呢？
![[booknote/books-data/resources/(annots)领域驱动设计 软件核心复杂性应对之道 修订版 by （美）EricEvans著 (z-lib.org).pdf/p57r13.530,246.200,434.400,558.350z2i(cd683868-0233-3118-fb4c-558f62a15f68).png#center|701]]


[如果编写代码的人员认为自己没必要对模型负责，或者不知道如何让模型为应用程序服务，那么这个模型就和程序没有任何关联。如果开发人员没有意识到改变代码就意昧着改变模型，那么他们对程序的重构不但不会增强模型的作用，反而还会削弱它的效果。同样，如果建模人员不参与到程序实现的过程中，那么对程序实现的约束就没有切身的感受，即使有，也会很快忘记。MODEL-DRIVEN DESIGN的两个基本要素（即模型要支持有效的实现并抽象出关键的领域知识）已经失去了一个，最终模型将变得不再实用。最后一点，如果分工阻断了设计人员与开发人员之间的协作，使他们无法转达实现MODEL-DRIVEN DESIGN的种种细节，那么经验丰富的设计人员则不能将自己的知识和技术传递给开发人员。](obsidian://booknote?type=annotation&book=resources/%E9%A2%86%E5%9F%9F%E9%A9%B1%E5%8A%A8%E8%AE%BE%E8%AE%A1%20%E8%BD%AF%E4%BB%B6%E6%A0%B8%E5%BF%83%E5%A4%8D%E6%9D%82%E6%80%A7%E5%BA%94%E5%AF%B9%E4%B9%8B%E9%81%93%20%E4%BF%AE%E8%AE%A2%E7%89%88%20by%20%EF%BC%88%E7%BE%8E%EF%BC%89EricEvans%E8%91%97%20(z-lib.org).pdf&id=8d337272-7175-18f2-8699-e7af9db1b70b&page=62&rect=31.920,469.360,448.179,592.161)

[The domain model is a set of concepts. The “domain layer” is the manifestation of that model and all directly related design elements. The design and implementation of business logic constitute the domain layer. In a MODEL-DRIVEN DESIGN, the software constructs of the domain layer mirror the model concepts.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b5983ea2-4420-b1a9-4612-7773869169bf&page=67&rect=60,350.344,560.655,398.521)
领域模型是概念的集合。领域层是模型和所有与之直接关联的设计元素的表现形式。业务逻辑的设计和实现构成了领域层。在ddd中，构建领域层的软件反应的模型的概念。
- association 
- entity
- value object
- service
[[DDD 的基本要素（第五章）]]
[[DDD 的基本要素（第六章）]]
[[DDD 的实战 （第七章）]]
