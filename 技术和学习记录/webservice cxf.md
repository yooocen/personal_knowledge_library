[webservice接口和http接口（API接口）的区别 - 不死码农 - 博客园](https://www.cnblogs.com/leeego-123/p/10404631.html)

Web Service也叫XML Web Service WebService是一种可以接收从Internet或者Intranet上的其它系统中传递过来的请求，轻量级的独立的通讯技术。是:通过SOAP在Web上提供的软件服务，使用WSDL文件进行说明，并通过UDDI进行注册。

XML：(Extensible Markup Language)扩展型可标记语言。面向短期的临时数据处理、面向万维网络，是Soap的基础。

Soap：(Simple Object Access Protocol)简单对象存取协议。是XML Web Service 的通信协议。当用户通过UDDI找到你的WSDL描述文档后，他通过可以SOAP调用你建立的Web服务中的一个或多个操作。SOAP是XML文档形式的调用方法的规范，它可以支持不同的底层接口，像HTTP(S)或者SMTP。

WSDL：(Web Services Description Language) WSDL 文件是一个 XML 文档，用于说明一组 SOAP 消息以及如何交换这些消息。大多数情况下由软件自动生成和使用。

UDDI (Universal Description, Discovery, and Integration) 是一个主要针对Web服务供应商和使用者的新项目。在用户能够调用Web服务之前，必须确定这个服务内包含哪些商务方法，找到被调用的接口定义，还要在服务端来编制软件，UDDI是一种根据描述文档来引导系统查找相应服务的机制。UDDI利用SOAP消息机制（标准的XML/HTTP）来发布，编辑，浏览以及查找注册信息。它采用XML格式来封装各种不同类型的数据，并且发送到注册中心或者由注册中心来返回需要的数据。

![](https://img2018.cnblogs.com/blog/1593395/201902/1593395-20190222151107310-1422959362.jpg)


CXF是Apache旗下一个重磅的SOA简易框架，它实现了ESB（企业服务总线）。CXF来自于XFire项目，经过改造后形成的，就像目前的Struts2来自WebWork一样。可以看出XFire的命运会和WebWork的命运一样，最终会淡出人们的视线。CXF不但是一个优秀的Web Services / SOAP / WSDL 引擎，也是一个不错的ESB总线，为SOA的实施提供了一种选择方案，当然他不是最好的，它仅仅实现了SOA架构的一部分。  
基于以上的认识，我们可以得知，虽然有了Java6，但是我们还可以选择Axis2、XFire、CXF等。我们不能指望有了Java6 JWS，就能异想天开去实施SOA。如果要与别的语言交互，也许我们还有赖于Axis2等等，当然这不是唯一选择，仅仅是一种可供选择的方案。