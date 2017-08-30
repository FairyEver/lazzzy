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
import router from '@builder/router'
export default {
  computed: {
    menu () {
      return router[0].children.map(ele => {
        return {
          label: ele.meta.title,
          name: ele.name
        }
      })
    }
  }
}
</script>
