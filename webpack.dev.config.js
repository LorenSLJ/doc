/*
 * @Author: your name
 * @Date: 2021-04-02 13:15:01
 * @LastEditTime: 2021-04-02 14:02:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/webpack.dev.config.js
 */
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
    port: 5234
  }
})