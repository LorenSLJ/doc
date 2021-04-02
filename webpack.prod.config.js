/*
 * @Author: your name
 * @Date: 2021-04-02 13:15:15
 * @LastEditTime: 2021-04-02 14:05:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/webpack.prod.config.js
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')


module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyJSPlugin()
  ]
})