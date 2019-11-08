---
id: core-api
title: 水循环模拟 API
---

***This section is a work in progress.***

## 子流域加载 API

示例：
```cpp
NodesPool *nPool = new NodesPool();
SimulationNode snode(0);
snode.upstream.putUpMetaStream(StreamMeta{2, 1});
snode.upstream.putUpMetaStream(StreamMeta{3, 1});
snode.downstream.putDownMetaStream(StreamMeta{1, 0});

snode.notifyDataSetChanged();
nPool->appendNode(snode);
```

## 模型加载 API

示例，给所有的子流域设置模型：
```cpp
pool->forEachNode(
    [p_config](SimulationNode &snode) -> bool {
        ModelContext model_context = new ExampleModelContext();
        snode.setModelContext(modelContext);
        RunoffAdapter *exampleRunoff = new ExampleRunoffModel();
        RoutingAdapter *exampleRouting =  new ExampleRoutingModel();
        snode.setModels(exampleRunoff, exampleRouting);
    }
```

## 水循环模拟 API

示例，执行水循环模拟：
```cpp
while (scheduler->select()) {
    schCtx->curNode->beforeStep();
    schCtx->curNode->runoff();
    schCtx->curNode->routing();
    schCtx->pNodesPool->deliver(*(schCtx->curNode));  // deliver simulation results.
    schCtx->curNode->postStep();
    scheduler->postStep(); // update simulation variable after finishing a step of simulation.
}
```