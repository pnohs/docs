---
id: ref-config-file
title: 配置文件参考
---

## 示例
下面给出了一个配置文件的示例
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
