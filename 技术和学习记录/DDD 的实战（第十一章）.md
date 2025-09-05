---
view-count: 2
---
[Sometimes, though, we can get a leg up.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=371afae9-6ab8-76e1-0a03-d0dde51c0cb0&page=213&rect=249.666,731.931,434.271,747.122)

[Analysis patterns are groups of concepts that represent a common construction in business modeling. It may be relevant to only one domain or it may span many domains.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=8243f5e8-9814-26e1-1219-3aec2573a711&page=213&rect=80.241,498.031,548.947,529.715)


这里提到的是马丁弗勒的一本书《分析模式：可复用的对象模型》
![[Pasted image 20230218215345.png]]

[posting rule.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=32534fb0-18c5-585d-fe6e-eac495663a85&page=213&rect=483.562,336.100,540.724,351.292)
过账规则

利用了马丁书里面介绍的Entry方法将整体模型改造了一下

![[booknote/books-data/resources/(annots)Domain-Driven Design Tackling Complexity in the Heart of Software by Eric Evans (z-lib.org).pdf/p214r51.830,475.010,578.580,687.310z2i(5122b820-9e9b-53a1-30f9-ed6e66453682).png#center|878]]

![[booknote/books-data/resources/(annots)Domain-Driven Design Tackling Complexity in the Heart of Software by Eric Evans (z-lib.org).pdf/p218r50.330,485.970,581.080,828.340z2i(d6cffd93-0d58-0b49-3fd6-280d12ab8b7d).png#center|885]]

[Accounting systems often provide multiple views of the same basic financial information. One accountmight track income while another might track an estimated tax on that income.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=a3a0afa9-196e-c7e9-7378-562441c4ed32&page=218&rect=77.992,156.927,546.698,188.611)

[If the system is expectedto automatically update the estimated tax account, the implementation of those two accounts becomesvery intertwined.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=237b0e8f-ddaf-c6ec-def2-42487935e761&page=218&rect=80.241,123.941,557.519,172.118)

[1. “Eager firing” is the most obvious, but typically the least practical. Whenever an Entry is inserted into an Account, it immediately triggers the Posting Rules and all updates are made immediately.2. “Account-based firing” allows processing to be deferred. At some point, a message is sent to an Account and it triggers its Posting Rules to process all Entries inserted since its last firing.3. Finally, “Posting-Rule-based firing” is initiated by an external agent, which tells the Posting Rule to fire. The Posting Rule is responsible for looking up all Entries made to its input Accounts since the last time it fired.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=bad80c85-5889-a07d-2961-2457954a3aa9&page=219&rect=104.980,386.329,565.765,524.467)

![[booknote/books-data/resources/(annots)Domain-Driven Design Tackling Complexity in the Heart of Software by Eric Evans (z-lib.org).pdf/p221r51.830,326.690,577.590,525.530z2i(8705f66d-ec17-331a-da43-0a9978e796b2).png#center|876]]

![[booknote/books-data/resources/(annots)Domain-Driven Design Tackling Complexity in the Heart of Software by Eric Evans (z-lib.org).pdf/p221r57.310,28.180,566.130,314.730z2i(8973a9b9-6a22-28ec-eecc-755c3536d4fb).png#center|848]]


[The developers departed considerably from the details of the models presented in Analysis Patterns, yet they felt they had preserved the essence of the concepts. They were a little uncomfortable about involving theAsset in the selection of the Posting Rule. They went that way because the Asset had the knowledge of the nature of each Account (fee or interest) and was also the natural access point for the script. To have associated the rule object directly with the Account would have required a collaboration with the Assetobject on each instantiation of the objects (each time the batch was run). Instead, they let the Asset object look up the two relevant rules through their SINGLETON access and pass them the appropriate Account. It seemed to make the code much more direct and so they made a pragmatic decision.](obsidian://booknote?type=annotation&book=resources/Domain-Driven%20Design%20Tackling%20Complexity%20in%20the%20Heart%20of%20Software%20by%20Eric%20Evans%20(z-lib.org).pdf&id=7b57fe06-1080-a290-ab66-86fe573170b3&page=222&rect=60,649.466,559.906,780.108)

