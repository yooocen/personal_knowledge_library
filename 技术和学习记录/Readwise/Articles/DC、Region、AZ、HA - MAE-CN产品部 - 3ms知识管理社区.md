# DC、Region、AZ、HA - MAE-CN产品部 - 3ms知识管理社区

tags:: source
## Metadata
- Author: 3ms.huawei.com
- Full Title: DC、Region、AZ、HA - MAE-CN产品部 - 3ms知识管理社区
- Category: #articles
- URL: http://3ms.huawei.com/hi/group/2031335/wiki_5228399.html

## Highlights
- Region代表一个地理区域，表示覆盖一定面积的物理场所，里面包含多个数据中心，对用户可见。region的设计更多侧重地理位置的概念，天然具备Region间物理隔离的能力。一般可基于业务体验的时延要求等信息设置一个Region。比如，如图 1所示，Region x内有多个DC，能保证覆盖范围内的任意一站点到Region内DC的时延在100ms以内。 同时，为了支撑接入时延的达标，多个DC之间要有足够多的、高速互联的管道，比如上图示意的2ms。如果DC之间要配置灾备保护，建议生产和灾备DC要处于不同地理位置的Region。 AZ，全称是Available Zone，顾名思义就是“可用区域”，对用户可见。可理解为多个DC的集合，或一个DC内部份区域的集合（针对模块化DC场景）。这组集合具有独立的电力供应设备。比如，一个个独立供电的机房、一个个独立供电的机架等都可以被划分成AZ。一个AZ究竟是包含多个DC，还是只是DC内的某些区域，主要看AZ所涉及的应用场景。比如：公有云场景内的AZ，主要是包含多个DC。私有云场景内的AZ（实现某一功能的电信云），主要是包含一个DC内的部份区域。
