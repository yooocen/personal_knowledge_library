---
tags:
  - vim
---
### 命令模式相关的
- 显示行号 `:set nu`
- 取消行号 `:set nonu`
- 定位到n行 `:set n`
- 关键字搜索 `/{目标字符串}`
	- 区分大小写 `:set noic`
	- 不区分大小写 `set ic`
- 重复命令 `n<command>` 执行command n次


### 输入vimtutor进入30min教程

###  单词或者段落之间跳转
0  行首
^  段首
$  行尾
w 下一个单词开头的字母
e  当前单词结尾的字母
b  当前单词开头的字母
ge 下一个单词结尾的字母

1、移动到下一个单词头部：w
![](https://img-blog.csdnimg.cn/20200911160751850.png)

2、移动到当前单词开头的字母：b
![](https://img-blog.csdnimg.cn/2020091116080436.png)

3、移动到当前单词结尾的字母：e
![](https://img-blog.csdnimg.cn/20200911160827231.png)
      
4、移动到前一个单词尾部：ge
![](https://img-blog.csdnimg.cn/20200911160913464.png)
       

5、向后移动到以空格分隔的字符串头部：W

6、向前移动到以空格分隔的字符串头部：B

7、向后移动到以空格分隔的字符串尾部：E

8、向前移动到以空格分隔的字符串尾部：gE
![](https://img-blog.csdnimg.cn/20200911160946343.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpYW5zaGFvaHVh,size_16,color_FFFFFF,t_70)


gg回到文件的第一行
==num + G 跳转到对应的行==

/ 匹配字符串 n是正向匹配 N是反向匹配
? 反向匹配字符串

%放在`{` `[` `'` 这种符号上面可以跳到这种符号收尾的地方, 使用d%、y%就可以删除或者拷贝这些符号包裹的文本

### 插入相关
i前插    ==I行前插==
a后插   ==A行后插==
o下一行插入  O上一行插入

### 搜索
f+搜索的字母
;找下一个搜索的东西
,找上一个搜索的东西

z=是提示你错误拼写的单词可以替换的单词
]s [s 前一个或者后一个拼写错误

V} 把段尾选中
{} 段首段尾的意思

coc有粘贴板的功能

怎么用nerdTree新建一个文件

thesaurus 这个插件非常好用，写readme英文的时候用来查高级词汇

ctrl + v 选中一些块之后，可以使用I（大写i）来统一前插一些内容

dot command可以用来回放之前做过的一些动作

timeoutlen的具体用法

找到一个好用的技巧
v f ;
可以避免为了圈出一个范围一直e

gi 跳到上一个insert的地方

# vim 大小写转换
ggguG
gggUG

guw
gue
gUw
gUe
gu5e ....

gu0
gU$


# 直接使用cix可以直接改()、''、“”里面的东西

# 如何高效地跳转
不要用hjkl了
使用/ ? # *
如果是数字可以用Ctrl+A
/ 后向搜索 ? 前向搜索
\# 前向搜索光标下的单词
\* 后向搜索光标下的单词

# ideavim解决中英文切换的问题
下载一个插件 ideaVimExtension
使用命令
`:set set keep-english-in-normal-and-restore-in-insert`

