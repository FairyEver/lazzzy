// 全项目路由

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 核心路由
import core from '@core/router/core'

// 引入注册的APP路由
import app from '@core/page/app'
import launchpad from '@core/page/launchpad'
import apps from '@core/registry/router'

export default new Router({
  routes: [
    ...core,
    {
      path: '/app',
      name: 'app',
      component: app,
      redirect: {
        name: 'launchpad'
      },
      meta: {
        title: '应用'
      },
      children: [
        ...apps,
        {
          path: 'launchpad',
          name: 'launchpad',
          component: launchpad,
          meta: {
            title: '所有应用'
          }
        }
      ]
    }
  ]
})
