/*
 * @Author: your name
 * @Date: 2021-04-02 13:15:01
 * @LastEditTime: 2021-04-14 14:45:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/webpack.dev.config.js
 */
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 5234
  }
})