---
id: api-distributed-graph
title: 分布式图
---

我们将子流域及其之间的关系抽象成为一个图，由于并行的时候，各个子流域是被分布到不同计算单元上进行模拟的，
因此这个图是一个分布式的图。对于分布式的图的遍历等操作，本小节介绍与其相关的 API。

***This section is a work in progress.***