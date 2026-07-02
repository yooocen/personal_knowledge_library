柔性设计的一个高频词是降低开发人员的精神负担，也就是少记一些概念，如果这些概念同属一个东西，那就应该将他们归类到一个地方，等等的一些技巧

这个世界物理上运行得非常有秩序的系统一定有它的内在逻辑，如果你搭建的模型不能满足他所有的运行规则，那么就需要回顾这个模型是否有所欠缺

[This is especially true in a process that emphasizes refactoring.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=23d85042-42e9-2c59-af0a-316550874855&page=179&rect=60,516.023,561.895,547.708)


[When software doesn’t have a clean design, developers dread even looking at the existing mess, much less making a change that could aggravate the tangle or break something through an unforeseen dependency.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=1f93fdaa-6aca-a832-4861-3d97e923ae03&page=179&rect=60,345.846,559.105,394.023)
当软件没有一个干净的设计时，开发人员甚至害怕看到现有的混乱，更不用说做出可能加剧混乱或打破某些东西的更改了

[In any but the smallest systems, this fragility places a ceiling on the richness of behavior it is feasible to build. It stops refactoring and iterative refinement.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=07dd5bb8-6990-7494-2eea-1ce32c94e2dd&page=179&rect=60,329.353,534.907,361.037)
除了最小的系统之外，在任何系统中，这种脆弱性都为其可构建的功能的丰富程度设置了一个天花板。它停止重构和迭代细化。
[[that从句]]
[[从句详解#^83b0df]]
改成 that is feasible to build会更好理解一下

[Supple design is the complement to deep modeling.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=851b0082-0caf-d64b-73fa-4a40a677bd0e&page=179&rect=60,270.128,297.082,285.320)

[Through the iterative cycle, you hammer that material into a useful shape,cultivating a model that simply and clearly captures the key concerns, and shaping a design that allows a client developer to really put that model to work.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=523ca639-43bf-c624-1dce-db261e8a30fc&page=179&rect=60,220.650,559.466,268.827)

[To create elements that can be assembled into elaborate systems and still be understandable, a dedication to MODEL-DRIVEN DESIGN has to be joined with a moderately rigorous design style.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8d304985-068a-8592-209c-ffefb6089dde&page=179&rect=60,83.458,561.724,131.636)

[The same person might well play both roles—even switch back and forth in minutes—but the relationship to the code is different nonetheless.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=5e865c46-045e-7f42-16ec-fb2018cbce0a&page=180&rect=60,779.910,562.093,811.595)

[It must follow the contours of a deep model of the domain, so most changes bend the design at flexible points.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=4c37fec4-3042-9319-b9c2-6f37e1c029af&page=180&rect=60,642.719,556.467,674.403)
这里的意思是只要代码围绕着深度模型的轮廓展开，所有的变换都只是把设计扭到更加灵活的点

# Intention-revealing interfaces

[We are always fighting cognitive overload: If the client developer’s mind is flooded with detail about how a component does its job, his mind isn’t clear to work out the intricacies of the client design.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=70f36674-f8d2-130e-65d0-21780661fe27&page=181&rect=60,609.733,561.326,657.910)我们总是在与认知过载作斗争:如果客户端开发人员的头脑中充斥着组件如何工作的细节，他的头脑就不清楚客户端设计的复杂性


[To obtain the value of explicitly modeling a concept in the form of a class or method, we must give these program elements names that reflect those concepts. The names of classes and methods are great opportunities for improving communication between developers, and for improving the abstraction of the system.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=4330de9b-a62d-d369-042b-30f486855099&page=181&rect=60,418.565,561.146,466.742)
所以说，起名字要起好

[In the public interfaces of the domain: state relationships and rules, but not how they are enforced; describe events and actions, but not how they are carried out; formulate the equation but not the numerical method to solve it. Pose the question, but don’t present the means by which the answer shall be found.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9206ca4a-9358-4bd3-1538-1c397ff74196&page=181&rect=60,146.431,560.974,194.609)

[Entire subdomains can be carved off into separate modules and encapsulated behind INTENTION-REVEALINGINTERFACES. Using such whittling to focus a project and manage the complexity of a large system will be discussed more in Chapter 15, “Distillation,” with COHESIVE MECHANISMS and GENERIC SUBDOMAINS.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f368c5ac-eb9d-d050-faa3-a5ef42fe5c89&page=183&rect=60,402.072,564.869,450.249)

# Side-Effect-Free Functions

[In standard English, the term side effect implies an unintended consequence, but in computer science, it means any effect on the state of the system.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=fb62787a-fc27-7b28-74bf-551216ca91e7&page=183&rect=60,229.646,523.034,261.330)

[As soon as this arbitrarily deep nesting is involved, it becomes very hard to anticipate all the consequences of invoking an operation.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=16b66cbb-2f35-ccd7-5247-eb89c70dd01b&page=183&rect=60,142.683,550.910,174.367)

[The use of the term side effect underlines the inevitability of that interaction.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=1b6538eb-5b00-6ca6-e71b-bf6fe36acb72&page=183&rect=137.965,93.204,491.246,108.396)


[The usefulness of any abstraction of interfaces is limited if the developers are forced to pierce the veil.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=312d4389-c368-6496-c857-a1baa3d25218&page=184&rect=60,763.417,542.585,795.102)

[Obviously, you can’t avoid commands in most software systems, but the problem can be mitigated in two ways.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=acfce943-c847-2013-ff88-068b0754bcb0&page=184&rect=60,621.728,545.981,653.412)
[But by definition, this segregation of side effects into simple command methods only applies to ENTITIES.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=3b4b62d5-f2c5-36a6-a23d-3ac3262a5515&page=184&rect=60,429.810,553.649,461.494)

[The side effectoften can be completely eliminated by deriving a VALUE OBJECT instead of changing existing state, or by moving the entire responsibility into a VALUE OBJECT.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9513c475-e32d-5090-18cb-0e0b1f2f3782&page=184&rect=60,380.331,541.450,428.509)

[Strictly segregate commands (methods that result in modifications to observable state) into very simple operations that do not return domain information. Further control side effects by moving complex logic into VALUE OBJECTS when a concept fitting the responsibility presents itself.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=6f41fffa-7a80-d697-6018-3e0ea7625260&page=184&rect=60,271.628,560.942,336.298)
严格隔离命令（导致对可观测状态修改的方法）到非常简单的不会返回领域信息的操作

# Assertions

[Separating complex computations into SIDE-EFFECT-FREE FUNCTIONS cuts the problem down to size, butthere is still a residue of commands on the ENTITIES that produce side effects, and anyone using them mustunderstand their consequences.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=da8b6815-abf6-247e-d288-a508943f7491&page=187&rect=60,340.598,559.442,388.776)

[We need a way of understanding the meaning of a design element and the consequences of executing anoperation without delving into its internals.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=1eb2dfc5-27b6-7cdc-f17c-744f3de76ad0&page=187&rect=60,90.955,530.735,122.640)

[“design by contract”](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=61b01eeb-9a43-62cb-1eb6-458cf7712372&page=187&rect=393.602,74.462,485.712,89.654)
约定的设计

[Seek models with coherent sets of concepts, which lead a developer to infer theintended ASSERTIONS, accelerating the learning curve and reducing the risk ofcontradictory code.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=5b9a05e8-11e2-9016-ec6a-4ec4b14c81cc&page=188&rect=60,512.275,515.597,560.452)

[Because ASSERTIONS are all in terms of states, rather than procedures, they make tests easyto write.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=6cf2e4c2-29ee-7803-90ba-0a8d35b43df5&page=188&rect=60,441.805,557.657,473.489)
断言都是基于状态的

[Theoretically, any noncontradictory set of assertions would work. But humans don’t just compile predicates in their heads.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=39ab60de-5142-1881-4593-9db6cf10233b&page=188&rect=60,370.585,552.150,402.270)

[While developers were pondering this option, they made a discovery.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=3f07bb8d-33e0-f9f4-c8a2-4c8a32ffdbaf&page=189&rect=105.730,637.471,419.278,652.663)

[So, to make the volume model logically consistent would make it unsuitable for its application requirements.There seems to be a dilemma.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=e01e3a2e-f096-8aa0-0b8a-bf043e4d723e&page=189&rect=60,549.759,558.716,581.443)

[As we search for a better model, we have significant advantages over the original designers, because of the knowledge crunching and refactoring to deeper insight that has happened in the interim.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=2d36530a-1353-0d89-9047-326308492b75&page=189&rect=60,455.299,535.838,486.984)
当我们寻找一个更好的模型时,我们在最初的设计师身上有很大的优势,因为知识的计算和重构是在临时发生的更深层次的洞察

[The next ingredient in recombinable elements is effective decomposition. . . .](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=d4e8d374-6822-a454-fd2c-0ed493f7334b&page=190&rect=60,273.127,411.781,288.319)
可重组元素的下一个成分是有效分解

# Conceptual Contours

[Sometimes people chop functionality fine to allow flexible combination. Sometimes they lump it large to encapsulate complexity.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=4a1b5ee4-7cac-2aee-6d50-85be5b5d7bea&page=190&rect=60,204.906,542.982,236.591)


[When elements of a model or design are embedded in a monolithic construct, their functionality gets duplicated. The external interface doesn’t say everything a client might care about. Their meaning is hard to understand, because different concepts are mixed together.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=42828ba2-0afc-a3a8-b5df-76c3a5bdb976&page=190&rect=60,100.701,555.329,165.371)

[On the other hand, breaking down classes and methods can pointlessly complicate the  client, forcing client objects to understand how tiny pieces fit together.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=11504847-c60d-d6a0-6d71-f41b94c919bf&page=190&rect=60,63.217,556.079,94.901)

[Half of a uranium atom is not uranium. And of course,it isn’t just grain size that counts, but just where the grain runs.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=7f458dfc-3e04-3c9d-8345-25dfe6c521ae&page=191&rect=60,779.910,561.715,811.794)

[But there is rhyme and reason somewhere, or else modeling would be pointless.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=bbcadcf1-25fe-6bcc-43f7-b3218a718df2&page=191&rect=60,708.691,558.268,740.375)

[To avoid slipping into a mechanistic view of them, temper your technical thinking by frequently touching base with your intuition for the domain.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8d17d686-4ccc-b4f5-f8a3-bbfb8c6f6463&page=191&rect=60,550.508,526.776,582.193)
为了避免陷入对它们的机械论观点，你可以通过经常接触你对该领域的直觉来磨练你的技术思维。
[[slipping into]]

[Is this an expedient based on a particular set of relationships in the current model and code, or doesit echo some contour of the underlying domain?](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c3548b0d-ccc4-b877-73fd-b40b99d91c93&page=191&rect=60,517.522,556.648,549.207)

[Clumping things that don’t need to be dissected or rearranged avoids clutter and makes it easier to see the elements that really are meant to recombine.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=bb22c68c-6220-016c-c7ae-1927d4df3d0d&page=191&rect=60,340.598,565.472,388.776)

[Decompose design elements (operations, interfaces, classes, and AGGREGATES) into cohesive units, taking into consideration your intuition of the important divisions in the domain.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c8a5f298-f74e-0dd6-1b3c-4151c5bb5cc5&page=191&rect=60,198.159,545.728,246.337)
将设计元素(操作、接口、类和aggregate)分解为内聚单元，将你对领域中重要划分的直觉考虑进去

[it’s hard to produce up front. But it may never emerge from technically oriented refactoring; it emerges from refactoring toward deeper insight.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=2e316e18-e1ac-e7ec-c8c2-fb02438f4e06&page=191&rect=60,78.211,537.278,109.895)
这很难提前产生。但它可能永远不会出现在面向技术的重构中;它从重构走向更深入的洞察。

[When successive refactoring tends to be localized, not shaking multiple broad concepts of the model, it is an indicator of model fit.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=5289de10-88f7-9768-23b6-06b755e344c7&page=192&rect=60,779.910,538.836,811.524)
当连续的重构趋向于本地化，而不动摇模型的多个广泛概念时，它是模型拟合的一种提示。


[The new model contained only one more object than the old one, yet the partitioning of responsibility had been greatly changed.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b2516318-428c-32e7-a678-9588fc829ea5&page=192&rect=60,132.187,548.523,163.872)
新模型只比旧模型多包含一个对象，但责任的划分却发生了很大的变化。


[Schedules, which had been worked out through case logic in the Calculator classes, were exploded into discrete classes for different types of fees and interest. On the other hand, payments of fees and interest,previously kept separate, were lumped together.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f1d4afb7-8fcc-1575-42f5-1a4e19741162&page=192&rect=60,77.461,539.234,125.638)
在计算器类中通过案例逻辑计算出的时间表，被分解成不同类型的费用和利息的离散类。另一方面，以前分开的费用和利息的支付被合并在一起。


[But had she found aCONCEPTUAL CONTOUR that will help the domain design change and grow as the application and the business evolve? There can be no guarantees about how a design will handle unanticipated change, but shethought it had improved the odds.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b00b0c89-060e-d03d-c96e-5d4f2e9553db&page=193&rect=60,431.309,540.336,495.980)


[As the project proceeded, a requirement emerged for detailed rules for handling early and late payments.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=4c0c8254-cb58-be8d-74b0-8071751f76ff&page=193&rect=60,386.329,531.728,401.520)

[Nor did it come because she made a design so versatile it could accommodate any conceivable change. It happened because in the previous refactoring, the design was aligned with underlying concepts of the domain.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=bb795481-5492-0d33-863a-9d2c93066159&page=194&rect=60,763.417,556.079,811.571)

[INTENTION-REVEALING INTERFACES allow clients to present objects as units of meaning rather than just mechanisms. SIDE-EFFECT-FREE FUNCTIONS and ASSERTIONS make it safe to use those units and make complex combinations. The emergence of CONCEPTUAL CONTOURS stabilizes parts of the model and also makes the units more intuitive to use and combine.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=990a3f0d-861b-6643-7b4a-0a912688a41f&page=194&rect=60,671.956,556.476,736.627)

# Standalone Classes
[And interdependencies pile up easily.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f532ff18-1672-724b-c6c6-04babc46be30&page=194&rect=106.479,566.252,273.843,581.443)

[But even a MODULE can be a lot to think about withoutan almost fanatical commitment to controlling dependencies within it.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8ced132d-1532-1915-5515-9a92f8a20f98&page=194&rect=60,369.836,560.192,401.520)

[In every programming environment, a few basics are so pervasive that they are always in mind.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=e2833723-a0ad-c92c-7a35-926aa04f5612&page=194&rect=60,206.406,488.247,221.597)
编程语言中有些语法是普遍的，人们都知道

[Practically speaking, “integers” don’t add to the intellectual load.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c28313b1-7f56-0e4d-0f77-9c82fbda2853&page=194&rect=60,173.420,353.307,188.611)

[Implicit concepts, recognized or unrecognized, count just as much as explicit references. Although we can generally ignore dependencies on primitive values such as integers and strings, we can’t ignore what theyrepresent.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f8d65633-209b-9af6-f975-18c254f4feda&page=194&rect=60,102.200,538.231,150.378)
你认识string，但是你不一定记得它背后的含义，所以总是要把很多属性封装成一个可以理解的对象

[This scrutiny starts with the factoring of the model concepts themselves. Then it requires attention to each individual association and operation. Model and design choices can chip away at dependencies—often to zero.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8dc056d3-e07b-486e-8e19-b9f8e5f132f5&page=195&rect=60,741.676,555.329,789.854)

[Every such self-contained class significantly eases the burden of understanding a MODULE.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=73a70765-1d08-2212-6f11-56ae0ca85b2c&page=195&rect=60,671.207,554.658,702.891)


# Closure of Operation
[Stripping interfaces down to deal with nothing but primitives can impoverish them.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=62aad7de-69b8-d9b7-0b12-d2ce64bf6183&page=195&rect=101.232,197.410,484.499,212.601)


[Mathematicians are fanatical about not introducing extraneous concepts, and theproperty of closure provides them a way of defining an operation without involving any other concepts.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=6658bae8-def5-cdaa-0ca7-c9f754040016&page=195&rect=60,71.463,535.838,103.148)


[The property of closure tremendously simplifies the interpretation of an operation, and it is easyto think about chaining together or combining closed operations.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=fc01d6da-162d-130a-b9c6-b2a5ae75e8df&page=196&rect=60,746.924,554.658,778.609)

[If the implementer has state that is used in the computation, then the implementer is effectively an argument of the operation, so the argument(s) and return value should be of the same type as the implementer.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=1973b7d5-8b03-5fb0-067f-517b871a13b4&page=196&rect=60,654.714,559.972,702.891)
如果实现者有会在计算中使用到的状态，那么实现者其实就是一个操作中的参数，所以参数和返回值就应该和实现者的类型一致
java中的lambda函数的来源


[you can’t just conjure up a new one to answer a question](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=eaeca1df-b9e6-112c-0cb1-de5e0894d3b2&page=196&rect=202.437,583.494,461.016,598.686)

[The argument matches the implementer, but the return type is different, or thereturn type matches the receiver and the argument is different. These operations are not closed, but they dogive some of the advantages of CLOSURE. When the extra type is a primitive or basic library class, it frees themind almost as much as CLOSURE.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=3729ece8-344e-d57c-09f8-5fe9b92f826b&page=196&rect=60,408.819,555.329,473.489)

[The usefulness of a MODEL-DRIVEN DESIGN is sensitive to the quality of the detailed design and implementation decisions, and it only takes a few confused developers to derail a project from the goal.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c1c6b53e-4355-ea93-c303-f60d48fa9537&page=197&rect=60,600.737,562.221,648.914)


# Declarative Design
[ASSERTIONS can lead to much better designs, even with our relatively informal way of testing them.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f6bdcd2e-37ec-ec1d-e0b1-f7dd905e5846&page=197&rect=60,511.525,520.483,526.717)

[This is tedious and fraught with error, and the bulk of it obscures the meaning of our model. (Some languages are better than others, but all require us to do a lot of grunt work.)](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b7f039a8-bcf5-19c8-5bf6-76f69226d950&page=197&rect=60,412.567,562.221,460.745)

[Generating a running program from a declaration of model properties is a kind of Holy Grail of MODEL-DRIVEN DESIGN, but it does have its pitfalls in practice.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=e81be323-62fc-ad1d-920a-e93c4ad846f8&page=197&rect=60,254.385,542.396,286.070)

[The unintended consequence of many attempts at declarative design is the dumbing-down of the model and application, as developers, trapped by the limitations of the framework, enact design triage in order to get something delivered.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f13e82ec-08ad-cd12-b1de-870b55f1233a&page=197&rect=60,108.947,553.770,157.125)

许多声明式设计尝试的意外结果是模型和应用程序的简化，因为开发人员被框架的限制所困，制定设计分类以获得交付的东西

[This control code introduces side effects, so that the behavior is no longer dictated completely by the declared rules. Adding, removing, or reordering the rules can cause unexpected,incorrect results. Therefore, a logic programmer has to be careful to keep the effect of code obvious, just as anobject programmer does.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=31c84055-3621-e636-4320-6789b2406caf&page=198&rect=60,730.431,562.010,795.102)

[The best ofthese unburden developers of drudge work while leaving them complete freedom to design.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=224527f1-bec7-43d0-b9f9-20fd2c688b4e&page=198&rect=60,621.728,546.435,653.412)

# Domain-Specific Languages

[In this style, client code is written in a programming language tailored to a particular model of a particular domain.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=23f80aee-477e-7eda-0345-4b6748bd247c&page=198&rect=60,557.255,545.199,588.940)


[I’m all in favor of learning advanced technology and design concepts, but we have to soberly assess the skills of a particular team, as well as the likely skills of future maintenance teams. Also, there is value in the seamlessness of an application and a model implemented in the same language.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8b13dbfa-9e4d-f0da-77e0-335ca8b5ac0e&page=198&rect=60,365.338,564.894,413.515)
我非常赞成学习先进的技术和设计理念，但我们必须冷静地评估特定团队的技能，以及未来维护团队可能的技能。同样，应用程序和用同一种语言实现的模型的无缝性也是有价值的。

# Extending SPECFICATION in a Declarative Style

[SPECIFICATION is an adaptation of an established formalism, the predicate. Predicates have other useful properties that we can draw on, selectively.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=6dabb05c-6c91-f8ee-eb8f-ad53e6d2d8b7&page=199&rect=60,590.241,537.687,621.926)

[However, other implementation options are possible that would minimize object count or boost speed, or perhaps be compatible with idiosyncratic technologies present in some project.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=31b2d753-6bcd-86d7-30da-2e7d4d9812f4&page=202&rect=60,763.417,554.513,795.102)

[When you want to test a candidate, you have to interpret this structure, which can be done by popping off each element, then evaluating it or popping off the next as required by an operator. You would end up with this:](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c2df5cf3-b134-4317-1e96-6ea9f90b65fc&page=202&rect=60,147.931,550.099,196.108)

[You have to find an implementation with trade-offs that work for your circumstances. The same pattern and model can underlie very different implementations.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=23692efb-41a0-2b8a-0809-5463d184ebd7&page=203&rect=60,758.169,556.019,789.854)

[But what they asked for was a list of chemicals whose handling has become more stringent. Perhaps there are none in-house right now, or perhaps they just happened to be packed into a more stringent container. In either case, the report just described would not list them.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=e19452ae-0a1f-8707-eefa-edee59860053&page=203&rect=60,498.780,563.509,546.958)

[In most situations it is best to avoid such complexity by making a choice, either forgoing some of the operators or forgoing subsumption.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=18601027-2511-e7da-af4e-2244b8c1585a&page=205&rect=60,698.945,550.933,730.629)

[This might be a point where the granularity is too coarse. The conventional approach would be to break the calculation methods down into subroutines.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c471e602-5e38-c568-74a4-6d257d5c4fb5&page=207&rect=60,77.461,562.645,123.902)

[Model concepts are decoupled; operations entangle a minimum of other types.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b999f216-48d2-c6c7-88ae-6b31e5d46f1e&page=212&rect=92.236,743.176,473.254,758.367)

操作包含最少的其他类型