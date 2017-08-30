import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import modules from '@core/registry/store'

const store = new Vuex.Store({
  modules: modules
})

export default store
