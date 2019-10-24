---
id: run-simulation
title: 水循环模拟
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

使用 pnohs-alpha 的 `run` 这个子命令可以执行水循环模拟。  
## 输入准备
在水循环模拟执行之前，需要准备好以下数据文件：

### `config.toml` 配置文件
配置文件用于程序的运行控制，如模拟起始时间，使用的水文模型，调度算法等。  
以下是其中一个配置文件的示例，关于配置文件的具体可参考 [配置文件](ref-config-file.md) 小节： 
```toml
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

### 任务划分文件
任务划分文件用于指定每个 MPI 进程上的有哪些子流域。  
任务划分文件有json文本格式和二进制两种格式，并行程序读入使用的是二进制格式，但为了方便编辑与自动生成，我们还提供了**json**文本格式，并可实现json格式和二进制格式但相互转换。  

[任务划分文件参考](ref-dispatch-file.md)展示了一个包含4个子流域的任务划分的例子。  

我们使用 **disc** 工具将任务划分工具生成的或者自己手动编写的json格式的任务划分文件（假设文件名为`dispatch.json`）转换为二进制格式：  
```bash
# 在程序源代码根目录执行
vendor/pkg/pnohs/bin/disc j2b -j ./dispatch.json -o dispatch.dis
```
生成二进制任务划分文件后，需要修改 toml 配置文件，通过其中的`dispatch.dispatch_file`项指定该二进制任务划分文件的路径（相对于执行程序的目录）。  
例如:
```toml
...
[dispatch]
dispatch_file = "dispatch.dis"
...
```
更多关于任务划分文件的详细介绍，请参考[任务划分文件参考](ref-dispatch-file.md)。

### 驱动模型运行的输入文件
<Highlight color="#ff7f50">experimental, maybe deprecated</Highlight>

驱动模型运行的输入文件包含各个子流域的配置，模型参数，模型初始值，观测值，降雨、蒸发数据等。
这些文件放置在一个目录里面(例如`module-input`目录)，并在 toml 配置文件中，通过`simulation.input_data_path`项指定。  
例如:
```toml
...
[simulation]
input_data_path = "model_input"
...
```
请参考[模型输入文件](ref-model-input-file.md)，为各个子流域设置对应的模型输入文件。

## 执行循环模拟
上述的数据都准备好了且路径配置无误后，就可以开始执行水循环模拟了：
```bash
cd example # 进入代码根目录下的 example 目录;
mpirun -np 3 ../build/bin/pnohs-alpha run -c config.toml
```
以上示例中，使用了三个 MPI 进程进行并行的水循环模拟，通过`-c`或`--conf`选项指定配置文件的路径。

执行水循环模拟时，还需要注意以下地方：
- 执行水循环模拟时，toml 配置文件中的`simulation.run_mode`项应设置为0。具体可参考[配置文件参考](ref-config-file.md) ；  
- 使用的进程数目需要和任务划分文件的配置相匹配，即任务划分文件指定的划分情况是针对特定个数MPI进程的；
- 如果需要查看输出结果，确认 toml 配置文件中的相关输出选项打开；
- 如果输出选项打开，确认选项`output.path`指定的目录存在。
