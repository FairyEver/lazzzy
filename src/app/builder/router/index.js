// 这个APP的路由设置

// 首页
import index from '@builder/page/index'

// 基础生成
import base from '@builder/page/base'

export default [
  {
    // 这个APP的首页 通常应该包括导航和内容部分
    path: 'builder',
    name: 'app-builder',
    component: index,
    meta: {
      title: '生成器',
      sideOpen: true
    },
    // 建议所有功能都在children中
    children: [
      {
        path: 'base',
        name: 'app-builder-base',
        component: base,
        meta: {
          title: '基础演示',
          sideOpen: false
        }
      }
    ]
  }
]
