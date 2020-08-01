---
id: prepare-env
title: 准备环境
---

在 Linux 上构建 pnohs-alpha 之前，请在你的系统中安装以下构建工具：

- [CMake](http://cmake.org/), 3.13 (支持 -S 选项) 及以上版本；
- 支持C++11特性的C++编译器；
- MPI环境;
- [pkg](https://github.com/genshen/pkg) c/c++依赖管理工具，v0.4.0及以上版本；

## CMake
如果你的系统中未安装CMake构建工具，请按照[相关文档](https://cmake.org/)进行下载安装。  
MacOS 系统中可以使用 brew 安装
```bash
brew install cmake # make sure its version is higher/equal than 3.13
```

## c++编译器
为了编译Crystal MD程序，要求你的系统上要已经安装了相关的C++编译器。
各类编译器对c++11特性的支持情况可参考[相关文档](http://zh.cppreference.com/w/cpp/compiler_support#cpp11})。

我们测试过以下编译器可以正常工作：
- GUN g++ 5.3.0 及以后版本
- LLVM Clang++ 3.3 及以上版本
- Intel icc 2017

## MPI环境
要求你的系统中安装了支持MPI 2.0及以后标准的MPI环境。

## pkg
进入[https://github.com/genshen/pkg/releases](https://github.com/genshen/pkg/releases)，
下载对应架构，对应版本(一般为最新版本即可)的pkg文件到系统中，并确保pkg可执行程序在环境变量中。

例如, 对于64位amd64架构的Linux操作系统：
```bash
mkdir -p ~/.local/bin
wget https://github.com/genshen/pkg/releases/download/v0.4.1/pkg-linux-amd64 -O ~/.local/bin/pkg
chmod +x ~/.local/bin/pkg
export PATH=~/.local/bin:$PATH
```
