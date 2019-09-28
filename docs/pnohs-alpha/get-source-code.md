---
id: get-source-code
title: 获取源代码
---

## 获取源代码
你可以使用以下任意一种方式获取代码：git clone、下载源码包。如果你已经拥有源代码，可以忽略此步骤，直接跳到安装依赖小节。

### git clone
如果你的系统中安装了git工具，可以使用git来clone源代码。这样的好处是，你可以随时切换或更新以使用其他任意版本的代码。

```bash
git clone https://git.hpcer.dev/HPCer/hydrology/pnohs-alpha.git # https
```

或者，如果你配置了ssh key, 也可以使用ssh协议进行clone:
```bash
git clone ssh://git@git.hpcer.dev:2222/HPCer/hydrology/pnohs-alpha.git # ssh
```

上述 `git clone` 命令会创建一个名为 `pnohs-alpha` 的目录。
克隆完成后，你可以选择通过调用以下命令来构建特定分支（如版本分支）
```bash
cd pnohs-alpha # pnohs-alpha 为源码目录
git checkout Branch_Or_Tag
# where ' Branch_Or_Tag' is the desired branch or tag.
```

### 直接下载源码包
你也可以直接前往我们的代码仓库页面(https://git.hpcer.dev/HPCer/hydrology/pnohs-alpha)下载源码包。  
下载时注意选择分支或版本。  
下载完后将压缩包解压到自己本地目录。

## 安装依赖
完成代码获取后，需要进入源码的根目录安装依赖库。  
pnohs-alpha依赖于一些开源库, 如[pnohs](https://git.hpcer.dev/HPCer/hydrology/pnohs), [kiwi](https://git.hpcer.dev/genshen/kiwi), googletest, fmt等。
可以使用[pkg](https://github.com/genshen/pkg/)依赖管理工具下载依赖包或者直接将对应依赖包导入到pnohs-alpha源码的`vendor`目录。

你可以选择以下两种依赖安装方式的其一即可：

### 使用pkg安装依赖
使用该方式安装依赖，需要你的系统能够连接到互联网，且有所有依赖仓库的 git 克隆权限。

```bash
cd pnohs-alpha # pnohs-alpha 为源码目录，如果是直接下载源码包并解压的，该目录名称可能不同
pkg fetch # 获取依赖库
pkg install # 编译安装依赖库
```

### 使用pkg导入依赖包
可以通过`pkg export`命令将其本地的依赖包打包成tar归档格式，也可以通过`pkg import`命令从归档格式导入依赖包。  
假设依赖压缩包文件名为: vendor-20190925-003851.426644.tar, 可以通过以下pkg命令导入依赖包:

```bash
cd pnohs-alpha
pkg import --input vendor-20190925-003851.426644.tar
```
