---
id: building
title: 编译构建
---

使用CMake工具进行编译构建，如果你不熟悉CMake，可以参考CMake的相关文档。
在正式进行构建之前，确保你的系统已经安装并配置了 CMake 工具、相符版本的 C/C++ 编译器、MPI环境等，
且确保已经正确配置了环境相关变量(例如可能需要设置的 CC、CXX 环境变量)。

## 使用CMake工具编译
我们强烈推荐使用 CMake 外部构建(out-of-source build)方式进行构建：

```bash
cd pnohs-alpha
cmake -B./build -H./
cmake --build ./build -j 4  # build using 4 processors
```

以上步骤正常结束后，你将会在`pnohs-alpha/build/bin` 目录找到编译完成的可执行程序 `pnohs-alpha`。

如果你需要将可执行程序及库安装到特定的目录（如`~/pnohs-alpha-install`目录），可以在构建时加上`-DCMAKE_INSTALL_PREFIX`参数，例如:
```bash
cd pnohs-alpha
cmake -B./build -H./ -DCMAKE_INSTALL_PREFIX=~/pnohs-alpha-install
cmake --build ./build -j 4 --target=install
```

## TODO: 构建选项
