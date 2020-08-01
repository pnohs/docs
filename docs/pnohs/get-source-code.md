---
id: get-source-code
title: 获取源代码
---

## 获取源代码
pnohs 的源码可以从 [git.hpcer.dev](https://git.hpcer.dev/HPCer/hydrology/pnohs) 上获取:  
```bash
git clone https://git.hpcer.dev/HPCer/hydrology/pnohs
```
对于无法访问 [git.hpcer.dev](https://git.hpcer.dev) 的用户，我们提供了 [github 镜像](https://github.com/pnohs/pnohs)，可以直接访问 github 获取：
```bash
git clone https://github.com/pnohs/pnohs.git
```

当然，如果你不喜欢或者无法使用 git clone 代码，也可以直接在 github 或者 git.hpcer.dev 上面下载对应版本的压缩包。

## 安装依赖
完成代码获取后，需要进入源码的根目录安装依赖库。  
pnohs 的代码依赖于很多开源的代码库的支持，如[kiwi](https://git.hpcer.dev/genshen/kiwi), [nlohmann_json](https://github.com/nlohmann/json), googletest, fmt等。  
可以使用[pkg](https://github.com/genshen/pkg/)依赖管理工具下载依赖包或者直接将对应依赖包导入到 pnohs 源码的 `vendor`目录。

你可以选择以下两种依赖安装方式的其一即可：

### 使用pkg安装依赖
使用该方式安装依赖，需要你的系统能够连接到互联网，且有所有依赖仓库的 git 克隆权限。

```bash
cd pnohs # pnohs 为源码目录，如果是直接下载源码包并解压的，该目录名称可能不同
pkg fetch # 获取依赖库
pkg install # 编译安装依赖库
```
:::note
pkg install 过程会调用 cmake 以及 C/C++ 编译器来编译构建依赖包，如果需要指定对应的编译器，可以在执行 pkg install 命令之前设置 `CC` 和 `CXX` 环境变量。
如：`export CC=clang`, `export CXX=clang++`。
:::

### 使用pkg导入依赖包
可以通过`pkg export`命令将其本地的依赖包打包成tar归档格式，然后通过`pkg import`命令从归档格式导入依赖包。
这种方式比较适合于无外部网络访问的系统中（例如很多超算系统都不提供互联网访问），我们就可以通过上传归档格式，然后导入依赖包的方式完成。  
假设依赖压缩包文件名为: vendor-20200725-001651.425644.tar, 可以通过以下pkg命令导入依赖包:

```bash
cd pnohs
pkg import --input vendor-20200725-001651.425644.tar
pkg fetch
pkg install
```
