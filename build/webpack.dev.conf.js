var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge') // 合并配置文件
var utils = require('./utils') // 公用方法
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks 热加载功能
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }) // 对那些单独的css的文件运用上css预处理器loader
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(), // webpack优化工具：根据打包后模块的使用频率，给最常用的模块分配一个最小的IP
    new webpack.HotModuleReplacementPlugin(), // webpack对应热加载的插件
    new webpack.NoErrorsPlugin(), // 跳过编译时出错的代码，使编译后运行的包不会发生错误
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', // 指定编译后html文件名
      template: 'index.html', // 要被编译的html文件
      inject: true // 打包过程中输出的css和js文件，它的路径会自动添加到html文件里，css往head里加，js往body里放
    })
  ]
})
