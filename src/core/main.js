import Vue from 'vue'
import App from './App'
import router from '@core/router'

// FontAwesome
import '@core/assets/library/font-awesome-4.7.0/css/font-awesome.min.css'
// prism
import '@core/assets/library/prism/prism.css'

// 导入Vuex设置
import store from '@core/store'

// 注册iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

// 注册网络请求插件
import axios from 'axios'
Vue.prototype.$http = axios

// 注册组件
import '@core/components'

import { tool } from '@coreLib/tool.js'

// 按键别名
Vue.config.keyCodes = {
  enter: 13,
  space: 32
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data: {
    tool
  },
  methods: {
    jump (prop) {
      this.$router.push(prop)
    }
  }
})
