# Java NIO——Reactor模式

tags:: source
## Metadata
- Author: jianshu.com
- Full Title: Java NIO——Reactor模式
- Category: #articles
- URL: https://www.jianshu.com/p/2759a2374ed4?u_atoken=989d7e13-88b0-4d31-b651-a3095ed2949a&u_asession=015UCS3DEtB3H-o3ixxPBeMHw0dst4gNGajRoEBy5JLNv1Jopnkbi7W4d1edtSsiNcX0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K8-DMQq8gzbxzl61PCaIJzOh4gB_rorF7cG9vr14abfLGBkFo3NEHBv0PZUm6pbxQU&u_asig=05g5fiDRmk0XVWHlOyz_DbmB4wzm-4KNo1574I-TZqG__Mtmr8AjqnOlCOi9A96SRMhU4Qc5ywKH5jyAGPNLjw2QTNPggL3OpyamqmFyEPol2NXUxtOkzmfId8durS4bLOdrxjAbJ9kG6YQ1nxM5QPZXOGLeuN8yQ3lbQ1TeT5LOL9JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzfA0y7DOhxDRdvkXsk6v

## Highlights
- 这是最简单的单Reactor单线程模型。Reactor线程是个多面手，负责多路分离套接字，Accept新连接，并分派请求到Handler处理器中。
