---
id: ref-dispatch-file
title: 任务划分文件参考
---

在 pnohs 中，我们使用**静态任务划分**的方式，即某些子流域被划分到某个进程上之后，其之后到模拟或参数率定过程中，
这些子流域一直位于该进程上，不会动态地迁徙到其他进程。

## 划分文件格式
任务划分文件指定了每一个进程上的子流域id，以及该子流域的上下游关系。  
划分文件为json格式，以下展示了4个子流域被分配到2个进程上到一个示例:
```json
{
    "header": {
        "ranks": 2
    },
    "dispatch": [
        {
            "rank_id": 0,
            "nodes_count": 2,
            "nodes": [
                {
                    "node_id": 378,
                    "upstream": [],
                    "downstream": [
                        {
                            "node_id": 389,
                            "locate": 0
                        }
                    ]
                },
                {
                    "node_id": 389,
                    "upstream": [
                        {
                            "node_id": 378,
                            "locate": 0
                        }
                    ],
                    "downstream": [
                        {
                            "node_id": 383,
                            "locate": 1
                        }
                    ]
                }
            ]
        },
        {
            "rank_id": 1,
            "nodes_count": 2,
            "nodes": [
                {
                    "node_id": 390,
                    "upstream": [],
                    "downstream": [
                        {
                            "node_id": 383,
                            "locate": 1
                        }
                    ]
                },
                {
                    "node_id": 383,
                    "upstream": [
                        {
                            "node_id": 389,
                            "locate": 0
                        },
                        {
                            "node_id": 390,
                            "locate": 1
                        }
                    ],
                    "downstream": []
                }
            ]
        }
    ]
}
```

其中，`header.ranks`指定划分到进程数，`dispatch`数组列出各个进程上到任务划分情况。
对于每一个进程划分，其中的`rank_id`项对应于MPI的rank id，`nodes_count`指定划分的该进程到子流域数目，
`nodes`数组则列出该进程上的每一个节点信息（子流域）以及其上下游。
对于其中一个节点，`node_id`即为节点的 id，或者说是子流域 id，`upstream` 数组列出该子流域的直接上游子流域，
`downstream` 数组则列出该子流域的直接下游子流域。`upstream`和`downstream`中，
除了给出对应直接上游或直接下游子流域的id外，还给出了这些子流域位于哪一个进程上(由`locate`项指定这些子流域所在 MPI 进程的 rand id)。

例如，下面的划分文件中的一个子流域信息中，该子流域id为389，其有两个直接上游子流域，子流域id分别为389和390，且分别位于0号MPI进程和1号MPI进程上；该子流域没有直接的下游子流域。

```json
{
    "node_id": 383,
    "upstream": [
        {
            "node_id": 389,
            "locate": 0
        },
        {
            "node_id": 390,
            "locate": 1
        }
    ],
    "downstream": []
}
```

如果我们将子流域及其汇流关系抽象成为一个有向图。那么，实际上这个图中的节点是分布到各个进程上的。
对于某一个节点，划分文件中的 `upstream` 数组包含且应该全部包含这些节点，从这些节点出发，均有一条有向边达到该节点；
`downstream` 数组包含且应该全部包含这些节点，从该节点出发，均有一条有向边达到这些节点。
由于是分布式图，因此在`upstream`和`downstream`中还应该包含对应节点所在的进程号。

## 二进制任务划分文件
为方便并行程序读取，我们需要将json格式的文本文件转化为二进制文件。  
我们使用 **disc** 工具将json格式的任务划分文件（假设文件名为`dispatch.json`）转换为二进制格式：  
```bash
# 在程序源代码根目录执行
vendor/pkg/pnohs/bin/disc j2b -j ./dispatch.json -o dispatch.dis
```

此外，在toml 配置文件中，可通过`dispatch.dispatch_file`项指定对应的二进制任务划分文件的路径（相对于执行程序的目录）。  
例如:
```toml
...
[dispatch]
dispatch_file = "dispatch.dis"
...
```

我们也可以通过 disc 工具将二进制文件转换为json文本文件，例如：
```bash
vendor/pkg/pnohs/bin/disc b2j -b dispatch.dis -o ./dispatch.json
```

通过 `disc --help` 或 `disc j2b --help` 或 `disc b2j --help` 命令可以查看更多帮助信息。