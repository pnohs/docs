---
id: building_pnohs
title: 构建 pnohs
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

pnohs 使用 CMake 工具进行编译构建，如果你不熟悉 CMake，可以参考 CMake 的相关文档:
1. https://cmake.org/documentation
2. https://cliutils.gitlab.io/modern-cmake/chapters/intro/running.html

在正式进行构建之前，确保你的系统已经安装并配置了 CMake 工具、相符版本的 C/C++ 编译器、MPI环境以及依赖库等，
且确保已经正确配置了环境相关变量(例如可能需要设置的 CC、CXX 环境变量)。

## 使用 CMake 工具编译
我们强烈推荐使用 CMake 外部构建(out-of-source build)方式进行构建：

```bash
cd pnohs
cmake -B./cmake-build -S./
cmake --build ./cmake-build -j 4  # build using 4 processors
```

以上步骤正常结束后，你将会在`pnohs/cmake-build/lib` 目录找到编译完成的静态库。

## 安装 pnohs
如果你需要将库安装到特定的目录（如`/path/install/pnohs`目录）以***方便其他程序引入该库***，可以在构建时加上`CMAKE_INSTALL_PREFIX`参数，例如:
```bash
cd pnohs-alpha
cmake -B./cmake-build -H./ -DCMAKE_INSTALL_PREFIX=/path/install/pnohs
cmake --build ./cmake-build -j 4 --target=install
```
在构建时指定 target 为`install` 即可安装库，另外如果你的 CMake 版本是 3.15及以上的，可以在构建完成后通过
`cmake --install cmake-build` 进行安装。

## 构建选项
在 CMake 的配置阶段，可以依据需求指定一些配置，使得可以按照自己需求进行构建。  
pnohs 库提供的构建选项具体如下：

| 选项 | 取值 | 默认值 | 备注 |
| --- | ---- | ----- | ----|
| PNOHS_OpenMP_ENABLE_FLAG     | ON/OFF | OFF | 是否启用 OpenMP (目前该选项未被构建系统使用) |
| PNOHS_MPI_ENABLE_FLAG        | ON/OFF | ON  | 是否启用 MPI, 必须为 ON |
| PNOHS_TEST_BUILD_ENABLE_FLAG | ON/OFF | ON  | 是否构建单元测试        |
| PNOHS_TEST_MPI_ENABLE_FLAG   | ON/OFF | ON  | 若构建单元测试，是否允许单元测试中启用 MPI |
| PNOHS_EXAMPLE_BUILD_ENABLE_FLAG | ON/OFF | ON | <Highlight color="#1877F2">new in v0.4.0</Highlight> 是否构建`examples`目录，其中包含一些 pnohs 代码示例  |
| PNOHS_TOOLS_BUILD_ENABLE_FLAG | ON/OFF | ON | 是否构建 tools 目录，其中包含任务划分文件转换等工具 |

此外，以上相关构建选项均也在 pnohs 源码目录的 `config.cmake` 文件中找到。  

作为示例，假如你不想构建单元测试，可以在 CMake 配置阶段关闭 `PNOHS_TEST_BUILD_ENABLE_FLAG` 选项，例如：
```bash
cd pnohs
cmake -B./cmake-build -H./ -DPNOHS_TEST_BUILD_ENABLE_FLAG=OFF
# other commands
```

:::info 关于 examples 目录的说明
如果构建时启用了 `PNOHS_EXAMPLE_BUILD_ENABLE_FLAG` 选项，则会编译构建 `examples` 目录。
构建完成后，可在构建目录下的 `bin/examples/` 找到对应示例的可执行文件。
:::
