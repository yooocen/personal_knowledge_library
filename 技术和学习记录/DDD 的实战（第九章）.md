[A deep model has power because it contains the central concepts and abstractions that can succinctly and flexibly express essential knowledge of the users’ activities, their problems, and their solutions. The first step is to somehow represent the essential concepts of the domain in the model. Refinement comes later, after successive iterations of knowledge crunching and refactoring. But this process really gets into gear when an important concept is recognized and made explicit in the model and design.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=34506fef-59e0-300f-eb0b-93638d9f5644&page=154&rect=60,665.959,562.221,763.615)

[[succinctly]] 简洁地
[[crunch]]
get into gear 活动起来

[Many transformations of domain models and the corresponding code happen when developers recognize a concept that has been hinted at in discussion or present implicitly in the design, and they then represent it explicitly in the model with one or more objects or relationships.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=87baeca6-c6a3-765c-2228-a6628f6870d5&page=154&rect=60,594.739,549.266,659.410)

hint 暗示 诀窍

[The UBIQUITOUS LANGUAGE is made up of the vocabulary that pervades speech, documents, model diagrams, and even code. If a term is absent from the design, it is an opportunity to improve the model and design by including it.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=1b0ff44e-d3e8-9267-16d8-49427c908e78&page=155&rect=60,708.691,538.836,756.868)
[[pervade]]
通用语言就是由三部在演讲，文档，模型图甚至代码中的词汇组成


[The booking application used a routing engine to plan the trip for a cargo. Each leg of the journey was stored in a row of a database table, indicating the ID of the vessel voyage (a particular voyage by a particular ship)slated to carry the cargo, the location where it would be loaded, and the location where it would be unloaded.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=088234fd-c745-440e-5dbd-2f5d6320292d&page=155&rect=60,573.748,558.716,621.926)

预订应用程序使用路由引擎来计划货物的行程。旅程的每一段都存储在数据库表的一行中，表明装载货物的船舶航次(特定船舶的特定航次)的ID、装载位置和卸载位置。


[Scrutinize Awkwardness](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=18205f19-80ee-e097-292a-c741a902845b&page=158&rect=60,796.403,199.056,811.595)

[Sometimes it can be hard to recognize that there even is a missing concept. You may have objects doing all the work but find some of the responsibilities awkward. Or, if you do realize something is missing, a model solution may elude you.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9967b347-c3de-ba0e-f4a3-1d6ad3397b0a&page=158&rect=60,669.707,561.326,717.885)

[[elude]]


[Now you have to actively engage the domain experts in the search.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9240d310-9af2-1d4e-c580-928273de00f6&page=158&rect=60,648.716,362.303,663.908)

现在你需要积极邀请领域专家一起搜索


[We still have more cases we’ve been holding back.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f336aa1e-c642-c74e-8185-6a163a51b0f0&page=158&rect=248.916,99.202,476.253,114.393)
我们仍然有更多的cases没有做

[Actually, the interest calculation would be simpler if it was done just for one day, or period.And then we could just hang on to them all.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c169a42c-a5bf-a1c6-d616-f9b98046ecf4&page=160&rect=80.241,743.176,562.464,774.860)


[With this model, we get the interest calculation, or rather, the accrual calculation logic thatwas in the Interest Calculator separated from tracking. And I hadn’t noticed until now how much duplication there is in the Fee Calculator. Also, now the different kinds of fees can easily be added.Expert: Yes, the calculation was correct before, but I can see everything now.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=10fbd754-5fc3-1738-c494-a83cd178dc86&page=160&rect=77.992,139.684,557.193,208.103)
[[accrual]]


[She could see the awkwardness of the interest calculations and made a committed effort to look for a deeper answer.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=ba1dd29f-f2ad-5eb2-5053-4067c7365abf&page=161&rect=60,321.107,547.083,352.791)
[[committed]]

[With a more passive source of expertise, she would have made more false starts and depended more on other developers as brainstorming partners.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=d985d8e6-e672-26b3-8366-8ecd0f56706b&page=161&rect=60,267.130,556.079,315.307)
这里用到了虚拟语气


[Contemplate Contradictions](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=6ed0af98-647a-a1c5-21e3-399bf7e5868e&page=161&rect=60,241.641,224.545,256.832)
[[contemplate]]
[[contradictions]]

[Such pesky contradictions, which we encounter all the time when digging into program requirements, can be great clues to deeper models.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=dbab0cc8-c1e4-1e6f-cfaa-3e16c8604ef4&page=161&rect=60,186.164,552.330,217.849)
多么讨厌的矛盾

[But there is a residue where two factual statements by experts seem to contradict.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=fa39087d-322b-a003-ac1e-5bb922dfcf3a&page=161&rect=60,153.178,533.939,184.863)
[[residue]]

[From this he deduced an early form of the idea of inertial frames of reference, solving theparadox and leading to a much more useful model of the physics of motion.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=464b5f98-70da-41be-ebc1-61a99549ba44&page=162&rect=60,763.417,553.830,795.102)

[Even so, this same pattern of thought often helps pierce the superficial layers of a problem domain into a deeper insight.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=403f673c-5e77-2c46-f7b2-02b9ce4971fb&page=162&rect=60,725.184,550.081,756.868)

[Don’t overlook the obvious when seeking model concepts.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=032b4381-ddb8-7e4e-d555-b567035fb802&page=162&rect=60,623.227,328.568,638.419)
在寻找模型概念的时候，不要跳过那些显而易见的东西、


[In this scenario, the developer couldn’t turn to the expert for a brainstorming session to probe for the missing concepts she suspected to be lurking under the surface.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b5aa02a8-38cb-fb90-eb0d-98c3788fe352&page=162&rect=60,443.304,551.581,491.482)
这个场景中，这个开发者不能求助专家来寻求一次头脑风暴会话以打探到那些她怀疑表面上正在丢失的概念

[Accrual Basis Accounting. This method recognizes income when it is earned, even if it is not paid.All expenses also show when they are incurred whether they have been paid for or billed to be paid at alater date. Any obligation due, including taxes, will be shown as expense.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=ae1370df-5eff-b61f-53af-2b29e3b3834b&page=162&rect=80.241,335.350,557.217,383.528)

权责发生制会计。 这种方法在收入获得时确认收入，即使没有支付。 所有费用在发生时还应显示是否已支付或将在以后的日期支付。 任何到期的义务，包括税金，都将显示为费用

[Such reading would not have provided an off-the-shelf solution. It would have given several new starting points for her own experiments, along with the distilled experience of people who have traveled the territory. She would have been spared reinventing the wheel.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c39efd58-6802-84bb-fc1b-eb4c37dfd6ca&page=163&rect=60,208.655,548.582,256.832)
这样的阅读并不能提供一个现成的解决方案。


[The examples I’ve given don’t convey the amount of trial and error involved. I might follow half a dozen leadsin conversation before finding one that seems clear and useful enough to try out in the model. I’ll end upreplacing that one at least once later, as additional experience and knowledge crunching serve up better ideas. Amodeler/designer cannot afford to get attached to his own ideas.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f7fcbf89-ee3f-37b6-f784-dded1d9084fb&page=163&rect=60,94.703,564.144,159.374)
这些我提到的例子并没有传递出其中尝试和失败的数量。我可能在找到一个可以在建模中使用的看起来清晰有用的线索之前跟随对话中的半打线索。随着经验的增加和知识的积累可以支撑更好的主意，我最终会替换线索至少一次。建模师绝不能固执己见


[Eachrefactoring leaves the design more supple, easier to change the next time, ready to bend in the places that turn to need to bend](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=a0c8b25a-0737-8837-7642-629bd7c90e3c&page=163&rect=60,21.235,556.223,88.904)
准备好修改在需要修改的地方

[There really is no choice, anyway. Experimentation is the way to learn what works and doesn’t. Trying toavoid missteps in design will result in a lower quality result because it will be based on less experience. And itcan easily take longer than a series of quick experiments.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=e075ddd0-0772-d351-338d-b94bf8b4e4fa&page=164&rect=60,741.676,553.445,789.854)
没有什么选项，真的。实验就是学习什么有效什么没效的方法。

[Factoring the constraint into its own method allows us to give itan intention-revealing name that makes the constraint explicit in our design. It is now a named thing we candiscuss.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=a4af4410-1b3b-af88-b3ac-872ade7c0c32&page=165&rect=60,564.003,553.445,612.180)
将这个约束重构成它自己的方法可以允许我们给它一个目的明确的名字，让这个约束在设计中更加明显。


[Here are some warning signs that a constraint is distorting the design of its host object.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=66d22f72-57b6-567d-a3fb-715ade18fc99&page=165&rect=60,438.056,454.512,453.248)
这里有一些警告信息，约束正在扰乱你的设计

![[booknote/books-data/resources/(annots)Domain-Driven Design Tackling Complexity in the Heart of Software by Eric Evans (z-lib.org).pdf/p165r100.750,341.490,561.770,433.080z2i(42729ef6-5417-aead-d7ac-d42ca1a94b0a).png#center|768]]

[When the constraints are obscuring the object’s basic responsibility, or when the constraint is prominent in the domain yet not prominent in the model, you can factor it out into an explicit object or even model it as a set of objects and relationships.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f5a744ce-f2fb-a112-4fa0-ae59e89af73a&page=165&rect=60,289.620,562.826,337.797)


[(Experience has taught shipping firms that this overbooking compensates for last-minute cancellations, so their ships will sail nearly full.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=3308e498-64a1-1823-9de5-a75448af4280&page=165&rect=60,192.162,543.115,223.846)
航运公司的经验告诉他们，这种超额预订补偿了最后一刻取消的订单，因此他们的船只将几乎满员

[Right up front, let’s agree that we do not want to make procedures a prominent aspect of our model.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=3c7ba5ce-83ac-13f8-5c9f-762186e83f9f&page=166&rect=60,587.992,520.483,603.184)

[The first example in this chapter described a shipping system that routed cargo. This routing process wassomething with business meaning. A SERVICE is one way of expressing such a process explicitly, while stillencapsulating the extremely complex algorithms.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=883bd683-66ab-b7b6-a1ad-d9cd13b75e53&page=166&rect=60,479.289,544.434,527.466)

[The key to distinguishing a process that ought to be made explicit from one that should be hidden is simple: Isthis something the domain experts talk about, or is it just part of the mechanism of the computer program?](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c724a974-87d3-cbce-c319-e2210c8cdeb1&page=166&rect=60,370.585,565.644,402.270)

[SPECIFICATION provides a concise way of expressing certain kinds of rules,extricating them from conditional logic and making them explicit in the model.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=bbcfac04-cc66-3e98-5b1e-e469973eaaf1&page=166&rect=60,261.132,536.976,292.817)

[Predicates are functions that evaluate to “true” or “false” and can be combined using operators such as “AND” and “OR” to express more complex rules.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=de517833-290f-3bfb-1789-6e56b5b638c5&page=167&rect=60,435.058,520.844,466.742)
[[predicate]] 谓语 断言

[As appealing as the idea is, full implementation of logic in objects is a major undertaking. (After all, logic programming is a whole modeling and design paradigm in its own right.)](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=6a7ca5fd-2cf9-e526-1e7e-cdb97d0b010d&page=167&rect=60,330.852,538.138,362.537)
in its own right 凭他自己的权利

[To put it another way, the new object is a specification. A SPECIFICATION states a constraint on the state of another object, which may or may not be present. It has multiple uses, but one that conveys the most basic concept is that a SPECIFICATION can test any object to see if it satisfies the specified criteria.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c36c67d2-6d9e-feac-ba53-dd62b664f2e3&page=168&rect=60,651.715,562.178,699.892)
换句话说，新对象是一个规范。规范声明了对另一个对象状态的约束，该对象可能存在也可能不存在。它有多种用途，但其中一个最基本的概念是:SPECIFICATION可以测试任何对象，看它是否满足指定的标准。

[The SPECIFICATION keeps the rule in the domain layer. Because the rule is a full-fledged object, the design can be a more explicit reflection of the model.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=16ecc011-cece-3f67-921d-038776051006&page=168&rect=60,222.899,552.475,254.583)
规范将规则保存在领域层中。因为规则是一个成熟的对象，所以设计可以更明确地反映模型。


[A SPECIFICATION can be given the information it will need to do its job in a simple, straightforward way.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b9b3f1fb-f561-be63-54f6-5dcae02b2a0e&page=168&rect=60,123.941,552.695,155.625)
一个规格可以获得它需要的信息用简单直接的方式完成它的工作

[Relational databases have powerful search capabilities. How can we take advantage of that power to solve this problem efficiently while retaining the model of a SPECIFICATION? MODEL-DRIVEN DESIGN demands that the model stay in lockstep with the implementation, but it allows freedom to choose any implementation that faithfully captures the meaning of the model. Lucky for us, SQL is a very natural way to write SPECIFICATIONS.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=cd2718be-6277-1508-87d2-8500695a1aa2&page=171&rect=60,675.705,565.440,756.868)
	
[SPECIFICATIONS mesh smoothly with REPOSITORIES, which are the building-block mechanisms for providing query access to domain objects and encapsulating the interface to the database](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8c69dd8b-3a20-2138-79fc-fc7991296906&page=171&rect=60,479.289,531.274,510.973)


[The REPOSITORY now has a very specialized query that most likely will be used only in this case. That is acceptable, but depending on the relative numbers of Invoices that are overdue compared to those that are delinquent, an intermediate solution that leaves the REPOSITORY methods more generic may still give goodperformance, while keeping the SPECIFICATION more self-explanatory.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c25c9b7e-bb3f-26fa-ffc0-0e5001eed686&page=172&rect=60,57.969,553.021,122.640)
REPOSITORY现在有一个非常专用的查询，它很可能只在这种情况下使用。这是可以接受的，但是根据过期发票与逾期发票的相对数量，使REPOSITORY方法更通用的中间解决方案仍然可以提供良好的性能，同时使规范更自解释。

[We’ll take a performance hit with this code, because we pull out more Invoices and then have to select fromthem in memory.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=32272af5-41be-3e3d-113f-850a62aaab92&page=173&rect=60,273.127,562.561,304.812)


[Whether this is an acceptable cost for the better factoring of responsibility depends entirelyon circumstances.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=628fa0b4-8543-b11e-2198-2305f0493f03&page=173&rect=60,256.634,556.157,288.319)

[Sometimes, to improve performance, or more likely to tighten security, queries may be implemented on the server as stored procedures. In that case, the SPECIFICATION could carry only the parameters allowed by the stored procedure. For all that, there is no difference in the model between these various implementations. The choice of implementation is free except where specifically constrained by the model. The price comes in a more cumbersome way of writing and maintaining queries.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=74a426f1-7784-bc45-0aaf-cbf335fa77a9&page=173&rect=60,135.936,561.326,217.099)
有时，为了提高性能，或者更可能的是加强安全性，查询可以在服务器上作为存储过程实现。在这种情况下，SPECIFICATION只能携带存储过程允许的参数。尽管如此，这些不同的实现在模型中并没有什么不同。实现的选择是自由的，除非受到模型的特别限制。代价是编写和维护查询的方式更加繁琐。

[The interface is more flexible, or can be enhanced with more flexibility, because the statement of the request is in the hands of the client, while the generator is only obligated to fulfill the letter of the SPECIFICATION.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=0c4b5570-79be-c41e-5b0f-2f0564ea2cdb&page=174&rect=92.236,335.350,549.332,383.528)


[Building to order can mean creation of an object from scratch, but it can also be a configuration of preexisting objects to satisfy the SPEC.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=86452100-cd93-bac3-4af9-3d0d80ab6d44&page=174&rect=60,210.904,516.448,242.588)
按顺序构建可能意味着从头开始创建对象，但也可能是配置已存在的对象以满足SPEC


[A small team ofdevelopers and business experts have split off and have set to work on it, but they haven’t even begun to code](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=a7664cc5-8d9b-9a1d-1496-a88cfd6466c2&page=176&rect=60,93.204,556.828,124.889)
一个由开发人员和业务专家组成的小团队已经分离出来，开始着手这项工作，但他们甚至还没有开始编码

[They are trying to design for the anticipated Packer.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=1564edec-e063-66bf-1992-1a4587fad4f0&page=177&rect=60,796.122,102.169,811.313)

[With the domain objects and SERVICE interface made in the warehouse packer example, the application team realizes they could build a very simple implementation of a Packer that could help the development process move along, allowing work to go forward in parallel and closing the feedback loop, which only reaches full effect with a working end-to-end system.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=69649b40-df27-adde-4a0a-f606fc18794d&page=177&rect=60,692.198,558.813,756.868)
reach full effect
达到完整的效果

[One team has to wait for working code from another in order to move forward. Both teams have to wait for full integration to exercise their components or get feedback from users. This kind of congestion can often be eased by a MODEL-DRIVEN prototype of a key component,even if it does not satisfy all requirements. When implementation is decoupled from interface,then having any working implementation at all allows flexibility for project work to go in parallel. When the time is right, the prototype can be replaced by a more effective implementation. In the meantime, all other parts of the system have something to interact with **during development.**](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8a31abea-b180-3faf-f40e-3069ff9fe23b&page=178&rect=98.983,460.547,534.356,591.189)

为了继续前进，一个团队必须等待另一个团队的工作代码。两个团队都必须等待完全集成才能使用他们的组件或从用户那里获得反馈。这种拥塞通常可以通过关键组件的模型驱动原型来缓解，即使它不能满足所有的需求。当实现与接口解耦时，任何工作实现都允许项目工作并行进行的灵活性。当时机成熟时，原型可以被更有效的实现替代。与此同时，系统的所有其他部分在开发期间都要与之交互。

[They also keep the interface up-to-date with their latest design, forcing refactoring of the application, and some domain objects, thereby tackling the integration problems early.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9ae8eb96-0a04-0287-10bf-ca5f2b0bec8b&page=178&rect=60,334.601,539.527,366.285)

他们还使接口与最新的设计保持同步，迫使应用程序和一些域对象进行重构，从而尽早解决集成问题。

[Here we have an example of a “simplest thing that could possibly work” that actually becomes possible because of a more sophisticated model. We can have a functioning prototype of a very complex component in a couple dozen lines of easily understood code. A less MODEL-DRIVEN approach would be harder to understand,would be harder to upgrade (because the Packer would be more coupled to the rest of the design), and in this case, would likely take longer to prototype.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=e4b53fe9-998c-e061-45a2-4630a7ca97c0&page=178&rect=60,138.185,565.644,219.348)
这里我们有一个“可能工作的最简单的事情”的例子，它实际上成为可能是因为一个更复杂的模型。我们可以在几十行容易理解的代码中拥有一个非常复杂组件的功能原型。较少的模型驱动方法将更难理解，更难升级(因为Packer将与设计的其余部分耦合得更多)，在这种情况下，可能需要更长的时间来创建原型

