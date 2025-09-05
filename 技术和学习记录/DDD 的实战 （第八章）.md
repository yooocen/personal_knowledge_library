[Of course, the real challenge is to actually find an incisive model, one that captures subtle concerns of the domain experts and can drive a practical design.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=b15c9198-2de3-a340-3895-80b05b97ddbb&page=142&rect=60,683.201,539.586,714.886)


[Rather than making elaborate up-front design decisions, developers take code through a continuous series of small, discrete design changes, each leaving existing functionality unchanged while making the design more flexible or easier to understand.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=fe2a9e14-1bef-f2c6-c5b6-a2686fd6712f&page=142&rect=60,417.065,555.474,481.736)、

预期前期做特别完善的设计决定

[But nearly all the literature on how to refactor focuses on mechanical changes to the code that make it easier to read or to enhance at a very detailed level.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=e5f4aa0a-eca1-9bac-2404-5805dda646ae&page=142&rect=60,360.090,563.223,394.023)

但是几乎所有的文字教你怎么重构都是集中精力在代码机制的改变可以怎么样让代码更容易读懂或者在很细节的地方增强它的功能

[refactoring to a deeper model.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=97728227-972d-576b-a997-3272fdc777d4&page=142&rect=263.160,256.634,399.787,271.826)
对于模型的重构

[but we shouldn’t get sidetracked trying to reduce domain modeling to a cookbook or a toolkit.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=0f8611f0-0516-af2b-8f70-1e1c1d5eaa52&page=142&rect=173.949,21.235,564.259,79.908)
sidetrack 偏离主题


[A deep model provides a lucid expression of the primary concerns of the domain experts and their most relevant knowledge while it sloughs off the superficial aspects of the domain.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=ba744abe-094c-05d7-b026-11c1f3af7df1&page=143&rect=60,357.841,541.784,389.525)

[[slough]] off 脱去


[Versatility, simplicity, and explanatory power come from a model that is truly in tune with the domain.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8ab84b31-4002-8bbd-f9b0-3896e9cc3dab&page=143&rect=60,303.114,533.977,318.306)

versatility 多才多艺的 用途广泛的
in tune with 与。。。一致

supple 柔软的

[A well-worn glove becomes supple at the points where the fingers bend, while other parts are stiff and protective.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=2828ebf5-23ae-2b10-fac7-77b9e0e84322&page=143&rect=60,76.711,533.589,108.396)
一个用旧了的手套变得柔软，在手指弯曲的点上，而其他位置还是僵硬和保护性的

[In addition to facilitating change, a supple design contributes to the refinement of the model itself.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=e2cc01dc-ee79-78b8-465c-799712ee5259&page=144&rect=60,774.662,509.238,789.854)

[To create a design really fitted to the problem at hand, you must first have a model that captures the centralrelevant concepts of the domain.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=136be416-36ab-4d45-cbd4-fb6b45b1de97&page=144&rect=60,641.219,549.682,672.904)

[Such patterns are not ready-made solutions, but theyfeed your knowledge crunching process and narrow your search.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=a4f15e06-61a7-3955-d4d0-9e9463f14af2&page=144&rect=60,465.795,553.159,497.479)

[An opportunity opens up to transform your software into something more expressive and versatile than you expected. This can mean new features or it can just mean the replacement of a big chunk of rigid code with a simple, flexible expression of a deeper model.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=2d1caaeb-87b0-fc1f-0281-5e0b9ce99f7b&page=144&rect=60,395.325,565.472,443.502)
这样意味着新功能，或者意味着可以将一大块僵化的代码替代为简单，可伸缩表达的更深层次的模型

[Nonetheless, it provides a good context for thinking about domain refactoring.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=980569b0-8c13-296d-66ba-3dd6acb93706&page=144&rect=60,307.612,557.512,339.297)
尽管如此，它提供了一个很好的上下文来思考领域重构


[They fight entropy, and they are the frontline protection against a fossilized legacy.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=6c85c516-bfaf-e8f5-6184-a1e53d14b8c3&page=145&rect=166.453,477.789,542.973,492.981)
他们对抗熵，还有他们是前线保护对抗这一个已经僵化的遗产


[Slowly but surely, the team assimilates knowledge and crunches it into a model. Deep models can emerge gradually through a sequence of small refactorings, an object at a time: a tweaked association here, a shifted responsibility there.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=5b8488b8-9a68-ad0b-94df-258536d67745&page=145&rect=60,406.570,545.524,454.747)

稳扎稳打地，一个团队理解了知识然后消化进模型

[Versatility and explanatory power suddenly increase even as complexity evaporates.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=0a3646a1-0332-9489-84ea-63e0a0f60d9c&page=145&rect=60,336.100,435.021,351.292)
[[evaporate]]

[syndicated loans](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=556983ac-2100-467a-f364-f26ed5577f4c&page=145&rect=242.169,196.660,316.005,211.851)


[A major example was the creeping understanding that the shares in a Facility were only aguideline to participation in any particular loan draw-down.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=a865fb67-b4e6-1682-b5a8-40124fc8aff0&page=146&rect=60,294.868,522.548,326.552)

[Refinements of this kind allowed us to keep up as the rules of various transactions became clearer. But complexity was increasing, and we did not seem to be converging quickly onto really solid functionality.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=fb991a0c-e65e-2d1d-6459-16aa1c1487ad&page=147&rect=60,462.796,534.727,494.480)
对于这种类型的精炼使得我们可以跟上随着不同事物的规则越变越清晰的脚步。但是复杂度也会提升，同时我们并不会见得很快速地聚合到切实功能去。


[We began to suspect that our difficulties were symptomatic of a basic design problem.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=68440251-7cc8-7fe5-2366-1cac298fe32e&page=147&rect=60,392.326,558.725,424.010)

我们开始怀疑我们的复杂度是不是就是这个基本设计问题的症结
[[symptomatic]]


[Suddenly one week it dawned on us what was wrong.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9c0c6da3-2784-0b0f-6ae5-880d391bf65a&page=147&rect=60,344.347,304.579,359.538)

忽然一个星期，这个问题变得很明朗，我们知道哪里错了

[This revelation had wide repercussions.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=925e3932-471d-e974-cf8a-f26bd3b02f1d&page=147&rect=296.895,327.854,474.753,343.045)

relevant 有关的 切题的 正确的
revelation 揭露 发现
repercussion 反响

[When the drawdown amounts are added to the Loan, the shares of the Loan are no longer proportional to the shares of the Facility.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=948ae963-1078-110c-cb61-a1b2be2e3c0a&page=148&rect=60,441.055,553.649,489.233)

当这个提款被增加到Loan的时候，Loan的股份就不和facility的股份成比例了

[A few tumultuous days later I had sketched a model of shares, drawing on the language used in the discussions with experts and the scenarios we had explored together.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=fdc7a066-2ea8-3673-d0d3-deacb614bb96&page=149&rect=60,118.693,561.146,150.378)

tumultuous 忙碌的

[It freed the Loan’s Shares to depart from the proportions of the Facility’s Shares while keeping in place the valid constraints on totals, fee distributions, and so on.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=c514f0db-b7ab-6f28-b05b-45a53da58623&page=150&rect=60,188.413,562.076,236.591)

[They had deferred to our software knowledge and assumed it was useful to the technical design.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=e5d78efa-d7d7-a673-493b-f7d9804f7a37&page=150&rect=60,117.194,559.906,148.878)

[[defer to]] 听从 尊重

[A Sobering Decision](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=0e193206-5a14-3055-c099-224b5b190bd7&page=151&rect=60,696.696,178.391,711.887)

sober 清醒的

[You might reasonably assume that we would have been elated at this point.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f703b3fe-6794-62ef-ab57-77c7a65233b7&page=151&rect=60,674.205,402.036,689.397)

[The gospel of refactoring is that you always go in small steps, always keeping everything working.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=f9f7dd49-fcb3-99fd-97b8-16503950041a&page=151&rect=60,635.972,503.990,651.163)

[But to refactor our code to this new model would require changing a lot of supporting code, and there would be few, if any, stable stopping points in between.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=cad82f52-32c3-ea1c-fdd1-2777d81486f0&page=151&rect=60,602.986,562.464,651.163)

[We knew the political situation was unstable, so we’d cope if we had to. And we were tired. But, yes, it was a simpler solution that fit the business much better. In the long run it was a lower risk.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=900931b7-6491-5eb7-c01f-d194a22257b9&page=151&rect=92.985,297.117,563.191,328.801)

[The mystifyingly unexpected requirement changes stopped. The rounding logic, though never exactly simple, stabilized and made sense. We delivered version one and the way was clear to version two. My nervous breakdown was narrowly averted.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=9d7fbebf-0751-8708-f480-94b34db9a852&page=151&rect=60,156.927,557.966,205.104)

[Much as we might like it to be otherwise, progress isn’t a smooth ride. The transition to a really deep model is a profound shift in your thinking and demands a major change to the design.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=7be47d3f-f66f-ec27-ed91-6a5515bca115&page=152&rect=60,715.438,563.395,747.122)

[Don’t become paralyzed trying to bring about a breakthrough.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8d3fbb95-8d80-fb87-3097-701d3772c7ad&page=152&rect=60,647.217,345.061,662.408)
不要变成瘫痪，尝试去带来一次改变

[Most of the time is spent making piecemeal improvements, with model insights emerging gradually during each successive refinement.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=0e3fe7bb-bfea-5ccb-7b7c-ea4c8f31a98c&page=152&rect=60,614.231,521.413,645.915)
大部分的时间都是在做一些零碎的提升


[To set the stage for a breakthrough, concentrate on knowledge crunching and cultivating a robust ubiquitous LANGUAGE. Probe for important domain concepts and make them explicit in the model (as discussed in Chapter 9). Refine the design to be suppler (see Chapter 10). Distill the model (see Chapter 15).Push on these more predictable levers, which increase clarity—usually a precursor of breakthroughs.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=d9edc60b-e63d-e4e9-ad21-3d1feba205ce&page=152&rect=60,543.012,554.968,607.682)

[[cultivate]]
[[probe]]



[Don’t hold back from modest improvements, which gradually deepen the model, even if confined within the same general conceptual framework. Don’t be paralyzed by looking too far forward. Just be watchful for the opportunity.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=162a818e-fbcb-3ee4-3af6-243aa387e635&page=152&rect=60,489.035,559.077,537.212)
不用抑制最常规的提升
