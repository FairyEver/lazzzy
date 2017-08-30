// 所有组件注册文件

import Vue from 'vue'

// [公用][布局] 左右
Vue.component('layout-lr', require('@core/components/layout/lr'))
// [公用][布局] container
Vue.component('container', require('@core/components/layout/container'))

// [公用][菜单] 适用于在左右布局组件的 l solt 中使用的纵向菜单
Vue.component('menu-col', require('@core/components/menu/col'))
// [公用][菜单] 顶栏菜单
Vue.component('menu-top', require('@core/components/menu/top'))

// [公用][功能] 显示一个对象数据
Vue.component('tool-data-preview', require('@core/components/tool/dataPreview'))
// [公用][功能] 美化代码显示
Vue.component('tool-code-preview', require('@core/components/tool/codePreview'))

// [公用][面包屑]
Vue.component('breadcrumb', require('@core/components/breadcrumb'))
