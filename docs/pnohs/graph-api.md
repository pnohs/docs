---
id: graph-api
title: 图
---

***This section is a work in progress.***

我们将子流域及其之间的关系抽象成为一个有向图，由于并行的时候，各个子流域是被分布到不同计算单元上进行模拟的，
因此这个图是一个分布式的图。在这里，图中的一个节点(node)对应于一个子流域，一条边对应于一组汇流关系(自上游子流域到下游子流域的汇流)。
> In fact, in parallel implementation, the sub-basins are distributed to different computing units,
> which also means the graph above is a distributed graph.  
> In the distributed graph, nodes(sub-basins) are located on different computing units,
> the edges(routing ralationship from upstreams to downstreams) are stored by folloing rules:  
> if there is a direct edge from node **a** to node **b**,
> and node **a** and node **b** are on computing units **p_a** and **p_b** respectively,
> we can call node **a**'s host is  **p_a** and node **b**'s host is  **p_b**.  
> Then a record of node **a** to node **b** as well as node **b**'s host **p_b** is stored on computing unit **p_a**,
> and another record of node **b** from node **a** as well as node **a**'s host **p_a** is stored on computing unit **p_b**.

这里涉及几个重要的类，`StreamMeta`、`Node`、`SimulationNode`、`NodesPool`，相关实现及功能细节请参照对应的头文件及其实现
（或参考由代码注释自动生成的文档），这里仅做简单介绍。

## class `StreamMeta`
类 StreamMeta 用以描述一个节点的元信息，包含节点的 id 与该节点所在进程的 rank id。
```cpp
class StreamMeta {
public:
    // node id in graph.
    _type_node_id id;
    // mpi int type.
    kiwi::RID location;
    StreamMeta() = default;
    StreamMeta(_type_node_id id, kiwi::RID location);
};
```
### member `StreamMeta::id`
- 类型：_type_node_id
- 说明：节点的id，节点的 id 用类型`_type_node_id`表示（实际上是一个无符号的long类型）。

### member `StreamMeta::location`
- 说明：节点所在 MPI 进程的进程号。

### func `StreamMeta(_type_node_id id, kiwi::RID location)`
- 说明：构造函数。

## class `Node`
`Node`类提供类与水文无关的图节点信息，包含节点id，从某些节点出发指向该节点的节点（称为上游节点）元数据列表，
和从该节点出发指向其他节点（称为下游节点）的元数据列表，以及相关的标志信息（如是入度是否为 0 或出度是否为 0）。

### member `Node::id`
- 类型：const _type_node_id
- 说明：节点的id

### member `Node::upstream`
- 类型：class Upstream
- 说明：该节点的上游节点列表

### member `Node::downstream`
- 类型：class Downstream
- 说明：该节点的下游节点列表
  
### func `Node::isRiverOutlet()`
- 返回值：bool
- 说明：如果该节点出度为0，则返回true，否则返回false；

### func `Node::isRiverOrigin()`
- 返回值：bool
- 说明：如果该节点入度为0，则返回true，否则返回false；

### func `Node::notifyDataSetChanged()`
- 返回值：无
- 说明：用于更新该节点的出入度信息。向该节点加入上游节点或者下游节点后，并不会自动更新入度和出度信息，
    即调用函数`isRiverOutlet`或`isRiverOrigin`可能不会返回正确的结果，需要显示地调用该函数以更新节点度信息。

## class `Upstream`
上游节点元数据列表，用来表示节点的所有上游节点。  
实际上，该类中主要包含一个`UpstreamNode`对象数组，数组中的每一个元素存储了一个上游节点的元数据信息和从该上游节点发送到该节点（该节点是这个上游节点的直接下游节点）的数据(详细见: class `UpstreamNode`)。

## class `Downstream`
下游节点元数据列表，用来表示节点的所有下游节点。  
该类中主要包含一个`DownstreamNode`对象数组。

## class `UpstreamNode`
该类继承自类`StreamMeta`，用来表示一个上游节点的元数据信息和从该上游节点发送到其直接下游节点的数据。

## class `DownstreamNode`
该类继承自类`StreamMeta`，用来表示一个下游节点的元数据信息。

## class `SimulationNode`
SimulationNode 类继承自类 Node，除了类 Node的信息外，还提供了节点上与水文相关的信息，
如产汇流模型、model context、当前模拟时间步等。

## class `NodesPool`
NodesPool 类主要包含一个`SimulationNode`对象的列表，用来表示位于当前进程的所有节点(子流域)，
以及各个节点对应的上游节点、下游节点的元数据。