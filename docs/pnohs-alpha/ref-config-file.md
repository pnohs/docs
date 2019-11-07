---
id: ref-config-file
title: 配置文件参考
---

## 示例
下面给出了一个配置文件的示例: 
```toml
# This is the configure file for pnohs-alpha.
#
# visite https://github.com/toml-lang/toml
# and https://github.com/toml-lang/toml/blob/master/versions/cn/toml-v0.4.0.md
# to see more information about toml standard.
#

title = "Configure file for pnohs"
version = "0.1.0"

[dispatch]
dispatch_file = "dispatch.dis"

[simulation]
run_mode = 0
# time_steps = 6
max_iter = 20
input_data_path = "model_input"

start_time = "2006-01-01 00:00"
end_time = "2006-01-06 00:00"
time_stride = 24

[scheduler]
pickup_strategy = "ring"

[models]
global_runoff_model = "xaj"
global_routing_model = "mskg"
[models.xinanjiang]
    name = "xaj"
[models.sac]
    name = "sac"
[models.muskingum]
    name = "mskg"
[models.diffusive_wave]
    name = "dswv"

[output]
eval_mode = true
output_tmp = true
result_subbasins = []
path = "outputs"
ext = "dump" 
```

## 配置项
以下逐项说明配置文件中的各个配置项:

### `dispatch.dispatch_file`
- 类型：String，必选
- 说明：二进制格式的任务划分文件路径，相对于程序执行时所在目录；
- 示例："dispatch.dis"
  
### `simulation.run_mode`
- 类型：Integer，必选
- 说明：运行模式，0 为水循环模拟模式，1 为参数率定模式，2 为集合预报模式；

### `simulation.time_steps`
- 类型：Integer
- 说明：水循环模拟的时间步数；

### `simulation.input_data_path`
- 类型：String，必选
- 说明：各个子流域上的驱动模型运行的数据文件所在路径，数据文件参考[模型输入文件](ref-model-input-file.md)小节；
- 示例："model_input"

### `simulation.start_time`
- 类型：DateTime，必选
- 说明：水循环模拟的开始时间；
- 示例：2006-01-01 00:00

### `simulation.end_time`
- 类型：DateTime，必选
- 说明：水循环模拟的结束时间；
- 示例：2006-01-01 00:00

### `simulation.time_stride`
- 类型：Integer，必选
- 说明：水循环模拟的单时间步长；实际上，应有 模拟结束时间 = 模拟开始时间 + 时间步数 x 时间步长；
- 单位：小时(h)
- 示例：24

### `scheduler.pickup_strategy`
- 类型：String，必选
- 说明：并行模拟中的调度策略，可选值为 `ring`(环调度策略)或`longest`(最长汇流队列调度策略)；
- 示例："ring"

### `models.global_runoff_model`
- 类型：String，必选
- 说明：默认的模型产流模型，可用的产流模型可以通过`pnohs-alpha list`命令查看；
- 示例："xaj"

### `models.global_routing_model`
- 类型：String，必选
- 说明：默认的模型汇流模型，可用的汇流模型可以通过`pnohs-alpha list`命令查看；
- 示例："mskg"

### `output.eval_mode`
- 类型：Boolean
- 说明：控制是否输出评价指标的；
- 默认值：false
- 示例：true

### `output.output_tmp`
- 类型：Boolean
- 说明：控制是否输出模型的中间结果；
- 默认值：false
- 示例：false

### `output.result_subbasins`
- 类型：Integer Array
- 说明：控制输出哪些子流域的各个时间步的模拟结果（子流域的流量值）；若为空则输出所有子流域的流量值；
   每一项是一个子流域id，其中子流域id为一个正整数，且各个子流域唯一，用以标示每一个子流域;
- 默认值：[]
- 示例：[1, 2, 6]

### `output.outpu_path`
- 类型：String，必选
- 说明：输出文件存放的目录，该目录下可能会输出子流域结果、评价指标、模型中间结果等文件；请确保该目录已经存在；
- 示例："outputs"
