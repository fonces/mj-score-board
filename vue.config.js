const { defineConfig } = require('@vue/cli-service')
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/mj-score-board/' : '/'

module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.js',
      title: '麻雀スコアボード',
    }
  },
  publicPath: BASE_PATH,
  pwa: {
    name: '麻雀スコアボード',
    themeColor: '#deb887',
    appleMobileWebAppCapable: 'yes',
    manifestOptions: {
      short_name: 'すこあぼ',
      start_url: BASE_PATH,
      display: 'fullscreen',
      description: '麻雀のスコアを記録するウェブアプリ',
      orientation: 'any',
      background_color: '#deb887',
      icons: [
        {
          src: 'favicon/android-chrome-192x192.png',
          size: '192x192',
          type: 'image/png',
        },
        {
          src: 'favicon/android-chrome-512x512.png',
          size: '512x512',
          type: 'image/png',
        },
      ]
    },
    iconPaths: {
      faviconSVG: null,
      favicon16: 'favicon/favicon-16x16.png',
      favicon32: 'favicon/favicon-32x32.png',
      appleTouchIcon: 'favicon/apple-touch-icon.png',
      maskIcon: null,
      msTileImage: null,
    },
  },
  transpileDependencies: true,
})
