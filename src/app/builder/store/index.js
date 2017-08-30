import axios from 'axios'
import _ from 'underscore'

// API
import api from '@builder/api'

const store = {
  state: {
    // 必须项
    appName: 'builder',
    rootRouterName: 'app-builder',
    appNameCN: '生成器',
    description: '代码生成操作界面',
    // 接口地址
    api,
    // 所有的壁纸分类
    allClass: null,
    // 所有的壁纸分类方式
    allPicSourceType: null,
    // 所有的壁纸来源网站
    allPicSourceSite: null,
    // 所有的壁纸来源社区
    allPicSourceCommunity: null
  },
  actions: {
    // prop
    //  - proxyTable [前缀]
    //  - api [接口地址]
    //  - state [state上保存数据的key]
    //  - resKey [返回的data里哪个字段带有数据]
    // 使用参考:
    // [
    //   {proxyTable: '/mwa', api: 'getPicClass', state: 'allClass'},
    //   {proxyTable: '/mwa', api: 'getPicSourceType', state: 'allPicSourceType'},
    //   {proxyTable: '/mwa', api: 'getPicSourceSite', state: 'allPicSourceSite'},
    //   {proxyTable: '/mwa', api: 'getPicSourceCommunity', state: 'allPicSourceCommunity'}
    // ].forEach(ele => {
    //   this.$store.dispatch('loadData', ele)
    // })
    loadData ({ state }, userProp) {
      let baseProp = {
        proxyTable: '/mwa',
        api: '',
        state: '',
        resKey: 'result'
      }
      let prop = _.extend(baseProp, userProp)
      axios.post(prop.proxyTable + api[prop.api])
      .then(res => {
        state[prop.state] = res.data.data[prop.resKey]
        if (prop.finish) { prop.finish() }
      })
      .catch(function (error) { console.log(error) })
    }
  }
}

export default store
