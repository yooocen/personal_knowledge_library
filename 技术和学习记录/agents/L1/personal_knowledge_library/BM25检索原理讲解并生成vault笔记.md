# BM25 检索原理讲解并生成 vault 笔记

**源文件**: [2026-07-25_16-43-46_2b9bf7ce-c189-405c-8a7d-7d40b5da5251.md](../../L0/personal_knowledge_library/2026-07-25_16-43-46_2b9bf7ce-c189-405c-8a7d-7d40b5da5251.md)

- **会话时间**: 2026-07-25 16:43:46 ~ 16:44:30（2 轮）
- **项目**: personal_knowledge_library
- **运行时**: claudian (glm-5.2)
- ⚠️ Turn 2 转录存在 GBK 编码损坏，下方据上下文重建。

## Turn 1：BM25 检索是什么，详细讲解一下
**BM25** 是基于概率相关模型的全文检索排序函数。
- **核心公式** = IDF × 饱和词频 × 长度归一化
- **参数**：k1（词频饱和，默认 1.2）、b（长度归一，默认 0.75）
- 相比 TF-IDF 增加了**词频饱和**与**长度归一化**，且有理论支撑
- 广泛用于 **Lucene / Elasticsearch / Solr 默认打分**与 RAG 稀疏检索基线
- 局限：词袋、词法匹配、无语义，实际多与稠密向量混合使用

## Turn 2：写一篇文档出来
- 扫描 vault 目录结构、frontmatter 规范（参考 [[第1篇-知识检索]]、[[机器学习]]、[[LLM合集]]）。
- 确认规范：标签平台、tags 列表 frontmatter、H1 标题、数学公式 $...$ / $$...$$、关联笔记 [[wikilink]]。
- 在个人目录生成 [[BM25 检索原理]] 笔记：含 frontmatter（tags: ai/信息检索/rag/全文检索）、9 小节（概念/公式/理论支撑/TF-IDF 对比/参数/局限/Python 示例/可扩展性/总结）、LaTeX 公式、关联笔记 wikilink。

## 学到
- BM25 = Okapi BM25，是 Elasticsearch 默认打分函数。
- k1 控制词频饱和速度（越大越接近线性 TF），b 控制长度归一化强度（0=不归一，1=完全归一）。
- RAG 中常作为稀疏检索基线与稠密向量混合（hybrid retrieval）。

#BM25 #信息检索 #rag #全文检索 #Elasticsearch
