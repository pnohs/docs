---
id: guide-build-models
title: 构建水文模型
---

***This section is a work in progress.***

## 概览
pnohs 允许开发者自己添加新的模型，并将模型绑定到子流域上，甚至可以为不同到子流域配置不同到水文模型。

在一个子流域上，有三个接口需要关注，分别为 `RunoffAdapter`、`RoutingAdapter`和`ModelContext`。
其中 RunoffAdapter 和 RoutingAdapter 分别为产流模型和汇流模型的接口，可以继承该类并实现其中的纯虚函数以产生新的产/汇流模型；
ModelContext 被定义为子流域上用于连接产流模型与汇流模型的桥梁，负责子流域上的产流模型与汇流模型之间的数据交换与通信。  
此外，模型的参数可以通过继承类`ParamsList`实现，用于存储模型的参数。

我们下面依据 pnohs 框架实现一个自己的水文计算模型。

## 定义模型参数
先对模型对参数进行定义。我们假设模型的有5个参数，名称分别为 A,B,C,D,E，其中A、C参数是整数类型，其他参数为浮点数类型。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="header"
  values={[
    { label: 'ExampleModelParams.h', value: 'header', },
    { label: 'ExampleModelParams.cpp', value: 'cpp', },
  ]
}>
<TabItem value="header">

```cpp {13,15-19}
//
// Created by genshen on 2019/11/04.
//

#ifndef PNOHS_EXAMPLE_MODEL_PARAMS_H
#define PNOHS_EXAMPLE_MODEL_PARAMS_H

#include <ds/params_list.hpp>

#define EXAMPLE_MODEL_PARAMS_SIZE 5
#define EXAMPLE_MODEL_PARAMS_ID 0x100

class ExampleModelParams : public ParamsList<EXAMPLE_MODEL_PARAMS_SIZE, EXAMPLE_MODEL_PARAMS_ID> {
public:
    param_tp_integer &A = data[0].integer_param;
    param_tp_float &B = data[1].float_param;
    param_tp_integer &C = data[2].integer_param;
    param_tp_float &D = data[3].float_param;
    param_tp_float &E = data[4].float_param;

    ExampleModelParams() = default;
};

#endif //PNOHS_EXAMPLE_MODEL_PARAMS_H
```
</TabItem>
<TabItem value="cpp">

```cpp {10-14}
//
// Created by genshen on 2019/11/04.
//

#include "ExampleModelParams.h"

// params keys/names for example model parameter.
template<>
const std::array<param_meta, EXAMPLE_MODEL_PARAMS_SIZE> ExampleModelParams::ParamsList<EXAMPLE_MODEL_PARAMS_SIZE, EXAMPLE_MODEL_PARAMS_ID>::metadata_list = {
        param_meta{param_type::integer_tp, "A", {1}, {0}},
        param_meta{param_type::float_tp, "B", {1.0}, {0.0}},
        param_meta{param_type::integer_tp, "C", {10}, {1}},
        param_meta{param_type::float_tp, "D", {8.0}, {1.0}},
        param_meta{param_type::float_tp, "E", {0.5}, {-0.5}},
};
```

</TabItem>
</Tabs>

在头文件中，我们定义一个新的类 `ExampleModelParams`，该类继承自模版类`ParamsList`，并实例化模版参数。
模版类`ParamsList`有两个模版参数，第一个为模型参数的个数，第二个参数为模型参数列表id，对于不同模型，其对应的模型参数列表id应该唯一。  

在实际的参数存储中，模型的参数是使用一个数组存储的，数组每个元素是一个枚举类型（可表示浮点数、整型或者布尔类型）。  
在头文件中，我们为数组中的元素设定引用别名，使得在模型中可以直接使用引用的名称（如A、B、C等）来访问参数，而非数组下标（data[0]、data[1]等）。  

我们在cpp文件中，我们定义了模型的参数元数据列表（这个列表也是一个数组），用以表示每一个参数的类型、名称、最大值、最小值，
参数的最大最小值可以用于参数率定时期的参数生成。  
其中， `param_meta` 是一个结构，其定义如下，用于指定一个参数的元信息。
```cpp
struct param_meta {
    const param_type type; // type of parameter
    const params_key key; // name or key of parameter
    const param_const max; // maximum value of this parameter
    const param_const min; // minimal value of this parameter
};
```

需要注意的是，模型参数的元数据列表对应的参数，需要和头文件中定义的参数引用别名的顺序相一致。

## 定义模型上下文 (ModelContext)
ModelContext 在子流域上用于连接产流模型与汇流模型的桥梁，负责子流域上的产流模型与汇流模型之间的数据共享。  
定义 ModelContext，需要新建一个类继承自 `ModelContext` 类。

示例：
```cpp
#ifndef EXAMPLE_MODEL_CONTEXT_H
#define EXAMPLE_MODEL_CONTEXT_H

#include <vector>
#include <adapter/model_context.h>

class ExampleModelContext : public ModelContext {
public:
    // shared rain data for routing and runoff model on a sub-bason.
    std::vector<double> rainData;
};
#endif//EXAMPLE_MODEL_CONTEXT_H
```


## 定义模型
定义完了模型参数后，就可以定义模型了。在pnohs中，模型分为产流模型和汇流模型。
产流模型应该继承类 `RouoffAdapter`，汇流模型应该继承 `RoutingAdapter`，并实现相关接口。

以汇流模型为例，新建一个 ExampleModel。

<Tabs
  defaultValue="header"
  values={[
    { label: 'ExampleRoutingModel.h', value: 'header', },
    { label: 'ExampleRoutingModel.cpp', value: 'cpp', },
  ]
}>
<TabItem value="header">

```cpp {13,17,19,21,23,25,27,29,31}
//
// Created by genshen on 2019/11/04.
//

#ifndef PNOHS_EXAMPLE_ROUTING_MODEL_H
#define PNOHS_EXAMPLE_ROUTING_MODEL_H

#include <adapter/routing_adapter.h>
#include <adapter/model_register.h>

class ExampleRoutingModel : public RoutingAdapter, ModelRegister::RoutingInterface {
public:
    static const std::string MODEL_NAME;

    ExampleRoutingModel();

    void onBind(ModelContext *p_model_context, _type_node_id node_id) override;

    const _type_params_count paramCount() override;

    void onParamsPassed(ModelContext *p_model_context, param_const *params, size_t size) override;

    void exec(ModelContext *p_context, unsigned long time_steps) override;

    bool isReusable() override;

    RoutingAdapter *onReused(bool reusable) override;

    static RoutingAdapter *newInstance();
private:
    ExampleModelParams params;
}

#endif //PNOHS_EXAMPLE_ROUTING_MODEL_H
```
</TabItem>
<TabItem value="cpp">

```cpp
//
// Created by genshen on 2019/11/04.
//

#include "ExampleRoutingModel.h"

const std::string ExampleRoutingModel::MODEL_NAME = "example";

ExampleRoutingModel::ExampleRoutingModel() {
    // todo init model
}

void ExampleRoutingModel::onBind(ModelContext *p_model_context, _type_node_id node_id) {
    // todo onBind
}

const _type_params_count ExampleRoutingModel::paramCount() {
    return ExampleModelParams::getParamsSize();
}

void ExampleRoutingModel::onParamsPassed(ModelContext *p_model_context, param_const *_params, size_t size) {
    // todo onParamsPassed
}

void ExampleRoutingModel::exec(ModelContext *p_context, unsigned long time_steps) {
    // todo
}

bool ExampleRoutingModel::isReusable() {
    return true;
}

RoutingAdapter *ExampleRoutingModel::onReused(bool reusable) {
    return this;
}

RoutingAdapter *ExampleRoutingModel::newInstance() {
    return new ExampleRoutingModel();
}
```

</TabItem>
</Tabs>

其中，在定义类 ExampleRoutingModel 的头文件中，声明了一个成员`params`，此即模型的参数对象；
此外，还声明了一些基类的虚函数的声明（将在下面讨论）以及一个 string 类型的成员`MODEL_NAME`的声明以表示模型的名称。  

在cpp文件中，包含成员`MODEL_NAME`的定义和头文件中相关函数的定义，各个函数的具体含义简述如下：
- onBind：当模型和具体的子流域绑定时调用；
- paramCount：返回模型的参数个数；
- onParamsPassed：从外部设置模型的各个参数（如参数率定），这个函数需要实现将外部传递的参数写入到成员`params`中；
- exec：在水循环模拟中，该子流域上的产流或汇流模型被调用时执行，`time_steps`参数为当前时间步数；
- isReusable：设置模型是否可以重用。例如，在参数率定中，会重复调用水循环模拟过程，可以采用这样的策略：
    即如果模拟被设置为不能重用，则一轮率定结束后，各个子流域上的模型对象会被释放，在下一轮率定时重新生成对应的产汇流模型对象；如果可以重用，一轮率定结束后，不释放模型对象，仅重置模型对象中相关的成员值，下一轮率定继续使用该模型对象；
- onReused：当模型对象被重用时的回调，可以在这里重置模型对象中相关的成员值；
- newInstance：这是个静态方法，调用该方法可返回一个该模型的新对象。

定义产流模型也是类似的方式，在此不再赘述。

## 注册模型
至此，已经定义好了一个模型了，最后需要在程序初始化的时候，将模型注册添加到模型库中。
```cpp
#include <adapter/model_register.h>

void my_init_routine(){
    ModelRegister::registerRoutingModel(ExampleRoutingModel::MODEL_NAME, ExampleRoutingModel::newInstance);
}

int main(){
    // some other initialization.
    my_init_routine();
    // some other logic (e.g run simulation).
    return 0;
}
```
其中，`ModelRegister::registerRoutingModel`函数用于这次汇流模型，对于产流模型，
可以使用`ModelRegister::registerRunoffModel`函数进行注册。
