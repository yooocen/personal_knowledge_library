
[To compromise in implementation without losing the punch of a MODEL-DRIVEN DESIGN requires a reframing of the basics.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=a9edad7f-8cd0-cb32-026f-b757eaf22102&page=71&rect=60,731.931,533.793,763.615)

代码实现上想妥协，又不想失去DDD的冲击力需要对于基础进行重述

[This discussion will start with the issues of designing and streamlining associations.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=75a162b1-bcc7-1e56-58ae-84576914848e&page=71&rect=60,693.697,437.270,708.888)

本次讨论将从设计的问题和简化的关联开始

[Associations illustrate how crucial detailed implementation decisions are to the viability of a MODEL-DRIVEN DESIGN.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c0722bca-2924-4d56-2e8e-117165e90f2b&page=71&rect=60,660.711,547.471,692.396)
关联阐明了对于DDD的可行性来说，具体(detailed)的实现选择是多么重要

[Turning to the objects themselves, but scrutinizing the relationship between detailed model choices and implementation concerns, we’ll focus on making distinctions among the three patterns of model elements that express the model: ENTITIES, VALUE OBJECTS, and SERVICES.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=23ca896b-aa5a-9cb0-5c7d-2d8aa83d03e7&page=71&rect=60,605.985,554.180,654.162)

虽然是侧重讨论对象，但是我们会持续去探究具体的模型选择和实现考量之间的关系。我们将关注于区分三种表达模型的模式：实体 值对象 服务

[Defining objects that capture concepts of the domain seems very intuitive on the surface, but serious challenges are lurking in the shades of meaning. Particular distinctions have emerged that clarify the meaning of model elements and tie into a body of design practices for carving out specific kinds of objects.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=4ae6eb19-7e87-75a4-cafc-979e7f0f072d&page=71&rect=60,552.008,564.144,600.185)


定义捕获领域概念的对象，表面上看感觉很直观，但是他们含义的后面却有很多严重的挑战。某种区别已经出现，他们的出现说清楚了模型元素的含义，同时结合设计实践来雕刻出具体对象的类别

[They emerge in the domain also, when some activity is modeled that corresponds to something the software must do but does not correspond with the state.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=81eed04b-f2cd-8390-4bbf-f9c5ee9ea0a1&page=71&rect=60,360.090,525.740,391.774)

他们同样也出现在领域之中，当某些活动被建模成为软件中相符的一定要做的某些东西，但是没有和状态相符

[These ideas are conventional, and the modeling and design biases that follow from them have been written about before.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9ef6502b-3990-c0c8-f3e1-ff04dbcfe589&page=71&rect=60,196.660,564.325,228.344)

inclination prejudice
有倾向的偏见

这些想法是很传统的，跟随着这种想法的模型和设计的倾向在前面已经有所讲述



[Very often, deeper understanding leads to a “qualified” relationship.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=4f4fb366-b81a-0b67-cd0d-9f0ddfd83f50&page=72&rect=60,77.461,367.551,92.652)

[Of course, the ultimate simplification is to eliminate an association altogether if it is not essential to the job at hand or the fundamental meaning of the model objects.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8784ad61-79a1-358b-5c27-31914a1fbe9b&page=73&rect=60,422.313,563.191,453.998)

当然，最终版本的简化就是要清理所有对于手上的工作或者模型对象的基本含义无关的关联

[This wouldn’t be true of all business situations (for example, if the lots need to be tracked), but whatever the particular rules, as constraints on associations are discovered, they should be included in the model and implementation.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=3cdc4b0f-7bac-d581-bbd9-163c1dba1711&page=75&rect=60,511.525,556.079,559.702)

这个举例可能并不真实，但是是什么样的特定规则，随着关系上的约束被发现，他们都应该被包含在模型和实现当中

[Carefully distilling and constraining the model’s associations will take you a long way toward a MODEL-DRIVEN DESIGN. Now let’s turn to the objects themselves. Certain distinctions clarify the model while making for more practical implementation. . . .](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=e098922e-ab12-89a7-4e81-40a04bfbfd1d&page=76&rect=60,728.182,535.649,776.360)
make for
细心提炼和约束模型关系能还需要你走很远才能到达DDD。让我们回到对象本身。确定的区别可以在实现更实用的实现的时候思路更加清晰

某些区别使模型更加清晰，同时使其实现更加实际。

像这样一点点地英文看书很慢，但是我觉得是有价值的，我希望完全理解和接受作者的思路，做到感同身受，但是由于我们经验较浅，没有经历过他所经历的挫折，所以不能够对所有的知识感同身受。

[Many objects are not fundamentally defined by their attributes but rather by a thread of continuity and identity.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=1a71058e-ac32-3378-d07b-ea4532b17984&page=76&rect=60,431.309,532.780,462.994)

[The papers I was served described an apartment with holes in the walls, stains on the carpet, and a toxic liquid in the sink that gave off caustic fumes that had made the kitchen wallpaper peel.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9c72a15b-d690-9802-4352-790927687a9d&page=76&rect=60,356.341,558.693,404.519)

地毯上的污渍
水槽上面有毒的液体
腐蚀性的气体
剥落

[In a software system for tracking accounts due, that modest “customer” object may have a more colorful side. It accumulates status by prompt payment or is turned over to a bill-collection agency for failure to pay. It may lead a double life in another system altogether when the sales force extracts customer data into its contact management software. In any case, it is unceremoniously squashed flat to be stored in a database table. When new business stops flowing from that source, the customer object will be retired to an archive, a shadow of its former self.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=76bfc506-af76-44da-4d36-9903dfe4f70f&page=77&rect=60,675.705,562.155,773.361)
account due 到期应收账款
unceremoniously 唐突的
squash 压扁

[A conceptual identity has to be matched between multiple implementations of the objects, their stored forms, and real-world actors such as the phone caller. Attributes may not match. A sales representative may have entered an address update into the contact software, which is just being propagated to accounts due. Two customer contacts may have the same name. In distributed software, multiple users could be entering data from different sources, causing update transactions to propagate through the system to be reconciled in different databases asynchronously.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=cd4c6a9f-c0a3-2316-e5ac-f6b04e4d62ec&page=77&rect=60,501.030,550.470,598.686)


[They represent a thread of identity that runs through time and often across distinct representations.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=1a58a67a-0bd4-5b27-3d00-9908100e09c1&page=77&rect=60,425.312,552.432,456.996)


[An object defined primarily by its identity is called an ENTITY. ENTITIES have special modeling and design considerations. They have life cycles that can radically change their form and content, but a thread of continuity must be maintained. Their identities must be defined so that they can be effectively tracked. Their class definitions, responsibilities, attributes, and associations should revolve around who they are, rather than the particular attributes they carry. Even for ENTITIES that don’t transform so radically or have such complicated life cycles, placing them in the semantic category leads to more lucid models and more robust implementations.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=7768c5d6-c055-775a-13f2-76d7fb182587&page=77&rect=60,252.886,557.512,367.035)



他们的类定义、责任、属性还有关联决定了他们的身份，而不是他们携带的属性

[Deposits and cash withdrawals, which don’t have an identifying number, can be trickier, but the same principle applies: each transaction is an ENTITY, which appears in at least two forms.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=104a3fcb-ffd2-a201-6c0c-7b74e7dcb9d0&page=78&rect=60,631.474,557.966,663.158)

[When an object is distinguished by its identity, rather than its attributes, make this primary to its definition in the model. Keep the class definition simple and focused on life cycle continuity and identity. Define a means of distinguishing each object regardless of its form or history. Be alert to requirements that call for matching objects by attributes. Define an operation that is guaranteed to produce a unique result for each object, possibly by attaching a symbol that is guaranteed unique. This means of identification may come from the outside, or it may be an arbitrary identifier created by and for the system, but it must correspond to the identity distinctions in the model. The model must define what it means to be the same thing.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=7ab46f80-35f0-5845-1743-7816440e896e&page=78&rect=60,402.072,560.396,549.207)

means 方式

[Rather than focusing on the attributes or even the behavior, strip the ENTITY object’s definition down to the most intrinsic characteristics, particularly those that identify it or are commonly used to find or match it.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b560f82f-f8e5-a6aa-30ca-78bc99202416&page=79&rect=60,796.602,301.580,811.794)

脱掉实体对象的定义到它最本质的特性，特别是哪些唯一定义它的或者最普遍的用来发现和匹配它的东西

[Add only behavior that is essential to the concept and attributes that are required by that behavior. Beyond that, look to remove behavior and attributes into other objects associated with the core ENTITY. Some of these will be other ENTITIES. Some will be VALUEOBJECTS, which is the next pattern in this chapter. Beyond identity issues, ENTITIES tend to fulfill their responsibilities by coordinating the operations of objects they own.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=4a2c7db7-712e-633b-398d-efd4c2144959&page=79&rect=60,730.431,552.264,811.794)

[For example, if a Customer has many contact phone numbers for different purposes, then the phone number is not associated with identity and should stay with the Sales Contact.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=18265489-793e-36c7-df09-f95980d918da&page=79&rect=60,609.733,558.406,657.910)

[As mentioned earlier, object-oriented languages have “identity” operations that determine if two references point to the same object by comparing the objects’ locations in memory. This kind of identity tracking is too fragile for our purposes.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=7821e587-18c2-4ec3-3345-7a0ece945416&page=79&rect=60,204.157,559.475,252.334)

[For example, the ID attribute is preserved as the object gets flattened into a database and reconstructed. Sometimes a technical framework helps with this process, but otherwise it just takes engineering discipline.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=21a2455e-9169-14bd-b1e6-baa94259b7b4&page=80&rect=60,659.212,564.144,707.389)

[The goal here is to point out when the considerations arise, so that developers are aware they have a problem to solve and know how to narrow down their concerns to the critical areas. The key is to recognize that identity concerns hinge on specific aspects of the model. Often, the means of identification demand a careful study of the domain, as well.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=66df8cad-31a9-a9a4-c949-3bc3ccc02126&page=80&rect=60,555.756,564.144,620.426)

我们的目的是要指出什么时候需要有这方面的考虑

[When I ship a package through aparcel delivery service, I’m given a tracking number, generated by the shipping company’s software, which Ican use to identify and follow up on my package. When I book airline tickets or reserve a hotel, I’m givenconfirmation numbers that are unique identifiers for the transaction.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c9579204-c50e-9bed-220c-c62afa2ba01a&page=80&rect=60,380.331,548.592,445.001)

[Given all these technical problems, it is easy to lose sight of the underlying conceptual problem: What does it mean for two objects to be the same thing? It is easy enough to stamp each object with an ID, or to write an operation that compares two instances, but if these IDs or operations don’t correspond to some meaningful distinction in the domain, they just confuse matters more. This is why identity-assigning operations often involve human input. Checkbook reconciliation software, for instance, may offer likely matches, but the user is expected to make the final determination.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=7b88d64a-0e27-9370-daaa-b4902f8f6e8d&page=81&rect=60,796.590,260.349,811.782)

其实搞一个唯一的id都很简单，但是这个id没有意义会对系统造成很大的困扰
支票对账系统可以提供一些相似的匹配，但最终做决定的还是用户

[The system has to cope with all that tracking, and many possible performance optimizations are ruled out. Analytical effort is required to define meaningful identities and work out foolproof ways to track objects across distributed systems or in database storage. Equally important, taking on artificial identities is misleading. It muddles the model, forcing all objects into the same mold.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=d725975a-6454-0983-caaa-1fe75138736d&page=81&rect=60,283.623,565.644,348.293)
系统会对追踪疲于奔命，从何使很多可能的性能优化无法进行。还要付出很多分析的精力来定义有意义的标识，找到有用的方式来跨分布式系统或者数据库来追踪对象。同样重要的是，你搞的一些人工的标识可能还会误导你。他们让模型变得浑浊，让他们看起来千篇一律。


[An object that represents a descriptive aspect of the domain with no conceptual identity is called a VALUEOBJECT. VALUE OBJECTS are instantiated to represent elements of the design that we care about only for what they are, not who or which they are.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=4dd2a7ce-5b8a-89ce-e417-97b09c6b92dc&page=81&rect=60,66.216,543.268,114.393)

[A VALUE OBJECT can be an assemblage of other objects. In software for designing house plans, an object could be created for each window style. This “window style” could be incorporated into a “window” object,along with height and width, as well as rules governing how these attributes can be changed and combined.These windows are intricate VALUE OBJECTS made up of other VALUE OBJECTS. They in turn would be incorporated into larger elements of a plan, such as “wall” objects.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c52341a0-e1fc-f195-e0ab-61e6c7afcce6&page=82&rect=60,372.834,551.219,453.998)

[VALUE OBJECTS are often passed as parameters in messages between objects. They are frequently transient,created for an operation and then discarded. VALUE OBJECTS are used as attributes of ENTITIES (and otherVALUES). A person may be modeled as an ENTITY with an identity, but that person’s name is a VALUE.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=208431c1-8634-e358-e54d-d3984178d7f1&page=82&rect=60,247.638,551.515,295.815)

[The attributes that make up a VALUE OBJECT should form a conceptual whole. For example, street, city,and postal code shouldn’t be separate attributes of a Person object. They are part of a single, whole address,which makes a simpler Person, and a more coherent VALUE OBJECT.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=e749fdae-095a-7300-ae6e-ca47e8e8e754&page=82&rect=60,119.443,546.721,167.620)

[The economy of copying versus sharing depends on the implementation environment. Although copies may clog the system with huge numbers of objects, sharing can slow down a distributed system. When a copy is passed between two machines, a single message is sent and the copy lives independently on the receiving machine. But if a single instance is being shared, only a reference is passed, requiring a message back to the object for each interaction.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c0623e31-a1db-e6c2-c661-436efd49b3ab&page=84&rect=60,796.356,181.633,811.548)

拷贝还是分享，哪个更经济实惠呢？取决于实现环境
[It just means that more discipline is needed to maintain the rules that will be only implicit in the implementation. This can be reinforced with naming conventions, selective documentation, and lots of discussion.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=83f47661-050e-88ea-53c0-be52567d343b&page=84&rect=60,576.747,554.195,624.924)

[Defining VALUE OBJECTS and designating them as immutable is a case of following a general rule: Avoiding unnecessary constraints in a model leaves developers free to do purely technical performance tuning. Explicitly defining the essential constraints lets developers tweak the design while keeping safe from changing meaningful behavior. Such design tweaks are often very specific to the technology in use on a particular project.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=a82697f0-bb3d-1c6c-7407-442b8355a083&page=84&rect=60,106.698,563.176,171.369)

[The most you could say is that it points to an object that is equal to the one pointing to it, but you would have to enforce that invariant somewhere.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=abe3b8a3-677b-d970-d60d-7d055d06eb79&page=85&rect=60,452.921,565.440,484.734)

在某个地方强制实施这个固定的规则

[In some cases, the clearest and most pragmatic design includes operations that do not conceptually belong to any object. Rather than force the issue, we can follow the natural contours of the problem space and include SERVICES explicitly in the model.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b7e68470-b1e5-8eca-2bc7-aa443bc01dfe&page=86&rect=60,796.098,216.118,811.290)

强行解决分类的难题

[Some concepts from the domain aren’t natural to model as objects. Forcing the required domain functionality to be the responsibility of an ENTITY or VALUE either distorts the definition of a model-based object or adds meaningless artificial objects.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=2e560642-e82f-a596-9cee-01471d3a70b9&page=86&rect=60,475.540,544.472,523.718)

[A SERVICE can still have an abstract, intentional definition; it just has a different flavor than the definition of an object.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=2773b899-379a-a404-7945-8b55c9eace8b&page=86&rect=60,350.344,557.032,382.028)

[SERVICES should be used judiciously and not allowed to strip the ENTITIES and VALUE OBJECTS of all their behavior. But when an operation is actually an important domain concept, a SERVICE forms a natural part of a MODEL-DRIVEN DESIGN. Declared in the model as a SERVICE, rather than as a phony object that doesn’tactually represent anything, the standalone operation will not mislead anyone.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f033affe-feee-b250-6029-b921976caaa6&page=86&rect=60,229.646,566.028,294.316)

[1. The operation relates to a domain concept that is not a natural part of an ENTITY or VALUEOBJECT.  2. The interface is defined in terms of other elements of the domain model.  3. The operation is stateless.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=ad9acbe0-a61e-d998-2e0b-65ce859249a2&page=86&rect=104.980,129.938,539.919,202.855)

[Statelessness here means that any client can use any instance of a particular SERVICE without regard to the instance’s individual history. The execution of a SERVICE will use information that is accessible globally, and may even change that global information (that is, it may have side effects). But the SERVICE does not hold state of its own that affects its own behavior, as most domain objects do.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=32c85152-d12e-4e69-5a23-8058368b2b40&page=86&rect=60,59.469,556.019,124.139)

[Most SERVICES discussed in the literature are purely technical and belong in the infrastructure layer. Domainand application SERVICES collaborate with these infrastructure SERVICES. For example, a bank might have an application that sends an e-mail to a customer when an account balance falls below a specific threshold. The interface that encapsulates the e-mail system, and perhaps alternate means of notification, is a SERVICE in the infrastructure layer.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=1038f4f0-d5d9-a5f1-000e-f48672257e09&page=87&rect=60,525.019,562.970,606.182)

领域服务 应用服务 基础设施服务


[It can be harder to distinguish application SERVICES from domain SERVICES. The application layer is responsible for ordering the notification. The domain layer is responsible for determining if a threshold was met—though this task probably does not call for a SERVICE, because it would fit the responsibility of an“account” object. That banking application could be responsible for funds transfers. If a SERVICE were devised to make appropriate debits and credits for a funds transfer, that capability would belong in the domain layer.Funds transfer has a meaning in the banking domain language, and it involves fundamental business logic.Technical SERVICES should lack any business meaning at all.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=2a40966d-10ad-1f4d-581f-7989fba31dbc&page=87&rect=60,404.321,563.516,518.470)

指挥通知，使通知有条理

[We might like to create a Funds Transfer object to represent the two entries plus the rules and history around the transfer. But we are still left with calls to SERVICES in the interbank networks. What’s more, in mostdevelopment systems, it is awkward to make a direct interface between a domain object and external resources.We can dress up such external SERVICES with a FACADE that takes inputs in terms of the model, perhapsreturning a Funds Transfer object as its result. But whatever intermediaries we might have, and even though they don’t belong to us, those SERVICES are carrying out the domain responsibility of funds transfer.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f5d594a6-90f5-d4b0-97e4-38add65cc540&page=87&rect=60,92.454,562.464,190.111)
但是我们还是被遗留了一些对服务的调用在跨银行的网络中
interbank 银行之间
用模型作为输入

application 秘书
domain 老板
infrastructure 程序员

[As previously discussed, fine-grained domain objects can contribute to knowledge leaks from the domain into the application layer, where the domain object’s behavior is coordinated. The complexity of a highly detailed interaction ends up being handled in the application layer, allowing domain knowledge to creep into the application or user interface code, where it is lost from the domain layer. The judicious introduction of domain services can help maintain the bright line between layers.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=fd1ef860-7b0a-7e34-69a2-1d884787c46f&page=88&rect=60,369.086,559.475,450.249)

就像之前讨论的那样，细粒度的领域对象会帮助知识从从领域层泄漏到应用层（负责领域对象的行为的协调）。非常细节的交互的复杂性会在应用层处理并结束，这使领域知识悄悄进入了应用或者用户接口代码，而领域层又失去了这些知识。对于领域服务严谨的介绍可以帮助维持层与层之间明白的界限

[Distributed system architectures, such as J2EE and CORBA, provide special publishing mechanisms for SERVICES, with conventions for their use, and they add distribution and access capabilities. But such frameworks are not always in use on a project, and even when they are, they are likely to be overkill when the motivation is just a logical separation of concerns.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b4dadc83-7321-21e3-d79c-74207b54d1d8&page=88&rect=60,216.901,556.828,281.571)

[The means of providing access to a SERVICE is not as important as the design decision to carve off specific responsibilities. A “doer” object may be satisfactory as an implementation of a SERVICE’s interface. A simple SINGLETON (Gamma et al. 1995) can be written easily to provide access. Coding conventions can make it clear that these objects are just delivery mechanisms for SERVICE interfaces and not meaningful domain objects. Elaborate architectures should be used only when there is a real need to distribute the system or otherwise draw on the framework’s capabilities.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=367ff284-2fea-a3ff-39cb-1fe29a24845c&page=88&rect=60,112.696,553.830,210.352)

这意味着提供如何访问服务不如刻画具体的职责的那些设计上的决定来的重要。

编码的约定就清楚地说明了这些对象只是对服务接口的投递机制罢了，并不是有意义的领域对象。精细的架构只有在需要实现分布式架构或者充分使用框架能力的情况下才需要。

[MODULES are an old, established design element. There are technical considerations, but cognitive overload is the primary motivation for modularity. MODULES give people two views of the model: They can look at details within a MODULE without being overwhelmed by the whole, or they can look at relationships between MODULES in views that exclude interior detail.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=703d8181-20dd-fa32-5988-bdb1a1fb9c1a&page=89&rect=60,763.628,560.721,811.805)

[Everyone uses MODULES, but few treat them as a full-fledged part of the model. Code gets broken down into all sorts of categories, from aspects of the technical architecture to developers’ work assignments. Even developers who refactor a lot tend to content themselves with MODULES conceived early in the project.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=efe1eb12-d469-dcbd-2986-9ded56d79442&page=89&rect=60,633.723,559.077,698.393)

每个人都用过模块，但是却很少视他们为模型成熟的一部分。代码被分成各种部分，这种方式不管是技术架构的视角，还是程序员分工的视角，甚至是重构了很多代码的开发人员都倾向于用早期工程规划的模块来满足自己


[MODULES and the smaller elements should coevolve, but typically they do not. MODULES are chosen to organize an early form of the objects. After that, the objects tend to change in ways that keep them within the bounds of the existing MODULE definition. Refactoring MODULES is more work and more disruptive than refactoring classes, and probably can’t be as frequent. But just as model objects tend to start out naive and concrete and then gradually transform to reveal deeper insight, MODULES can become subtle and abstract. Letting the MODULES reflect changing understanding of the domain will also allow more freedom for the objects within them to evolve.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=d4393fdb-1b38-0df2-f0ee-815dae131cbf&page=89&rect=60,196.660,552.475,310.809)

模块和更小的元素应该要共同演进，但是通常他们都没有。

[Looking at conceptual relationships is not an alternative to technical measures. They are different levels of the same issue, and both have to be accomplished. But model-focused thinking produces a deeper solution, rather than an incidental one. And when there has to be a trade-off, it is best to go with the conceptual clarity, even if it means more references between MODULES or occasional ripple effects when changes are made to a MODULE. Developers can handle these problems if they understand the story the model is telling them.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=050dfab5-ec7f-a0ea-985d-317637520852&page=90&rect=60,555.756,564.427,636.919)

观察概念的关系并不能替代技术方案。他们是同一个问题的不同层次。但是集中于思考模型可以生产出一个更深层次的方案，而不是一个草草了事的方案。

[If an individual class really does depend on a specific class in another package, and the local MODULE doesn’t seem to have a conceptual dependency on the other MODULE, then maybe a class should be moved, or the MODULES themselves should be reconsidered.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=1bae0e82-f4a1-dfb5-103c-c986063b83e1&page=91&rect=60,664.460,555.694,712.637)

如果一个单独的类确实需要依赖另一个包中一个特定的类，同事本地的模块有好像没有和另一个模块有概念上的依赖，那么这个类就应该考虑移走，或者这个模块本身就要重新考虑它的合理性

[On the other hand, tiered architectures can fragment the implementation of the model objects. Some frameworks create tiers by spreading the responsibilities of a single domain object across multiple objects and then placing those objects in separate packages. For example, with J2EE a common practice is to place data and data access into an “entity bean” while placing associated business logic into a “session bean.” In addition to the increased implementation complexity of each component, the separation immediately robs an object model of cohesion. One of the most fundamental concepts of objects is to encapsulate data with the logic that operates on that data. This kind of tiered implementation is not fatal, because both components can be viewed as together constituting the implementation of a single model element, but to make matters worse, the entity and session beans are often separated into different packages. At that point, viewing the various objects and mentally fitting them back together as a single conceptual ENTITY is just too much effort. We lose the connection between the model and design. A best practice is to use EJBs at a larger grain than ENTITY objects, reducing the downside of separating tiers. But fine-grain objects are often split into tiers also.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b4b02db4-3c17-73be-9bee-a33546b2c2bb&page=91&rect=60,342.847,565.765,539.461)

[This kind of framework design is attempting to address two legitimate issues. One is the logical division of concerns: One object has responsibility for database access, another for business logic, and so on. Such divisions make it easier to understand the functioning of each tier (on a technical level) and make it easier to switch out layers. The trouble is that the cost to application development is not recognized. This is not a book onframework design, so I won’t go into alternative solutions to that problem, but they do exist. And even ifthere were no options, it would be better to trade off these benefits for a more cohesive domain layer.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c6e068cb-c5b5-4fc1-de7c-34bb88586012&page=92&rect=60,675.705,565.644,773.361)

[The other motivation for these packaging schemes is the distribution of tiers. This could be a strong argument if the code actually got deployed on different servers. Usually it does not. The flexibility is sought just in case it is needed. On a project that hopes to get leverage from MODEL-DRIVEN DESIGN, this sacrifice is too great unless it solves an immediate and pressing problem.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=52c30440-147c-3a16-8750-91d2feb5055f&page=92&rect=60,605.235,565.440,669.905)

这些框架设计是为了解决两个合理的问题：一个是关注点的逻辑划分，另一个是层的分布

[There are other pitfalls where framework design or just conventions of a company or project can undermine MODEL-DRIVEN DESIGN by obscuring the natural cohesion of the domain objects, but the bottom line is the same. The restrictions, or just the large number of required packages, rules out the use of other packaging schemes that are tailored to the needs of the domain model.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=766c39b0-83a4-a999-5b83-b04a605cef88&page=92&rect=60,291.869,565.824,356.539)
这里还有其他的一些隐患，框架的设计或者公司团队的约定可能会颠覆DDD，通过模糊掉领域对象的自然内聚。
这些种种的限制，排除（阻止。。。的发生）了其他的为领域模型量身打造的打包方案

[anemic domain model](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=e162142a-fa86-7cce-2e70-c722f3c02bab&page=91&rect=162.704,68.465,265.558,83.656)
贫血的领域模型

[MODEL-DRIVEN DESIGN calls for an implementation technology in tune with the particular modeling paradigm being applied.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=45c596fb-d41b-222a-47cc-11235d4d9f6d&page=93&rect=60,553.507,535.116,585.191)

DDD要求一个实现的技术和正在使用的特定的建模范例完全一致


[This predominance has come about for a variety of reasons: some factors are intrinsic to objects, some are circumstantial, and others derive from the advantages that come from wide usage itself.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=80c5b52f-9d00-a9ee-b910-d5ba27a8038b&page=93&rect=60,487.535,561.326,535.713)

[object modeling does strike a nice balance of simplicity and sophistication.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8652f902-583c-a829-abbf-2015d86158b8&page=93&rect=132.718,423.063,471.755,438.254)

[If the nontechnical members of the team can’t grasp at least the rudiments of the paradigm, they will not understand the model, and the UBIQUITOUS LANGUAGE will be lost.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=d8708acb-f297-caf6-0054-91b0ec0efc56&page=93&rect=60,368.336,563.516,416.514)


如果团队的非技术成员不能至少抓住这种范式（范例）的基本原理


[Without mature infrastructure and tool support, a project can get sidetracked into technological R&D, delaying and diverting resources away from application development and introducing technical risks.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=542f0591-0bd2-6e3c-06f5-82d981d2b690&page=93&rect=60,210.154,542.612,258.331)

如果没有成熟的基础设施和工具的支持，一个工程会被分散注意力进入技术性的预压开发，延迟和分散开发资源和引入技术风险

[But over the years, many of these problems have been solved for objects, or made irrelevant by widespread adoption.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=854c412d-c2bc-6a9a-2e4c-6dcf97e83660&page=93&rect=60,177.168,556.180,208.853)
但是多年以来，很多问题都被对象解决或者变得无关紧要由于大范围的被采纳

[It may not be feasible to educate developers in a reasonable amount of time because the patterns for making the most of the paradigm and technology haven’t gelled yet. Perhaps the pioneers of the field are effective but haven’t yet published their insights in an accessible form.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b2c9c3a9-450f-d2b1-cb89-99da27bba4b4&page=94&rect=60,763.417,562.076,811.290)

这可能不大可行对于在一个合理的时间下培训开发人员，因为生成大部分范例和技术的模式还没有形成
（As nouns the difference between pattern and paradigm is that pattern is model, example while paradigm is an example serving as a model or pattern; a template.）paradigm指的是那种可以让我们了解以后可以自己举一反三，触类旁通的例子

[Fortunately, we were able to bring onto the team one of a handful of people in the world with the skills to extricate us from the problem.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=31d047b9-d465-31b8-0c58-07f8da2d0a4c&page=94&rect=60,534.015,546.730,565.700)
使我们摆脱困境

[Third, parts of the object model had such a tangle of interdependencies that contention became a problem with a relatively small number of concurrent transactions.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=6d96e9b5-3bc0-8b2d-d279-fd28af067945&page=94&rect=60,468.044,557.928,516.221)


一点争吵都会成为问题

[Sadly, this project eventually retrenched and became quite conservative.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c253aab1-0e04-3162-4606-24cbc1ee7946&page=94&rect=60,326.354,543.275,358.039)


这个项目最终缩减了成本，并且变得非常保守

[To this day they use the exotic technologies, but for cautiously scoped applications that probably don’t really benefit from them.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c0ea5cf4-079e-35ba-7c7b-3c90c1bec673&page=94&rect=60,309.861,560.396,341.546)

exotic 外来的

[A decade later, object-oriented technology is relatively mature. Most common infrastructure needs can be met with off-the-shelf solutions that have been used in the field.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=0a928a67-6dfa-8460-0eab-c29ac812a1a8&page=94&rect=60,271.628,559.442,303.312)

off the shelf 现成的

[Mission-critical tools come from major vendors,often multiple vendors, or from stable open-source projects.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8a5ba8ae-2868-9c01-552f-f86f2d0f94ed&page=94&rect=60,255.135,555.717,286.819)

重要的工具通常来自于主流的供应商，通常是多数的供应商，或者来源于稳定的开源项目

[Traveling with the crowd provides some safety, but it isn’t always the way to go. Object models address a large number of practical software problems, but there are domains that are not natural to model as discrete packets of encapsulated behavior.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=7e81c5b1-fb05-af72-da62-d67929b43db6&page=95&rect=60,746.924,541.026,811.595)


随大流会安全一些，但是不是总要怎么做

[When there are just a few anomalous elements of adomain that otherwise works well in a paradigm, developers can live with a few awkward objects in an otherwise consistent model.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b859a5a1-7f5f-a1fc-8cb2-e3462bb1571b&page=95&rect=60,545.261,555.533,593.438)

[Sticking with MODEL-DRIVEN DESIGN When Mixing Paradigms](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f1577172-3773-0179-29e0-6c1193ea5529&page=95&rect=60,300.865,427.705,316.057)

[Some lack a seamless view that can show the relatedness of model concepts that run between the two implementation environments. One common outcome is an application fractured in two: a static data storage system using objects, and an ad hoc rules processing application that has lost almost all connection with the object model.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=fdbeb87a-6a75-8c12-02bd-08058b070a25&page=95&rect=60,75.212,559.827,139.882)

有些缺少了能够显示运行在两种实现环境中的模型概念的相关性的无缝视图

[Lean on the ubiquitous language. Even when there is no rigorous connection between tools, very consistent use of language can keep parts of the design from diverging.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=fe3258ee-b3f9-2ab4-1c79-4ba4aa846c4e&page=96&rect=92.236,450.051,546.412,481.736)

依赖通用语言，哪怕没有工具之间的严格的连接，语言的十分连贯的使用可以保持部分的设计不会分裂

[Although a MODEL-DRIVEN DESIGN does not have to be object oriented, it does depend on having an expressive implementation of the model constructs, be they objects, rules, or workflows. If the available tooldoes not facilitate that expressiveness, reconsider the choice of tools. An unexpressive implementation negates the advantage of the extra paradigm.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=09fda1e3-cf45-8e8f-bf0f-14005ca3f7ac&page=96&rect=60,545.261,555.898,609.931)
be they = whether
[intimately](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f3116dcd-d78f-fe93-af20-636980c17dc0&page=96&rect=202.437,201.158,249.544,216.349)


[Before taking on the burden of mixed paradigms, the options within the dominant paradigm should be exhausted.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=5fac0097-44e1-b26f-9760-06b14478c2cc&page=96&rect=60,272.377,532.089,304.062)

主流的范式选项应该都被耗尽了
