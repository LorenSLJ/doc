<!--
 * @Author: your name
 * @Date: 2021-04-12 19:50:24
 * @LastEditTime: 2021-04-13 20:40:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/src/md/first.md
-->
# 介绍

#  内容综述

  webpack 的基本概念和日常开发的实用技巧
  以工程化的方式组织 webpack 构建配置，和 webpack 打包优化
  详细剖析 webpack 打包原理和插件、Loader 的实现
  以实际web商城项目出发，讲解 webpack 实际使用
  
# 为什么需要构建工具

  转换ES6语法
  转换JSX
  CSS前缀补全 / 预处理器
  压缩混淆
  图片压缩

# 前端构建工具的演变历史

# 为什么选择 webpack

  领先的下载量
  社区生态丰富
  配置灵活和插件化拓展
  官方更新迭代速度快

# 初识 webpack

  webpack 默认配置文件：webpack.config.js

  可以通过 webpack --config 指定配置文件

## 主要组成部分

  module.exports = {
    entry: './src/index.js',         1. 打包的入口文件
    output: './dist/main.js',        2. 打包的输出
    mode: 'production',              3. 环境
    module: {                        4. Loader配置
      rules: [
        {
          test: /\.txt/,
          use: 'raw-loader'
        }
      ]
    },
    plugins: [                        5. 插件配置
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  }

# 环境搭建

  在 webpack4 中，webpack将内核和cli进行分离，在实际项目中，要同时安装

# 一个最简单的例子

  const path = require('path')

  module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    }
  }