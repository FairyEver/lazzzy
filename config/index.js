// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8808,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // ECS服务器
      '/ecs':{
        target:'http://d2collection.com:6080',
        changeOrigin: true,
        pathRewrite: {
          '^/ecs': ''
        }
      },
      // easy-mock平台 壁纸盒子 后台 [ mwa = mock-wallpaper-admin ]
      '/mwa':{
        target:'https://www.easy-mock.com/mock/59814506a1d30433d8506496/wallpaper/admin',
        changeOrigin: true,
        pathRewrite: {
          '^/mwa': ''
        }
      },
      // easy-mock平台 壁纸盒子 前端 [ mww = mock-wallpaper-web ]
      '/mww':{
        target:'https://www.easy-mock.com/mock/598acc97a1d30433d85add97/wallpaper/web',
        changeOrigin: true,
        pathRewrite: {
          '^/mww': ''
        }
      },
      // 王璐电脑 家里
      '/wl-home':{
        target:'http://192.168.162.141:6080',
        changeOrigin: true,
        pathRewrite: {
          '^/wl-home': ''
        }
      },
      // 王璐电脑 单位
      '/wl-work':{
        target:'http://192.168.162.141:6080',
        changeOrigin: true,
        pathRewrite: {
          '^/wl-work': ''
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
