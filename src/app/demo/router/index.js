// 这个APP的路由设置

// 首页
import index from '@demo/page/index'
// 网络测试
import axios from '@demo/page/axios'
// 连接easy-mock
import mock from '@demo/page/mock'
// 请求七牛上传token
import wallpaperToken from '@demo/page/wallpaperToken'

export default [
  {
    // 这个APP的首页 通常应该包括导航和内容部分
    path: 'demo',
    name: 'app-demo',
    component: index,
    meta: {
      title: '示例工程'
    },
    // 建议所有功能都在children中
    children: [
      {
        path: 'axios',
        name: 'app-demo-axios',
        component: axios,
        meta: {
          title: 'axios测试'
        }
      },
      {
        path: 'mock',
        name: 'app-demo-mock',
        component: mock,
        meta: {
          title: 'mock测试'
        }
      },
      {
        path: 'wallpaper-token',
        name: 'app-demo-wallpaper-token',
        component: wallpaperToken,
        meta: {
          title: '七牛上传Token测试'
        }
      }
    ]
  }
]
