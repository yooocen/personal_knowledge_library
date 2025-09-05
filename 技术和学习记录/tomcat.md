---
annotation-target: resources/fdocuments.in_how-tomcat-works.pdf
---








>%%
>```annotation-json
>{"created":"2022-01-23T10:29:13.286Z","updated":"2022-01-23T10:29:13.286Z","uri":"vault:/resources/fdocuments.in_how-tomcat-works.pdf","document":{"title":"Introduction","link":[{"href":"urn:x-pdf:298defa3c5c969459b3ef42aedcdfcbe"},{"href":"vault:/resources/fdocuments.in_how-tomcat-works.pdf"}],"documentFingerprint":"298defa3c5c969459b3ef42aedcdfcbe"},"target":[{"source":"vault:/resources/fdocuments.in_how-tomcat-works.pdf","selector":[{"type":"TextPositionSelector","start":131306,"end":131384},{"type":"TextQuoteSelector","exact":"called by the HttpProcessorclass's runmethod after a socket is assigned to it.","prefix":"he HttpProcessorclass, which is ","suffix":" The processmethod does the foll"}]}]}
>```
>%%
>*%%PREFIX%%he HttpProcessorclass, which is%%HIGHLIGHT%% ==called by the HttpProcessorclass's runmethod after a socket is assigned to it.== %%POSTFIX%%The processmethod does the foll*
>%%LINK%%[[#^xt2tbcjac99|show annotation]]
>%%COMMENT%%
>
>%%TAGS%%
>
^xt2tbcjac99


>%%
>```annotation-json
>{"created":"2022-01-23T10:30:49.962Z","updated":"2022-01-23T10:30:49.962Z","uri":"vault:/resources/fdocuments.in_how-tomcat-works.pdf","document":{"title":"Introduction","link":[{"href":"urn:x-pdf:298defa3c5c969459b3ef42aedcdfcbe"},{"href":"vault:/resources/fdocuments.in_how-tomcat-works.pdf"}],"documentFingerprint":"298defa3c5c969459b3ef42aedcdfcbe"},"target":[{"source":"vault:/resources/fdocuments.in_how-tomcat-works.pdf","selector":[{"type":"TextPositionSelector","start":132446,"end":132613},{"type":"TextQuoteSelector","exact":"This is because HttpProcessoris not accessible by the user of the default connector. By putting the buffer size in the Connectorinterface, this allows anyone using the","prefix":"able in the HttpProcessorclass. ","suffix":" connector to set the buffer siz"}]}]}
>```
>%%
>*%%PREFIX%%able in the HttpProcessorclass.%%HIGHLIGHT%% ==This is because HttpProcessoris not accessible by the user of the default connector. By putting the buffer size in the Connectorinterface, this allows anyone using the== %%POSTFIX%%connector to set the buffer siz*
>%%LINK%%[[#^0k9azc4m20ig|show annotation]]
>%%COMMENT%%
>
>%%TAGS%%
>
^0k9azc4m20ig


>%%
>```annotation-json
>{"created":"2022-01-23T10:33:18.439Z","text":"这段代码在HttpProcessor.java的process函数里面","updated":"2022-01-23T10:33:18.439Z","uri":"vault:/resources/fdocuments.in_how-tomcat-works.pdf","document":{"title":"Introduction","link":[{"href":"urn:x-pdf:298defa3c5c969459b3ef42aedcdfcbe"},{"href":"vault:/resources/fdocuments.in_how-tomcat-works.pdf"}],"documentFingerprint":"298defa3c5c969459b3ef42aedcdfcbe"},"target":[{"source":"vault:/resources/fdocuments.in_how-tomcat-works.pdf","selector":[{"type":"TextPositionSelector","start":132647,"end":132677},{"type":"TextQuoteSelector","exact":"SocketInputStream input = null","prefix":"onnector to set the buffer size.","suffix":";OutputStream output = null;// C"}]}]}
>```
>%%
>*%%PREFIX%%onnector to set the buffer size.%%HIGHLIGHT%% ==SocketInputStream input = null== %%POSTFIX%%;OutputStream output = null;// C*
>%%LINK%%[[#^iwz3388vb4|show annotation]]
>%%COMMENT%%
>这段代码在HttpProcessor.java的process函数里面
>%%TAGS%%
>
^iwz3388vb4


>%%
>```annotation-json
>{"created":"2022-01-23T10:37:50.872Z","text":"parseConnection方法获取协议的类型\n","updated":"2022-01-23T10:37:50.872Z","uri":"vault:/resources/fdocuments.in_how-tomcat-works.pdf","document":{"title":"Introduction","link":[{"href":"urn:x-pdf:298defa3c5c969459b3ef42aedcdfcbe"},{"href":"vault:/resources/fdocuments.in_how-tomcat-works.pdf"}],"documentFingerprint":"298defa3c5c969459b3ef42aedcdfcbe"},"target":[{"source":"vault:/resources/fdocuments.in_how-tomcat-works.pdf","selector":[{"type":"TextPositionSelector","start":133969,"end":134028},{"type":"TextQuoteSelector","exact":"The parseConnectionmethod obtains the value of the protocol","prefix":"h(\"HTTP/0\"))parseHeaders(input);","suffix":", which can be HTTP 0.9, HTTP 1."}]}]}
>```
>%%
>*%%PREFIX%%h("HTTP/0"))parseHeaders(input);%%HIGHLIGHT%% ==The parseConnectionmethod obtains the value of the protocol== %%POSTFIX%%, which can be HTTP 0.9, HTTP 1.*
>%%LINK%%[[#^6fgpvi033ja|show annotation]]
>%%COMMENT%%
>parseConnection方法获取协议的类型
>
>%%TAGS%%
>
^6fgpvi033ja
