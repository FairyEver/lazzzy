<template>
  <layout-lr>
    <template slot="l">
      <menu-col :menu="menu"></menu-col>
    </template>
    <template slot="r">
      <router-view></router-view>
    </template>
  </layout-lr>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          label: '测试',
          name: 'test-page',
          children: [
            {
              label: 'axios请求',
              name: 'app-demo-axios'
            },
            {
              label: 'mock请求',
              name: 'app-demo-mock'
            },
            {
              label: '七牛上传Token获取',
              name: 'app-demo-wallpaper-token'
            }
          ]
        }
      ]
    }
  }
}
</script>
