const path = require('path')

module.exports = {
  outputDir: './dist',
  assetsDir: 'assets',
  productionSourceMap: false,
  devServer: {
    host: '10.10.10.119',
    port: 3636
  },
  configureWebpack: config => {
    Object.assign(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@components': path.resolve(__dirname, './src/components'),
          '@assets': path.resolve(__dirname, './src/assets'),
          '@views': path.resolve(__dirname, './src/views')
          // "@api": path.resolve(__dirname, "./src/api"),
        }
      }
    })
  }
}
