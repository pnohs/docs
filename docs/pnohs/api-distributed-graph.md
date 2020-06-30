---
id: api-distributed-graph
title: 分布式图
---

我们将子流域及其之间的关系抽象成为一个图，由于并行的时候，各个子流域是被分布到不同计算单元上进行模拟的，
因此这个图是一个分布式的图。对于分布式的图的遍历等操作，本小节介绍与其相关的 API。

## 图的节点查询
为了使用相关图节点查询的 API，需要包含对应的头文件：
```c
#include<graph/graph.h>
```
<!-- 在图相关的api（如图的初始化、图中结点的获取等）均只能是模拟进程进行调用。 -->

### `Graph::getLocalGraphNodesIds`
获取本地子图的结点id。该方法有两种重载形式，分别如下：
```cpp
  void Graph::getLocalGraphNodesIds(_type_node_id *ids)
```
该函数得到该进程上的子图的所有结点id, 结果存在数组`ids`中。

```cpp
  std::vector<_type_node_id> Graph::getLocalGraphNodesIds()
```
和上面类似，只是结点id的结果存储在向量中，而非数组。

### `Graph::globalNodesCount`
 获取各进程上的结点数(MPI communication)。该方法有两种重载形式，分别如下：
```cpp
  void Graph::globalNodesCount(_type_nodes_count *counts)
```
采用**MPI_Allgather**的方式将模拟域(即子空间,下同)的所有进程上的结点收集到所有进程上的数组counts中。  
务必确保数组counts长度至少为模拟域内的进程数。

```cpp
  void Graph::globalNodesCount(_type_nodes_count *counts, kiwi::RID root)
```
采用 **MPI_Gather** 的方式将模拟域的所有进程上的结点收集到root进程的数组counts中。  
务必确保数组counts长度至少为模拟域内的进程数。除root进程外的其他进程的count数组可以为空。

### `Graph::gatherNodesIds`
 获取各进程上的结点id列表(MPI communication)。该方法有两种重载形式，分别如下：
```cpp
  void Graph::gatherNodesIds(_type_node_id *ids, _type_nodes_count *counts)
```
以 **MPI_Allgatherv** 的方式，将模拟域内各个进程内所有结点的id收集到所有进程上的数组ids中,
其中counts指定各个进程上的结点数。 确保数组ids长度至少为模拟域内的全图的结点数。

```cpp
  void Graph::gatherNodesIds(_type_node_id *ids, _type_nodes_count *counts, kiwi::RID root)
```
以 **MPI_Gatherv** 的方式，将模拟域内各个进程内所有结点的id收集到root进程上的数组ids中,
其中counts指定各个进程上的结点数。确保数组ids长度至少为模拟域内的全图的结点数。
除root进程外，其他进程的ids数组和counts数组可以为空。


## 分布式图的遍历：Traversing
遍历过程主要是在全图（指分布在所有进程上的子图的拼接）中，每次返回一个入度为**0**的结点，
返回该结点后，即将该结点以及与该结点相连的边删除（逻辑上的删除）。

这种遍历方式，与参数率定过程中的自上而下率定的思想恰好完全一致。  
需要注意的是，遍历相关的api（如图的初始化、图中结点的获取等）均只能是水循环模拟进程进行调用。  
如果控制进程需要相关数据，目前只能是模拟进程调用api，随后将结果通信发送给控制进程。

为了使用图的遍历，需要包含以下相关的头文件：
```c
#include<graph/graph_traversing.h>
```

### `Traversing::nextNodeId`
获取全图遍历中的下一个结点id(MPI communication)

```cpp
  _type_node_id Traversing::nextNodeId()
```

该方法需要模拟域内所有的进程同时调用，不能是某个进程单独调用。
该方法会优先从缓存中读取下一个结点(减少通信开销)。
该方法是类似于广播方式的，调用后，模拟域内的各个进程均能得到下一个结点的id。

分布式的图全部遍历完成后，继续调用该方法会返回空结点 id。
