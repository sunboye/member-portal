const { defineConfig } = require('@vue/cli-service')
const devServer = require('./devServer.json');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '会员管理系统'; // 这里设置你的标题
      return args;
    })
  },
  devServer: {
    proxy: {
      '/api': {
        target: devServer.target,
        pathRewrite: devServer.pathRewrite, // 重写路径：去掉路径中的/api部分
        changeOrigin: true,
        ws: true
      }
    }
  }
})
