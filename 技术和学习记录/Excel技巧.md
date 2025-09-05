---
view-count: 1
---
# sumproduct + indirect
[sumproduct+indirect一个公式跨表自动提取汇总多个sheet数据_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1V84y1M7BK/?spm_id_from=333.788.top_right_bar_window_history.content.click&vd_source=399cfa7f8d2185f8a4b72dd3bf6c439a)


```
=SUMPRODUCT(
INDIRECT(B$1&"!$B$2:$F$12"),
(INDIRECT(B$1&"!$B$1:$F$1")=B$1)
*
(INDIRECT(B$1&"!$A$2:$A$12")=$A2)
)
```

在Excel中$表示固定不动，比如B1，固定第一行不动就是B\$1, 固定B列不动就是\$B1

### sumproduct函数
其实就是卷积的意思，给n个序列，他们各自项相乘后相加得到结果，也可以乘以一些逻辑值，比如上面的
`(INDIRECT(B$1&"!$B$1:$F$1")=B$1)*(INDIRECT(B$1&"!$A$2:$A$12")=$A2)`
满足这个条件就×1，不满足就×0

### indirect
有点像前端的eval函数，如果没有双引号就是获得单元格的文本值

# lookup+countif实现去重
[Lookup+Countif方式去重，万能公式高效实现_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1rL411r7yL/?spm_id_from=333.788.top_right_bar_window_history.content.click&vd_source=399cfa7f8d2185f8a4b72dd3bf6c439a)

## 万能公式
`lookup(1,0/(条件),值列)`

## lookup函数

[LOOKUP 函数 - Microsoft 支持](https://support.microsoft.com/zh-cn/office/lookup-%E5%87%BD%E6%95%B0-446d94af-663b-451d-8251-369d5e3864cb)

两种使用方式：向量形式、数组形式
### 向量形式
在单行或者单列区域寻找值
![](https://support.content.office.net/zh-cn/media/dd7d730c-bb4c-4437-bd4d-5bad860dce03.jpg)


![[Pasted image 20230406002056.png]]

## countif函数
COUNTIF 是一个[统计函数](https://support.microsoft.com/zh-cn/office/%E7%BB%9F%E8%AE%A1%E5%87%BD%E6%95%B0-%E5%8F%82%E8%80%83-624dac86-a375-4435-bc25-76d659719ffd)，用于统计满足某个条件的单元格的数量；例如，统计特定城市在客户列表中出现的次数。

[人人都要会的函数之一：COUNTIF函数的两种用法_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1hi4y1P7Fo/?spm_id_from=333.337.search-card.all.click)


[COUNTIF 函数 - Microsoft 支持](https://support.microsoft.com/zh-cn/office/countif-%E5%87%BD%E6%95%B0-e0de10c6-f885-4e71-abb4-1f464816df34)

```
-   =COUNTIF(A2:A5,"London")
    
-   =COUNTIF(A2:A5,A4)
```

