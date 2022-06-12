const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.js',
      title: '麻雀スコア',
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mj-score-board/'
    : '/',
  transpileDependencies: true,
})