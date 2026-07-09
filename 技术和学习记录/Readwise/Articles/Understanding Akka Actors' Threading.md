---
tags:
  - akka
  - 并发
---
# Understanding Akka Actors' Threading

tags:: source
## Metadata
- Author: stackoverflow.com
- Full Title: Understanding Akka Actors' Threading
- Category: #articles
- URL: https://stackoverflow.com/questions/41803214/understanding-akka-actors-threading

## Highlights
- Generally, Akka Actor is a task able to run on a single thread of a thread pool. It is submitted to the execution when there are messages to process, and leaves the thread when there are no more messages.
