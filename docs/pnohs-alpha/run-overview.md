---
id: run-overview
title: 概述
---

pnohs-alpha可用的命令如下：
- `pnohs-alpha list`：列出集成进来的水文模型；
- `pnohs-alpha show <model name>`：显示具体的某一个模型的详细信息，如参数名称、类型、范围等；
- `pnohs-alpha run --conf, -c <config file>`：通过配置文件运行并行的水循环模拟或参数率定或集合预报；
- `pnohs-alpha -v, --version`：打印版本信息；
- `pnohs-alpha -h --help`：打印帮助信息；

## `pnohs-alpha --help`
使用 `pnohs-alpha --help` 命令可以看到 pnohs-alpha 的帮助信息:
```bash
./build/bin/pnohs-alpha --help
DESCRIPTION
pnohs: A Parallel Hydrological Simulation application based on pnohs framework.

SYNOPSIS
        pnohs-alpha run --conf <The path of config file> [-r] 
        pnohs-alpha list [-r] 
        pnohs-alpha show <model name> [-r] 
        pnohs-alpha -h [-r] 
        pnohs-alpha -v [-r] 

OPTIONS
        run --conf, -c <The path of config file>
                    run simulation.

        list        list models.
        show <model name>
                    show model detail.

        -h, --help  Show this help message.
        -v, --version
                    Display version.
```

## `pnohs-alpha list`
`list` 子命令可以列出所有的水文模拟名称，如:
```bash
./build/bin/pnohs-alpha list
xaj
wetspa
sac
hims
mskg
dswv
kinetic
```

## `pnohs-alpha show`
`list` 子命令可以列出指定的水文模拟具体信息（当前版本仅显示模型参数信息），如:
```bash
./build/bin/pnohs-alpha show xaj
parameters of model xaj:
key     type    min value   max value
WUM     Float	0	        0
WLM     Float	0	        0
WDM     Float	0	        0
K       Float	1	        0
C       Float	0.2	        0.1
B       Float	0.4	        0.1
IMP	    Float	0.02	    0.01
SM	    Float	50	        10
EX	    Float	1.5	        1
KG	    Float	0	        0
KSS	    Float	0	        0
KI	    Float	1	        0
KKG	    Float	1	        0
KKSS	Float	1	        0
```

## `pnohs-alpha run`
`list` 子命令用于执行水循环模拟（或集合预报或参数率定），需要指定 [toml](https://github.com/toml-lang/toml) 格式的配置文件路径，例如：
```bash
./build/bin/pnohs-alpha run ./config.toml
```
关于配置文件及具体的输入数据，请参考: **TODO**: 链接。