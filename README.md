# baidupcs-batch-upload

使用 `baidupcs-go`,百度网盘批量上传文件

https://github.com/iikira/BaiduPCS-Go

给上传操作限流,防止打开过多报错,默认最多同时运行 15 个上传进程

如果遇到 8 种网络问题上传失败,则自动重试，比直接用 一个 `BaiduPCS-Go` 命令上传更快

# 使用方法

## 安装 `node_modules`

```shell
yarn install
```

## 编译脚本

```shell
yarn build
```

## 运行脚本

```shell
yarn start
```

# 使用之前先登陆

```shell
BaiduPCS-Go login
```

# 命令行示例

必选参数 `input`:输入本地文件目录 `string`

必选参数 `dest`:输出网盘文件目录 `string`

```shell

node ./cli.js --input=D:/baidupandownload/图片输入本地 --dest=/baidupandownload/图片输出网盘
```
