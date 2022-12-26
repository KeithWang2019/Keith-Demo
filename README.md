[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/KeithWang2019/Keith-Demo/blob/master/LICENSE)
[![webpack](https://img.shields.io/badge/webpack-%5E5.74.0-green)](#)
[![@babel/core](https://img.shields.io/badge/%40babel%2Fcore-%5E7.19.3-green)](#)
[![@babel/plugin-transform-react-jsx](https://img.shields.io/badge/%40babel%2Fplugin--transform--react--jsx-%5E7.19.0-green)](#)
# [Keith-Demo](https://github.com/KeithWang2019/Keith-Demo)

## 什么是Keith-Demo
Keith-Demo是一套项目架构，演示[Keith-Babel-JSX](https://github.com/KeithWang2019/Keith-Babel-JSX)和[Keith-Core](https://github.com/KeithWang2019/Keith-Core)的使用过程，Keith-Demo项目也是一个可以用户生产的合理架构，Keith-Demo本身也是为了调试[Keith-Core](https://github.com/KeithWang2019/Keith-Core)而存在的。

## 安装方式
```shell
npm install
```

## 调试方式
1. 下载[Keith-Core](https://github.com/KeithWang2019/Keith-Core)项目
2. 进入[Keith-Core](https://github.com/KeithWang2019/Keith-Core)目录
3. 使用命令安装全局link
```shell
npm link
```
4. 进入Keith-Demo目录，使用命令link本地项目
```shell
npm link @keithwang/keith-core
```
5. 启动项目Keith-Demo
```shell
npm run start
```
6. 此时，在[Keith-Core](https://github.com/KeithWang2019/Keith-Core)项目中的修改，Keith-Demo项目会随时热更

## 完整参考
代码结构与工程[Keith-Demo](https://github.com/KeithWang2019/Keith-Demo)
