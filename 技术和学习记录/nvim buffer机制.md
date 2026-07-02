没有新建buffer这么一说，打开一个文件就是创建了这个文件的buffer，buffer就是磁盘的内容加载到了内存中

在lazyvim中，直接使用<leader> + b就可以看到所有可以使用的buffer命令

输入
:e 文件名，就会多出一个buffer出来