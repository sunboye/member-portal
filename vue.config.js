const { defineConfig } = require('@vue/cli-service')
const devServer = require('./devServer.json');
module.exports = defineConfig({
  transpileDependencies: true,
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
