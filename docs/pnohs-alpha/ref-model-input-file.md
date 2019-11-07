---
id: ref-model-input-file
title: 模型输入文件参考
---
export const Highlight = ({children, color}) => (
  <p
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </p>
);

<Highlight color="rgb(255, 221, 128)">experimental, maybe deprecated</Highlight>

驱动水文模型运行的输入文件以子流域为单位进行设置，其中包含以下几类文件：
- 各子流域的配置文件(*.conf)
- 各子流域的输入数据(如降水、蒸发等)(*.inp)
- 各子流域的观测数据(*.obser)，如果子流域存在观测数据的话
- 各子流域模型初始值(*.init)
- 各子流域上的模型参数(*.para)

## 子流域配置项
`*.conf`这类文件提供**各个子流域**的相关配置项（其中*表示子流域id，例如文件 10.conf），具体包括:  

| 字段 | 类型 | 单位 |示例 | 说明 | Requieed |
| --- | ---  | ---| --- |  ---| --- |
|runoff_model   | String  | - | "xaj"  | 该子流域使用的产流模型 | No |         
|routting_model | String  | - | "mskg" | 该子流域使用的汇流模型 | No |
|has_obser_data | Integer | - | 0  | 是否有观测数据 | Yes | 
|longitude      | Float   | degree | 113.8463175 | 子流域所在经度 | Yes |
|latitude       | Float   | degree | 33.46513804 | 子流域所在维度 | Yes |
|elev           | Float   | m | 64.32739343 | | Yes |
|area           | Float   | (km)^2 | 536.625 | 子流域面积 | Yes |

## 子流域输入数据
`*.inp`这类文件提供类**各个子流域**在各模拟时间步的输入数据（其中*表示子流域id，例如文件 10.inp），如降水、蒸发等。

| 字段 | 类型 | 单位 |示例 | 说明 | Requieed |
| --- | ---  | ---| --- |  ---| --- |
| TM  | DateTime | -  | 2006-01-01 00:00 | 时间       | Yes |
| I   | Float| mm | 0.0006           | 降水量      | Yes |
| EI  | Float| mm | 0.7223           | 蒸发皿蒸发量 | Yes |

## 子流域观测数据
如果在某个子流域的配置配置项(*.conf文件)中设置了 `has_obser_data` 项的值为`1`，则需要提供对应的观测数据文件。

`*.obser`这类文件提供了**各个有观测数据的子流域**在各个模拟时间步对应时间的观测数据
（*为子流域id，例如文件 10.obser）：

| 字段 | 类型 | 单位 |示例 | 说明 | Requieed |
| --- | ---  | ---| --- |  ---| --- |
| TM | DateTime | - | 2006-01-01 00:00 | 时间 | Yes |
| QR | Float| m^3/s | 4.75  | 径流量 | Yes |

## 子流域模型初始值
`*.init`这类文件提供了**各个子流域**的产流模型和汇流模型的初始参数值（*为子流域id，例如文件 10.init），
文件格式为 map 形式，第一列给出初始参数名(类型: String)，第二列给出其对应的初始参数值(类型: Float)。  
示例：某个子流域的新安江模型与马斯金根模型的初始参数值如下：
```
WU0	    0
WL0	    64.7335
WD0     92.7584
S0	    0
QRS0	0
QRSS0	0
QRG0	0
QR0	    0
```

## 子流域模型参数
`*.para`这类文件提供了需要给定**各个子流域**(用子流域id标识)的产流模型和汇流模型的参数（*为子流域id，例如文件 10.para），
文件格式为 map 形式，第一列给出模型参数名(类型: String)，第二列给出对应的模型参数值(类型: Float)。  
模型的参数名称及其取值范围可以通过命令`pnohs-alpha show [model_name]`，详细请参照[相关命令参考](run-overview.md)。  
示例：某个子流域的新安江模型与马斯金根模型的模型参数值如下：
```
WUM	    23.683
WLM	    80.9169
WDM	    92.7584
K	    1
C	    0.1
B	    0.25
IMP	    0.01
SM	    5.49
EX	    1.2
KG	    0.8625
KSS	    0.3998
KI	    0.5
KKG	    0.95
KKSS    0.8
KE	    24
XE	    0.40075
LT      1
```
