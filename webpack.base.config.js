/*
 * @Author: your name
 * @Date: 2021-03-18 11:09:53
 * @LastEditTime: 2021-04-14 14:09:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/webpack.config.js
 */
const path = require('path')
// 使用vue-loader@15以上都需要使用vueloaderplugin这个插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@imgs': path.resolve(__dirname, 'src/assets/imgs'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  },
  module: {
    rules: [
      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // css
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      // sass
      {
        test: /\.s[ac]ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          { 
            loader: 'sass-resources-loader',
            options: {
              resources: ['./src/assets/styles/mixins.scss', './src/assets/styles/variables.scss']
            }
          }
        ]
      },
      // iconfont
      {
        test: /\.(woff2?|eot|ttf|woff)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      // img
      {
        test: /\.(jp(e)g|svg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              esModule: false,
              name: 'imgs/[name].[hash:7].[ext]'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin(),
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