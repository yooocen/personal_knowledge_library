---
tags:
  - 并发
  - java
---
# AtomicReference

tags:: source
## Metadata
- Author: jianshu.com
- Full Title: AtomicReference
- Category: #articles
- URL: https://www.jianshu.com/p/3a1ac578d112?u_atoken=f98c12e9-7e11-4768-b622-12d75ffd439b&u_asession=01VmywXYJTERhktQmJ5DL9XaNfybfGQQFzA8SCXLadbjgQLOlPoc5ny9dj09SqjlfoX0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K9olHDrURmyIskk-h6eMEWOzdjoMV1y19BFQvaXcOyBfmBkFo3NEHBv0PZUm6pbxQU&u_asig=05kTpl17A0roe5q06Aol0_P5ZE-UxhxIy_zgGEWCnxEngX7Bw8fDALFDALs4RrUWQkJ48aJPSSgkutwx8BaZs2Dyy1oSbIxPIxS8Jqt8Qd-XEg7BUy0B_sNV_d0IDoWkt6unJCMFxe0Uyf48r-FVbPv9kwgBtOIR4f7LS__921pZj9JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzTLSW0-oW1bMZdx1CTEu

## Highlights
- AtomicReference类提供了一个可以原子读写的对象引用变量。 原子意味着尝试更改相同AtomicReference的多个线程（例如，使用比较和交换操作）不会使AtomicReference最终达到不一致的状态。
