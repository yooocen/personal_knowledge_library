# 使用ThreadLocal

tags:: source
## Metadata
- Author: liaoxuefeng.com
- Full Title: 使用ThreadLocal
- Category: #articles
- URL: https://www.liaoxuefeng.com/wiki/1252599548343744/1306581251653666

## Highlights
- 可以把ThreadLocal看成一个全局Map<Thread, Object>：每个线程获取ThreadLocal变量时，总是使用Thread自身作为key
