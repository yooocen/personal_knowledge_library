[elaborate](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=2cdfed29-6a5c-6f12-fad3-829808694c2d&page=124&rect=436.333,715.438,477.364,730.629)

[[elaborate]]


[This class would probably be elaborated into a hierarchy of different kinds of incidents, suchas loading, unloading, or being claimed by the receiver.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c7e9e4a8-46e7-e4f8-a541-a416287bf727&page=125&rect=60,640.470,564.342,672.154)

被索赔

[Cargoes can ride from place to place by being loaded onto Carriers for the duration of one or more Carrier Movements](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=43dd373b-d45e-8db8-cd05-dbfb180b17c4&page=125&rect=60,245.389,546.333,277.073)

for the duration 在整段时期内

[In order to frame up a solid implementation, this model still needs some clarification and tightening.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=1bbf076d-987d-ecc3-ee29-e7ae7dedf06e&page=125&rect=60,81.959,519.733,97.150)

[employing the building block patterns.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=95133f40-e9a1-5055-eedb-312105f4a4c3&page=126&rect=139.465,763.417,317.323,778.609)

[, an entity in the usualsense of the word](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f8080b35-c4a5-9830-94d2-184af43c612f&page=126&rect=60,344.347,541.435,376.031)
[This question calls for consultation with a domain expert.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=dceed966-1cae-c899-3d9d-d7d34deb7a13&page=126&rect=119.973,311.361,384.044,326.552)
[It will initially be a manual entry.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=0ddb3306-0815-29ac-f7ff-c2e94e435f2c&page=126&rect=60,245.389,561.676,277.073)

这一开始就是手工输入的

[Two places with the same name are not the same. Latitude and longitude could provide a unique key, but probably not a very practical one, since those measurements are not of interest to most purposes of this system,and they would be fairly complicated.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=1103392d-9d12-36ad-4f7d-7944522bf723&page=127&rect=60,721.435,564.713,769.612)

[More likely, the Location will be part of a geographical model of some kind that will relate places according to shipping lanes and other domain-specific concerns. So an arbitrary, internal, automatically generated identifier will suffice.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=77ae7015-c499-9686-854e-0e4997088ad5&page=127&rect=60,688.449,543.436,736.627)

[[suffice]]


[If the Customer has a direct reference to every Cargo it has shipped, it will become cumbersome for long-term, repeat Customers.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=d8c55bef-2095-c779-5485-c807e907622e&page=127&rect=60,264.131,561.107,295.815)
[[cumbersome]]


[If our application were tracking the inventory of ships, traversal from Carrier Movement to Handling Event would be important. But our business needs to track only the Cargo. Making the association traversable only from Handling Event to Carrier Movement captures that understanding of our business. This also reduces the implementation to a simple object reference, because the direction with multiplicity was disallowed.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=0adf3c4f-6671-f4db-449a-97b2423228e2&page=127&rect=60,126.940,555.357,208.103)

[[inventory]]
multiplicity 多重性


[Circular references logically exist in many domains and are sometimes necessary in design as well, but they are tricky to maintain. Implementation choices can help by avoiding holding the same information in two places that must be kept synchronized. In this case, we can make a simple but fragile implementation (in Java) in an initial prototype, by giving Delivery History a List object containing Handling Events. But at some point we’ll probably want to drop the collection in favor of a database lookup with Cargo as the key. This discussion will be taken up again when choosing REPOSITORIES. If the query to see the history is relatively infrequent, this should give good performance, simplify maintenance, and reduce the overhead of adding Handling Events. If this query is very frequent, then it is better to go ahead and maintain the direct pointer. These design trade-offs balance simplicity of implementation against performance. The model is the same; it contains the cycle and the bidirectional association.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=5636a311-1b5f-ca1c-23f7-e42b1fd732ae&page=128&rect=60,183.166,565.824,363.286)


[one, to find the Handling Events for a Delivery History as a possible alternative to the collection, would be local within the Cargo AGGREGATE; the other would be used to find all the operations to load and prepare for a particular Carrier Movement.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9f4236a6-25ff-6566-056c-00a37809ee17&page=129&rect=60,642.719,561.267,690.896)


[As discussed previously, the Handling Event is uniquely identified by the combination of the ID of its Cargo, the completion time, and the event type.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=ecfe26fb-1ad2-375e-b237-d5b4d080df8f&page=132&rect=60,478.539,542.223,510.224)

[Unfortunately, the story isn’t quite that simple. The cycle of references, from Cargo to Delivery History to History Event and back to Cargo, complicates instance creation. The Delivery History holds a collection of Handling Events relevant to its Cargo, and the new object must be added to this collection as part of the transaction. If this back-pointer were not created, the objects would be inconsistent.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=835b66c8-df44-6fd0-90bc-935081826e09&page=133&rect=60,746.924,563.654,811.595)

不幸的是，这个story不是这么简单，这种循环引用，从cargo到delivery history再到history event，最后回到cargo，实力创建太复杂。delivery history有一个关于handling event的集合，这些handling event又有cargo的引用，新的对象必须要加入这个集合中去。如果后向指针没有创建，那么这些对象都是不连续的。

[Let’s go back to one of them and, with the benefit of hindsight, stack the design deck in our favor.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=ccabb556-2a40-c49c-9e48-1a156b0bf37d&page=133&rect=60,223.648,555.726,255.333)

[The need to update Delivery History when adding a Handling Event gets the Cargo AGGREGATE involved in the transaction. If some other user was modifying Cargo at the same time, the HandlingEvent transaction could fail or be delayed. Entering a Handling Event is an operational activity that needsto be quick and simple, so an important application requirement is the ability to enter Handling Eventswithout contention. This pushes us to consider a different design.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=bce2b528-2bc5-9cf7-0654-9f2586938930&page=133&rect=60,135.936,564.894,217.099)

如果当前的cargo对象正在被修改，输入handling event这个事务可能会失败或者延迟。输入handling event本事就是一个需要快和简单的操作行为，所以一个很重要的应用需求就是可以在输入handling event的时候没有冲突。

[Replacing the Delivery History’s collection of Handling Events with a query would allow Handling Events to be added without raising any integrity issues outside its own AGGREGATE.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=5c53effe-34ec-daf3-1479-f38c118e7ec1&page=133&rect=60,97.702,513.736,129.387)
将delivery history中的handling event的集合换成查询的话，那么在加入新的handling event不就不会有任何不一致问题


[To take responsibility for the queries, we’ll add a REPOSITORY for Handling Events.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9737e5bd-483a-4c37-2dfe-91ad7713859c&page=134&rect=60,741.676,469.506,756.868)



incarnation化身

[This diagram is a variation on the infrastructure-driven packaging problem raised in Chapter 5.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=bddcdabf-17db-5dfd-5e55-59050a0363d4&page=135&rect=60,449.302,563.395,480.986)

这个图是基于第五章提到的基础设置驱动打包问题的变形

[The result is that objects that conceptually have little relationship (low cohesion) are crammed together, and associations run willy-nilly between all the MODULES(high coupling).](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c5078183-e74e-d553-3674-713f979393f4&page=135&rect=60,399.823,556.914,448.000)

cram 紧紧地
willy-nilly 乱七八糟的

[Partitioning by pattern may seem like an obvious error, but it is not really any less sensible than separating persistent objects from transient ones or any other methodical scheme that is not grounded in the meaning of the objects.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f4a3f84d-37ee-8ebb-2ab9-509e27eb5381&page=136&rect=60,99.202,558.429,147.379)

按模式划分明显就是一个错误。但是通过区别是持久对象还是临时对象来划分也不靠谱，任何不按照对象的含义来划分都不靠谱

[The back office takes care of billing, submitting invoices according to the pricing in the customer’s agreement.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8602a2f6-12b5-6411-5607-c78756be17f6&page=137&rect=60,285.872,564.713,301.063)

[This intuitive breakdown could be refined, certainly, in successive iterations, or even replaced entirely, but it is now aiding MODEL-DRIVEN DESIGN and contributing to the UBIQUITOUS LANGUAGE.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f28b51af-1d2a-0b64-c7af-97ac16948b86&page=137&rect=60,231.145,560.396,262.829)

这种直观的分解可以在后续的迭代中重新定义，甚至全部替换，但是这是对DDD很有帮助的

[The sales division](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=41570581-ced0-312c-7391-b3a73efa419c&page=137&rect=60,141.933,140.908,157.125)
销售部门

[One feature supports yield management by allowing the firm to allocate how much cargo of specific types they will attempt to book based on the type of goods, the origin and destination, or any other factor they may choose that can be entered as a category name.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=56a908d6-9bc1-3e78-721d-89e5a38cc723&page=137&rect=60,92.454,563.654,140.632)
一个重要的特性是支持收益管理，通过允许公司去分配他们想要预定的特定类型的货物的数量

[If the Booking Application interacts with it directly, our application will have to accommodate theother system’s design, which will make it harder to keep a clear MODEL-DRIVEN DESIGN and will confusethe UBIQUITOUS LANGUAGE.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9afc9242-d671-7bdc-fbcc-bb4a18f86382&page=138&rect=60,423.813,559.077,471.990)

[It will not be a general translation mechanism. It will expose just the features our application needs, and it will reabstract them in terms of our domain model.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=ce91f261-c5f0-967d-d0b5-dd02c1b15095&page=138&rect=60,374.334,550.015,422.511)

in terms of 按照


[But we would be missing an opportunity to use language to recast the problem along lines more useful to us.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=d3b962a5-2587-65c9-f13b-5fe825d61c8e&page=138&rect=60,319.607,557.193,351.292)

[The book Analysis Patterns (Fowler 1996) describes a pattern that addresses this kind of problem: theENTERPRISE SEGMENT.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=2888fc44-6add-9d49-1d2c-961bd3b4314a&page=139&rect=60,725.184,532.089,756.868)

[The Allocation Checker will translate between Enterprise Segments and the category names of the external system.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b2183ce2-6433-cc1b-5244-b32b95fbfc4d&page=139&rect=60,255.884,555.329,287.569)

[It isn’t clear how the Booking Application derives the Enterprise Segment.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=ef340322-051e-89e3-1dd2-717097c23c10&page=139&rect=119.224,94.703,506.239,109.895)


[The only serious constraint imposed by this integration will be that the Sales Management System mustn’t use dimensions that the Allocation Checker can’t turn into Enterprise Segments. (Without applying the ENTERPRISE SEGMENT pattern, the same constraint would force the sales system to use only dimensions that can be used in a query to the Cargo Repository. This approach is feasible, but the sales system spills into other parts of the domain. In this design, the Cargo Repository need only be designed to handle Enterprise Segment, and changes in the sales system ripple only as far as the Allocation Checker, which was conceived as a FACADE in the first place.)](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=afd3acc9-192c-d725-5fc7-a4605155d2b3&page=140&rect=60,468.044,560.942,582.193)

仅有的一个被这种整合强加的严格执行的约束就是：销售管理系统绝对不能使用配额检查器不能转为企业分片的维度。

没有应用企业分片模式的情况下，同样的约束将强制销售系统使用只被在查询中使用的维度。这种方式是可行的，但是销售系统将会溢出到领域的其他部分。


[There is no alternative to the second message, which invokes the Sales Management System to answer the basic question of whether a certain cargo should be accepted. But the first message, which derives the Enterprise Segment for a cargo, is based on relatively static data and behavior compared to the allocation decisions themselves.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8bdc1a6d-5ac1-53fa-4f31-a67ac5aac963&page=140&rect=60,304.614,558.472,369.284)

第一条信息对比配额决定自身来说，是基于相对静态的数据和行为

[So the Cargo would have to know about the Allocation Checker, which is well outside its conceptual responsibility, and it would be laden with methods for deriving specific types of Enterprise Segment.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=960dd63e-02bd-23bc-872b-cc5e33690e4c&page=141&rect=60,746.924,536.937,795.102)

[Therefore, the responsibility for deriving this value lies properly with the object that knows the rules for segmentation, rather than the object that has the data to which those rules apply.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8a5a4e75-6840-b896-2c15-d9376a14e8c6&page=141&rect=60,730.431,561.691,762.116)

因此，衍生这些值的职责最好房子啊知道这些分片规则的对象上面，而不是在包含要应用这些规则的数据的对象上面