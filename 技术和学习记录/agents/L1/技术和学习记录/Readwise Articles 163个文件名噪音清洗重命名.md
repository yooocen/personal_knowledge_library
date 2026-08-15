# Readwise Articles 163 个文件名噪音清洗重命名

**源文件**: [2026-07-26_18-42-47_88aa7adc-7418-4af4-8e7b-3d2ab65ed97e.md](../../L0/技术和学习记录/2026-07-26_18-42-47_88aa7adc-7418-4af4-8e7b-3d2ab65ed97e.md)

- **会话时间**: 2026-07-26 18:42:47
- **项目**: 技术和学习记录
- **运行时**: claudian (glm-5.2) / OpenCode

## 用户诉求
> Readwise/Articles 里面的文章标题乱七八糟的，帮我摘要一下，重命名得简要一点

## 关键操作
- 扫描 `Readwise\Articles`，291 个文件，标题夹大量 Readwise 抓取噪音。
- 策略：只剥离噪音、保留标题本质，不改动文章内容含义。
- 用 PowerShell 脚本（**UTF-8 BOM**，解决 PS 5.1 中文编码问题）做预览→修正边界→执行重命名。
- 预览 v2：163 个待重命名，0 最终冲突。确认全 291 文件 git 跟踪（可回退）后执行。
- **执行结果：成功 163，失败 0，重命名后文件数 291。残留噪音扫描 0。重复副本 9 个统一标记为 ` (2)`。**

## 剥离的噪音类型
- 前缀 `(12条消息)`、`(68 封私信 81 条消息)` 等 Readwise/CSDN 计数标记
- `_作者名-CSDN博客_关键词`、` - Csdn博客`、` - CSDN`（含作者名含"的"/无"的博客"的残留兜底，用"首个下划线截断"）
- ` - 知乎`、` - 博客园`、` - 掘金`、` - 少数派`、` - 阮一峰的网络日志`
- ` - 腾讯云开发者社区-腾讯云`、`-阿里云开发者社区`、`-3ms知识管理社区`、` - TeqNG`、` - ShuSheng007`、`-51CTO.COM`、`-GeeksforGeeks`、`-Code With Jason`
- ` - 入门小站`、` - 亿速云`、` - 王路的博客`、` - IT Blog`、` - Blog - Ponicode`、`-华为内源技术社区-OpenX`、` Server 运维论坛`
- 维基百科/百度百科 尾巴简化为 ` - 维基百科`/` - 百度百科`
- Readwise 副本标记 ` 2`/`-2` 统一为 ` (2)` 后缀

## 重复副本（9 对，内容相同）
保留原版为 base，副本加 ` (2)`：Apache CXF、Jakarta EE、Maven profile、Spring @Conditional、Spring @ControllerAdvice、Vim shiftwidth、Smart UI Anti-Pattern、AQS、微服务网关。

## 少量手动改写
- `6.828 Fall 2017` → `MIT 6.828 操作系统课程 (Fall 2017)`
- mangled URL → `The Gift of the Magi - English Forums`
- `DC、Region、AZ、HA - MAE-CN产品部 - 3ms...` → `DC、Region、AZ、HA`

## 关键经验
- **PowerShell 5.1 处理中文脚本必须加 BOM（U+FEFF）**，否则按 GBK 解析中文字符串损坏。
- 冲突仲裁：按原文件名长度升序，短的留 base，长的加 ` (2)`。
- "首个下划线截断兜底"基于当前数据集标题不含下划线的归纳，复用时需复核。

## 行动项
1. **去重 9 对重复副本**：` (2)` 标记的 9 篇与原版内容相同，可人工核对后删除副本进一步瘦身。
2. **个别语义待定标题**：`东莞松山湖生态园合并.md`、`如果你也得了一个b.md`、`Readwise Chrome - 搜索.md` 等疑似误抓，建议人工确认。
3. **后续 Readwise 同步防护**：若开启自动同步，下次可能再生成带噪音标题。建议关闭"自动更新标题"，或定期重跑脚本（可固化到 vault 内 scripts 目录复用）。

## 回退
全部 291 个文件均被 git 跟踪，重命名可通过 `git checkout`/`git restore` 回退。仅文件名变更，正文与 frontmatter 未触碰。

#readwise #文件重命名 #清洗 #PowerShell #UTF8-BOM
