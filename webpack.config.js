/*
 * @Author: your name
 * @Date: 2021-03-18 11:09:53
 * @LastEditTime: 2021-03-18 16:21:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/webpack.config.js
 */
const path = require('path')

// 使用vue-loader@15以上都需要使用vueloaderplugin这个插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    open: true,
    port: 5234
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
      favicon: './favicon.ico',
      minify: {
        removeAttributeQuotes: true // 移除属性的引号
      }
    })
  ]
}