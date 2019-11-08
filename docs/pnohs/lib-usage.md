---
id: lib-usage
title: 在项目中使用 pnohs
---

假设 pnohs 安装在 `/path/install/pnohs/`目录下；
在 pnohs 的源码目录下(假设为 `/path/of/src/pnohs`目录)，
在该目录下可以找到之前使用 [pkg](https://github.com/genshen/pkg) 工具安装的各个依赖包，包括:
- [agrs](https://github.com/Taywee/args) 位于 `/path/of/src/pnohs/vendor/include`下；
- [nlohmann json](https://github.com/nlohmann/json) 位于 `/path/of/src/pnohs/vendor/include`下；
- [fmt](https://github.com/fmtlib/fmt) 位于 `/path/of/src/pnohs/vendor/pkg/fmt`下；
- [googletest](https://github.com/google/googletest) 位于`/path/of/src/pnohs/vendor/pkg/googletest`下；
- [kiwi](https://git.hpcer.dev/genshen/kiwi) 位于`/path/of/src/pnohs/vendor/pkg/kiwi`下；

这些安装位置对于使用 Makefile 或者 CMake 构建工具来说是有用的。  
这里提供了在项目中使用该库的三种方式：通过 Makefile 使用该库，通过 CMake 使用该库以及通过pkg包管理器+CMake使用该库，分别如下。

## Makefile
```makefile
CXX_FLAGS=-I/path/install/pnohs/include \
    -I/path/of/src/pnohs/vendor/include \
    -I/path/of/src/pnohs/vendor/pkg/fmt/include \
    -I/path/of/src/pnohs/vendor/pkg/googletest/include \
    -I/path/of/src/pnohs/vendor/pkg/kiwi/include \
    -L/path/install/pnohs/lib \
    -L/path/of/src/pnohs/vendor/pkg/fmt/lib \
    -L/path/of/src/pnohs/vendor/pkg/fmt/lib64 \
    -L/path/of/src/pnohs/vendor/pkg/googletest/lib \
    -L/path/of/src/pnohs/vendor/pkg/kiwi/lib
main: main.cpp
    mpicxx $(CXX_FLAGS) main.cpp -o main
```

## CMake
```cmake
project(myProject)

set(CMAKE_CXX_STANDARD 11)

include_directories(/path/of/src/pnohs/vendor/include)
find_package(pnohs PATHS /path/vendor/pnohs)
find_package(googletest PATHS /path/of/src/pnohs/vendor/pkg/googletest)
find_package(fmt PATHS /path/of/src/pnohs/vendor/pkg/fmt)
find_package(kiwi PATHS /path/of/src/pnohs/vendor/pkg/kiwi)

add_executable(myPro main.cpp)
target_link_libraries(myPro pnohs)
```
将文件存为 CMakeLists.txt，使用 cmake 进行构建：
```bash
cmake -B./build/ -S./ -DCMAKE_C_COMPILER=mpicc -DCMAKE_CXX_COMPILER=mpicxx
cmake --build ./build
```

## pkg 包管理器
使用 pkg 包管理器则不需知道各个包的安装位置，先编写依赖包的文件 `pkg.yaml`：
```yml
packages:
    pnohs:
      path: https://git.hpcer.dev/HPCer/hydrology/pnohs.git
      tag: v0.3.0
```
则 pkg.yaml 同一目录下执行 `pkg fetch & pkg install` 命令以拉去依赖包的源码并进行构建。
在 CMakeLists.txt 文件中添加并链接依赖包：
```cmake {5,7}
project(pnohs-alpha)

set(CMAKE_CXX_STANDARD 11)

include(pkg.dep.cmake)
add_executable(myPro main.cpp)
target_link_libraries(myPro pnohs)
```
并使用 cmake 进行构建：
```bash
cmake -B./build/ -S./ -DCMAKE_C_COMPILER=mpicc -DCMAKE_CXX_COMPILER=mpicxx
cmake --build ./build
```
