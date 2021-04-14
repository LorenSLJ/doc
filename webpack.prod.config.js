/*
 * @Author: your name
 * @Date: 2021-04-02 13:15:15
 * @LastEditTime: 2021-04-09 14:28:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/webpack.prod.config.js
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const TerserPlugin = require('terser-webpack-plugin')


module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})