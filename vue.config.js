const { defineConfig } = require('@vue/cli-service')
const devServer = require('./devServer.json');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        // target: 'https://127.0.0.1:8811', // 你的后端服务器地址
        target: devServer.target,
        changeOrigin: true,
        pathRewrite: devServer.pathRewrite // 重写路径：去掉路径中的/api部分
      }
    }
  }
})
