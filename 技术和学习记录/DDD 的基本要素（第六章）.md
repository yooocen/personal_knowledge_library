---
view-count: 5
---
[Of course, many of these are simple, transient objects, created with an easy call to their constructor, used in some computation, and then abandoned to the garbage collector. There is no need to complicate such objects. But other objects have longer lives, not all of which are spent in active memory. They have complex interdependencies with other objects. They go through changes of state to which invariants apply. Managing these objects presents challenges that can easily derail an attempt at MODEL-DRIVEN DESIGN.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c0fc2f46-cfe6-3e9d-d10a-40574fe297ea&page=97&rect=60,649.466,565.644,747.122)

当然，他们之中很多都是简单，临时的对象

管理这些对象面临（提出）很多挑战，一不小心就可能会偏离DDD的意图
![[Pasted image 20220331002303.png]]

[Next, the focus turns to the beginning of the life cycle, using FACTORIES to create and reconstitute complex objects and AGGREGATES, keeping their internal structure encapsulated. Finally, REPOSITORIES address the middle and end of the life cycle, providing the means of finding and retrieving persistent objects while encapsulating the immense infrastructure involved.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=79e58bd4-01f3-2e8d-21ad-4c139e5ed8fd&page=97&rect=60,180.917,555.839,245.587)
庞大的基础设施
address 处理

[AGGREGATES mark off the scope within which invariants have to be maintained at every stage of the lifecycle.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=6abeb2b2-d31d-68e1-1d54-4499806e8244&page=97&rect=60,54.970,538.836,86.655)

聚合划分范围，在其中有需要在没有生命周期阶段都要维护的不变量

[It is difficult to guarantee the consistency of changes to objects in a model with complex associations. Invariants need to be maintained that apply to closely related groups of objects, not just discrete objects. Yet cautious locking schemes cause multiple users to interfere pointlessly with each other and make a system unusable.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=090c5c42-7916-f308-f614-55d10951d82c&page=98&rect=60,159.926,564.325,224.596)

但是过于谨慎的锁机制会导致多个用户之间无意义第互相干扰，导致系统不可用

[hacking and hoping](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=7732a263-f694-9f8e-33b9-e87ba8b85cbf&page=98&rect=157.457,72.213,247.993,87.405)

走一步算一步

[We need to find a model that leaves high-contention points looser and strict invariants tighter.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=68545e2b-ca2b-eaad-0c95-28a259a8b9a9&page=99&rect=60,779.910,562.017,811.782)

我们需要找到使高竞争点更松散，严格的不变量更紧密的模型

[Although this problem surfaces as technical difficulties in database transactions, it is rooted in the model—inits lack of defined boundaries. A solution driven from the model will make the model easier to understand and make the design easier to communicate. As the model is revised, it will guide our changes to the implementation.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=a3a8e841-1c84-ee96-d536-b48741f69a15&page=99&rect=60,708.691,565.015,773.361)

虽然这个问题表面上是数据库事务的技术难题，但是它的根源是模型缺少明确的边界定义。一个由模型驱动的解决方案会让模型更加容易理解和沟通。随着模型被修改，它会引导我们对实现也进行修改

[The root is the only member of the AGGREGATE that outside objects are allowed to hold references to, although objects within the boundary may hold references to each other.ENTITIES other than the root have local identity, but that identity needs to be distinguishable only within the AGGREGATE, because no outside object can ever see it out of the context of the root ENTITY.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=3a6240ce-8176-a356-4b38-a3859d0d5e17&page=99&rect=60,531.766,561.326,596.437)

[Invariants, which are consistency rules that must be maintained whenever data changes, will involve relationships between members of the AGGREGATE. Any rule that spans AGGREGATES will not be expected to be up-to-date at all times. Through event processing, batch processing, or other update mechanisms, other dependencies can be resolved within some specified time. But the invariants applied within an AGGREGATEwill be enforced with the completion of each transaction.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=cc6f927b-9f54-4226-0b97-20104a8b0492&page=100&rect=60,730.431,556.013,811.595)


[Nothing outside the AGGREGATE boundary can hold a reference to anything inside, except to the root ENTITY. The root ENTITY can hand references to the internal ENTITIES to other objects, but those objects can use them only transiently, and they may not hold on to the reference. The root may hand a copy of a VALUE OBJECT to another object, and it doesn’t matter what happens to it, because it’s just a VALUE and no longer will have any association with the AGGREGATE.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=71333fb7-26da-0b7e-5179-973bab65d7cf&page=100&rect=92.236,207.905,566.028,289.068)

hold on to 紧紧抓住

[Transient references to internal members can be passed out for use within a single operation only. Because the root controls access, it can not be blindsided by changes to the internals.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=106da4c0-6a2e-b449-de84-821a7bfb8ca3&page=101&rect=60,713.938,547.448,762.116)

blindside 忽然被攻击

[Clearly, locking a single line item isn’t an adequate safeguard. If instead we had locked an entire PO at a time, the problem would have been prevented.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=7308e565-2a87-f4e1-290d-56841af11081&page=102&rect=60,78.960,558.716,110.645)
很明显，锁定一个行并不足够防护。如果我们一次锁定整个po，那么问题就可以得到解决
[[adequate]]

[neither locked line item is involved in the other user’s change.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=d348e239-1196-d852-22ff-97285aa7cf2e&page=102&rect=282.651,339.849,563.214,355.040)


[Even assuming many small POs, there are other ways to violate the assertion. Consider that “part.” If someone changed the price of a trombone while Amanda was adding to her order, wouldn’t that violate the invariant too?](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f3b96adb-7799-b59c-6475-6d8d6ab01361&page=103&rect=60,326.354,562.826,374.532)
[[languages/violate]]

[Let’s try locking the part in addition to the entire PO.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=5f568845-cf6a-1356-521e-53a55471ab1d&page=103&rect=60,304.614,306.828,319.805)
我们尝试锁定part，除了锁定整个po以外

后面的例子的po号是不一样的

[They should, of course, show the prices as of the time they were filled, rather than current prices.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=3012903b-b355-3caf-a5d6-334e40eed49c&page=104&rect=60,52.721,557.966,84.406)

[At the same time, tightening the relationship of the PO and its line items guarantees that an important business rule will be followed.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=6935b9de-86b2-1340-fb41-7af01bda04e2&page=105&rect=60,438.806,553.080,470.491)

[The AGGREGATE imposes ownership of the PO and its items that is consistent with business practice. The creation and deletion of a PO and items are naturally tied together, while the creation and deletion of parts is independent.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=0e353621-81e4-2976-ce62-8304c925c2ea&page=105&rect=60,384.829,562.076,433.007)


[Much of the power of objects rests in the intricate configuration of their internals and their associations. An object should be distilled until nothing remains that does not relate to its meaning or support its role in interactions. This mid-life cycle responsibility is plenty. Problems arise from overloading a complex object with responsibility for its own creation.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c83657d1-37af-c4e1-e421-d70664731f8b&page=106&rect=60,390.077,549.476,454.747)

对象们的能力体现在他们的错综复杂的内在配置和他们之间的关系。一个对象应该提炼到任何和它的意义和角色无关的东西都不存在位置。这种中间过程生命周期职责已经很多了。如果再让一个复杂对象超量地负责它自己的创建职责则很容易产生问题

[One could imagine trying to design an engine block that could grab on to a set of pistons and insert them into its cylinders, spark plugs that would find their sockets and screw themselves in.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8210e692-10d5-12b4-e25a-735f8aa76e23&page=106&rect=60,336.100,562.464,367.785)

[But shifting responsibility to the other interested party, the client object in the application, leads to even worse problems.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c9ed9494-3b16-7a33-ef4d-cb0b11c3f1b1&page=106&rect=60,165.923,562.826,197.607)

[Even calling constructors couples the client to the concrete classes of the objects it is building. No change to the implementation of the domain objects can be made without changing the client, making refactoring harder.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=bbc8f986-af66-14e0-e54d-1f6f3c230088&page=106&rect=60,83.458,550.470,131.636)
没有针对客户端的改变，就不可能做出针对领域对象实现的改变。

==

如果要针对领域模型做出改变，那么客户端也要做出相应的改变


[A client taking on object creation becomes unnecessarily complicated and blurs its responsibility.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=711a5feb-8de4-810a-47e7-59c6804237aa&page=106&rect=60,61.718,498.743,76.909)

一个客户端在对象创建的时刻变得不必要的复杂，而且模糊了它的职责

[Each creation method is atomic and enforces all invariants of the created object or AGGREGATE.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=a4a8b0f0-5753-a060-c6e6-1f3035f14a98&page=108&rect=119.224,688.449,557.966,703.641)

所有的创建方法都是原子性的，而且要强制加上被创建的对象和聚合的所有的==不变量==

这里的不变量指的是所有留在同一个聚合下面的实体都要共同遵守的规则

[For an ENTITY, this means the creation of the entire AGGREGATE, with all invariants satisfied, but probably with optional elements still to be added.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=ccfe3446-4584-295f-17fd-4287875f9fdf&page=108&rect=117.724,638.970,560.396,687.148)

[For an immutable VALUE OBJECT, this means that all attributes are initialized to their correct final state.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=e4ccc9b2-8b42-f57b-780e-19208f528195&page=108&rect=117.724,622.477,529.441,654.162)

[The FACTORY should be abstracted to the type desired, rather than the concrete class(es) created.The sophisticated FACTORY patterns in Gamma et al. 1995 help with this.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=912ec389-e12d-8a87-93a1-5419c9664146&page=108&rect=117.724,552.757,560.215,584.442)

工厂要被抽象为所需的类型，而不是具体要创建的类。


[For example, if you needed to add elements inside a preexisting AGGREGATE, you might create a FACTORY METHOD on the root of the AGGREGATE. This hides the implementation of the interior of the AGGREGATE from any external client, while giving the root responsibility for ensuring the integrity of the AGGREGATE as elements are added, as shown in Figure 6.13 on the next page.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9fef04e2-169d-3d7b-364c-5927c43613d0&page=108&rect=60,417.065,564.658,481.736)
![[booknote/books-data/resources/(annots)Domain-Driven Design Tackling Complexity in the Heart of Software by Eric Evans (z-lib.org).pdf/p108r50.500,62.150,576.780,415.030z2i(57b32a9e-c307-ebb8-c453-2e915a76a564).png#center|877]]


[Another example would be to place a FACTORY METHOD on an object that is closely involved in spawning another object, although it doesn’t own the product once it is created. When the data and possibly the rules of one object are very dominant in the creation of an object, this saves pulling information out of the spawner tobe used else where to create the object. It also communicates the special relationship between the spawner andthe product.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b7d5b857-c5e5-e112-9e7d-fbe16e38e779&page=109&rect=60,730.431,562.178,811.595)

[In Figure 6.14, the Trade Order is not part of the same AGGREGATE as the Brokerage Account because, for a start, it will go on to interact with the trade execution application, where the Brokerage Account would only be in the way. Even so, it seems natural to give the Brokerage Account control over the creation of Trade Orders. The Brokerage Account contains information that will be embedded in the Trade Order (starting with its own identity), and it contains rules that govern what trades are allowed. We might also benefit from hiding the implementation of Trade Order. For example, it might be refactored into a hierarchy, with separate subclasses for Buy Order and Sell Order. The FACTORY keeps the client from being coupled to the concrete classes.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=5b36f5a1-de32-dc6e-b411-22b5209f31ed&page=109&rect=60,593.240,563.395,723.882)

![[booknote/books-data/resources/(annots)Domain-Driven Design Tackling Complexity in the Heart of Software by Eric Evans (z-lib.org).pdf/p109r55.240,443.350,568.570,586.160z2i(d3b5a7ad-70d4-1823-3a34-a69be0d76845).png#center|856]]

[c# - DDD - Enforce invariants for associations inside the aggregate - Stack Overflow](https://stackoverflow.com/questions/55086752/ddd-enforce-invariants-for-associations-inside-the-aggregate)
这是一个很好的问题
[[DDD - Enforce Invariants for Associations Inside the Aggregate]]


[The Java class library offers interesting examples. All collections implement interfaces that decouple the client from the concrete implementation. Yet they are all created by direct calls to constructors. A FACTORY could have encapsulated the collection hierarchy. The FACTORY’s methods could have allowed a client to ask for the features it needed, with the FACTORY selecting the appropriate class to instantiate. Code that created collections would be more expressive, and new collection classes could be installed without breaking every Java program.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=d08733f7-e3a5-d4e8-0fb9-fb63b33db7dd&page=110&rect=60,431.309,563.575,528.966)


[The abstract collection types preserve some value in spite of the lack of a FACTORY because of their usagepatterns. Collections are very often created in one place and used in another. This means that the client that ultimately uses the collection—adding, removing, and retrieving its contents—can still talk to the interface and be decoupled from the implementation. The selection of a collection class typically falls to the object that owns the collection, or to the owning object’s FACTORY.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=074e265b-cd1b-4bfa-efda-a52fbaac9374&page=110&rect=60,273.127,565.015,354.290)


[The safest parameters are those from a lower design layer. Even within a layer, there tend to be natural strata with more basic objects that are used by higher-level objects.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=a49a767f-a375-6d50-ef25-3707b4816f30&page=111&rect=60,779.910,551.035,811.595)

这里的[[with]]是带着的意思


[The FACTORY is coupled to the concrete class of the products; it does not need to be coupled to concrete parameters also.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=d946c699-1c97-ab69-4b0e-4055449ee0f0&page=111&rect=60,621.728,547.083,653.412)

[Under some circumstances, there are advantages to placing invariant logic in the FACTORY and reducing clutter in the product. This is especially appealing with AGGREGATE rules (which span many objects). It is especially unappealing with FACTORY METHODS attached to other domain objects.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=75de95e8-56ba-5f0f-478d-51a00399d1d5&page=111&rect=60,453.050,536.587,517.720)

但是内在规则特别不合适放到和其他领域对象相关联的工厂方法中


[Although in principle invariants apply at the end of every operation, often the transformations allowed to the object can never bring them into play. There might be a rule that applies to the assignment of the identity attributes of an ENTITY. But after creation that identity is immutable. VALUE OBJECTS are completely immutable. An object doesn’t need to carry around the logic that will never be applied in its active lifetime. In such cases, the FACTORY is a logical place to put invariants, keeping the product simpler.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=0d7376a1-cb0d-4c75-aff2-3df6ebbe20ed&page=111&rect=60,365.338,556.828,446.501)

规则只在创建的时候需要用到，后续创建的对象可能在它整个声明周期都不会再校验一次规则了


[Most transmission methods flatten an object into an even more limited presentation. Therefore, retrieval requires a potentially complex process of reassembling the parts into a live object.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=ef8c79c7-c34b-b3b1-62a2-19a3aecb2ef2&page=112&rect=60,779.910,560.577,811.805)

[A FACTORY reconstituting an object will handle violation of an invariant differently. During the creation of a new object, a FACTORY should simply balk when an invariant isn’t met, but a more flexible response may be necessary for reconstitution. If an object already exists somewhere in the system (such as in the database), this fact cannot be ignored. Yet we also can’t ignore the rule violation. There has to be some strategy for repairing such inconsistencies, which can make reconstitution more challenging than the creation of new objects.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=6a47ffa4-abe6-2fa4-ece6-44605b8d42f3&page=112&rect=117.724,602.236,553.847,699.892)

一个工厂对于重建对象时的违反不变量的不同情况会有不同的处理


[Associations allow us to find an object based on its relationship to another. But we must have a starting point for a traversal to an ENTITY or VALUE in the middle of its life cycle.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=92d75446-812f-f624-1441-90c1e4afc3b4&page=113&rect=60,75.962,557.943,107.646)

我们必须通过一个入口来找到实体或者值对象


[This self-imposed limitation forced them to create just the kind of endless tangle that we have been trying to avert over the last few chapters, with careful implementation of ENTITIES and application of AGGREGATES.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=2e7f284f-4688-35b7-6bac-257bc2d7f459&page=114&rect=60,626.226,564.266,674.403)

[To keep this distinction in mind, I refer to the creation of an instance from stored data as reconstitution.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=6a5913dd-425c-d6d9-6f2a-369ff1305c5d&page=114&rect=60,276.875,555.148,308.560)

我提到的从存储数据中创建对象，称作重建

[The details of the technology vary](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=5eec9622-92d0-8b12-e48f-c35197170f3b&page=114&rect=60,172.670,559.827,204.355)

技术细节可能变来变去


[A client needs a practical means of acquiring references to preexisting domain objects.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=0d7d52d0-36fa-713e-3b4a-f7d17d6a75bc&page=115&rect=60,796.403,554.218,811.595)

[We also need no query access for persistent objects that are more convenient to find by traversal. For example, the address of a person could be requested from the Person object. And most important, any object internal to an AGGREGATE is prohibited from access except by traversal from the root.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=4040b5a6-0cd8-e553-6af9-c7a4b6b7aac1&page=115&rect=60,543.761,554.783,608.432)

我们不需要去查询那些更容易通过遍历发现的持久化对象

[For example, when I am planning travel online, I sometimes save a few prospective itineraries and return later to select one to book. Those itineraries are VALUES (if there were two made up of the same flights, I would not care which was which), but they have been associated with my user name and retrieved for me intact. Another case would be an “enumeration,” when a type has a strictly limited,predetermined set of possible values. Global access to VALUE OBJECTS is much less common than forENTITIES, though, and if you find you need to search the database for a preexisting VALUE, it is worth considering the possibility that you’ve really got an ENTITY whose identity you haven’t recognized.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=1e060e27-e0cd-d007-9dce-a2012f52ffbf&page=115&rect=60,374.334,553.931,488.483)
[[itinerary]]
[[prospective]]
[[intact]]
举个例子，当我在网上做着自己的旅游计划，我有时候会保存一些潜在的路线，然后选一个去预定。虽然这些路线就是值对象（如果有两个路线其实是同一个航班，我不在乎那个是哪个），但是他们和我的用户名强绑定，而且可以返回一个具体的路线。另外一个例子是枚举，枚举是一种严格限制的类型，里面有预设的可能的值。全局访问值对象是不常见的，如果你需要在数据库中查询一个已经存在的值对象，那么它会不会是另一个还没有被识别出来的实体呢？


[A subset of persistent objects must be globally accessible through a search based on object attributes. Such access is needed for the roots of AGGREGATES that are not convenient to reach by traversal. They are usually ENTITIES, sometimes VALUE OBJECTS with complex internal structure, and sometimes enumerated VALUES. Providing access to other objects muddies important distinctions. Free database queries can actually breach the encapsulation of domain objects and AGGREGATES. Exposure of technicalinfrastructure and database access mechanisms complicates the client and obscures the MODEL-DRIVEN DESIGN.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=4a9d302a-2195-3365-86f5-cb648d4e3efd&page=115&rect=60,180.785,556.164,308.560)
[[breach]]
具体意思是除了一些实体，内部结构特别复杂的值对象，被枚举的值对象以外，其他都不要去绕过聚合根去查数据库


[A REPOSITORY lifts a huge burden from the client, which can now talk to a simple, intention-revealing interface, and ask for what it needs in terms of the model.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=6d6e9bc6-2a86-e9e2-729e-4cbc37e825bb&page=116&rect=60,380.331,533.616,412.016)
[[revealing]]

simple intention-revealing
简单 意图明显的


[For each type of object that needs global access, create an object that can provide the illusion of an in-memory collection of all objects of that type.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=15a3bf25-7ba0-b402-d172-fdd0e182ff6b&page=116&rect=60,303.864,548.582,335.548)

对于每一种需要全局访问的对象的类型，创建一个对象可以提供一种错觉，好像所有这个类型的对象都在内存之中

[They allow easy substitution of a dummy implementation, for use in testing (typically using an in-memory collection).](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=3823ed90-e2a3-b479-6b57-0f4610a7e114&page=117&rect=92.236,779.910,542.366,811.595)


dummy implementations 哑实现
= mock

[These queries can be various: retrieving an ENTITY by its identity (provided by almost all REPOSITORIES); requesting a collection of objects with a particular attribute value or a complex combination of parameters; selecting objects based on value ranges (such as date ranges); and even performing some calculations that fall within the general responsibility of a REPOSITORY](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c689ae6b-742f-ae01-e073-102f98a6b0b3&page=117&rect=60,627.725,559.972,708.888)

所以一共就是这几个情况
查询实体
查询对象的集合
根据数据的范围查询对象
执行一些运算

[(especially drawing on operations supported by the underlying database)](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=42c2be40-6435-f962-102d-572740689b3f&page=117&rect=210.683,627.725,537.868,642.917)
特别是使用那些被底下的数据库支持的操作
[[underlaying]]


[Frameworks that don’t allow for such contingencies tend to distort the domain design or get bypassed by developers.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=7e1f2a95-d1d9-2e6e-0c8f-db80c6c423f2&page=118&rect=60,708.691,542.950,740.375)
[[contingency]]
[[bypass]]

[The performance implications can be extreme when REPOSITORIES are used in different ways or work in different ways.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=d9a49bc8-d476-4f69-40eb-c5506f205050&page=118&rect=60,611.232,511.993,642.917)
[[implication]]

[Keep in mind that you may well face constraints imposed by the lack of such polymorphism in your database technology.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=20693704-1aed-4608-2763-d058bb23321d&page=119&rect=92.985,353.343,551.515,385.027)

well是很可能的意思

[Although the REPOSITORY will insert into and delete from the database, it will ordinarily not commit anything. It is tempting to commit after saving, for example, but the client presumably has the context to correctly initiate and commit units of work.Transaction management will be simpler if the REPOSITORY keeps its hands off.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=2d16c109-d0d0-e2e9-4d1c-52dc64601064&page=119&rect=92.985,180.167,555.814,244.837)
[[ordinary]]


[But of course, this will have to be done with queries that return collections anyway in Java.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b4c5a633-b8a4-63bf-510f-ea9edfc7715a&page=119&rect=60,76.711,540.437,108.396)

[For example, your project might be committed to J2EE.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=7f8e8b2a-16e1-75a9-5e46-abc38433a523&page=120&rect=60,660.711,319.572,675.903)

be committed to 致力于 忠于 委身于


[Looking for conceptual affinities between the framework and the patterns of MODEL-DRIVEN DESIGN](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=42617c2d-c06c-1307-c88d-ed5d2eb43ddc&page=120&rect=60,644.218,529.840,675.903)
[[affinity]]
找到概念上相近的地方

antagonistic 对抗的

[The FACTORY makes new objects; the REPOSITORY finds old objects.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=bcd76ed4-7eb4-390d-c7fc-e1a80965880c&page=120&rect=169.451,306.113,494.994,321.304)

[These two views can be reconciled by making the REPOSITORY delegate object creation to a FACTORY,which (in theory, though seldom in practice) could also be used to create objects from scratch.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9cce2564-ce81-30a5-54dc-1dfb4695a91b&page=120&rect=60,218.401,536.976,250.085)
[[reconcile]]
这两种观点也可以调和成让仓储委托对象创建给工厂


[This clear separation also helps by unloading all responsibility for persistence from the FACTORIES. A FACTORY’S job is to instantiate a potentially complex object from data. If the product is a new object, the client will know this and can add it to the REPOSITORY, which will encapsulate the storage of the object in the database.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=2826bf03-96d5-725f-9ada-a79adcdfb628&page=121&rect=60,715.438,550.226,780.108)
[[unloading]]

[It is a minor convenience at best.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=7a032762-2d40-8003-d72d-c1077a90cfce&page=121&rect=301.393,339.849,450.764,355.040)
这最多就是一个小小的便利而已

[Usually, the distinction between a new object and an existing object is important in the domain, and a framework that transparently combines them will actually muddle the situation.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=bd00172b-a33e-cfa3-4108-c5b17109657d&page=121&rect=60,273.877,553.445,322.054)

区分新对象和一个已经存在的对象是非常重要的

[The most common nonobject component of primarily object-oriented software systems is the relational database.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=481eabb7-c2f7-489c-ab3f-68b2dfc2c5b5&page=121&rect=60,205.656,534.688,237.340)

以面对对象为主的软件系统

[But the database is more intimately related to the object model than are most other components.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=703b2c39-4718-a6f4-ed95-00066d7d5498&page=121&rect=60,189.163,558.328,220.847)
紧密联系
[[intimately]]


[Many of the same arguments presented for MODEL-DRIVEN DESIGN—avoiding separate analysis and design models—apply to this mismatch.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=000cf3c2-b138-c570-3ba5-873830f19437&page=122&rect=60,655.463,532.089,687.148)
很多在DDD中关于避免将分析和设计模型分开的争论也可以应用于这种不匹配的问题

[such as selective denormalization](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=209c1e39-92e8-424e-a5b1-7d4c7061e7c6&page=122&rect=60,622.477,514.847,654.162)
[[selective]]

[But it is crucial that the mappings be transparent, easily understandable by inspecting the code or reading entries in the mapping tool.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=6c3ed5be-221a-3e24-8831-bf95c7f38b09&page=122&rect=60,572.999,533.589,604.683)


[It may make sense to conform to the model implicit in the other system, or it may be better to make the model completely distinct.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=5576cd69-f4bd-a997-b1a4-3a2a55661d8b&page=122&rect=60,378.832,564.713,410.516)

可能有道理，与其他系统中的隐式模型保持一致，或者让模型完全区别开来会更好

![[Pasted image 20220501133659.png]]


[A table row should contain an object, perhaps along with subsidiaries in an AGGREGATE.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=bb8cbd7f-da59-68a1-45b1-a1da5a2e21ed&page=122&rect=60,285.872,554.724,317.556)

[[subsidiary]]
附庸


[The necessity of sometimes deviating from this simple directness should not lead to total abandonment of the principle of simple mappings.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=a81ac828-e355-f950-7ec0-e2fa611e900d&page=122&rect=60,252.886,539.586,301.063)

[[deviation]]

有时候有必要违背简单对应关系不应该导致整个简单映射原则的弃用

[The names and associations of elements in the objects should correspond meticulously to those of the relational tables.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9ab25ab5-d016-51bb-4901-1de764d728c9&page=122&rect=60,198.909,523.093,230.593)

对象中元素的名字和关联应该和关系数据库中的东西一丝不苟地相符合
[[meticulously]]


[Cutting the two loose from each other is a seductive path.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f9efab14-bf1e-e382-7053-63241ebd1457&page=123&rect=145.462,796.087,409.532,811.278)
将这两个东西保持松散关联式有吸引力的

[If the separation is chosen consciously, it can result in a clean database schema—not an awkward one full of compromises conforming to last year’s object model.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=e8ca113a-5a3f-6f28-7426-5aa7cb334260&page=123&rect=60,746.924,560.721,795.102)

