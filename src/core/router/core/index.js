// 核心路由配置

import welcome from '@core/page/welcome'
import menu from '@core/page/menu'

export default [
  {
    path: '/',
    name: 'welcome',
    component: welcome,
    meta: {
      title: '欢迎'
    }
  }, {
    path: '/menu',
    name: 'menu',
    component: menu,
    meta: {
      title: '目录'
    }
  }
]
