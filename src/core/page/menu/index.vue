<template>
  <div>
    <!-- 顶栏 -->
    <menu-top></menu-top>
    <!-- 面包屑 -->
    <breadcrumb></breadcrumb>
    <!-- 主体 -->
    <container ma-t="10">
      <!-- 搜索 -->
      <Input
        v-model="searchText"
        icon="ios-search"
        :placeholder="`在${router.length}个APP中自动索引目录，您可以再次筛选`"
        style="margin-bottom:10px;">
      </Input>
      <!-- 普通列表 -->
      <template v-if="!searchText">
        <core-menu-item
          v-for="(item, index) in router"
          :key="index"
          :value="item"
          :index="0">
        </core-menu-item>
      </template>
      <!-- 搜索结果 -->
      <template v-else>
        <template v-if="filted.length > 0">
          <core-menu-item
            v-for="(item, index) in filted"
            :key="index"
            :value="item"
            :index="0"
            :icon="'link'">
          </core-menu-item>
        </template>
        <template v-else>
          <div class="empty">没有结果</div>
        </template>
      </template>
    </container>
  </div>
</template>

<script>
import router from '@core/registry/router'
import item from './item.vue'
export default {
  components: {
    'core-menu-item': item
  },
  data () {
    return {
      searchText: '',
      router
    }
  },
  computed: {
    filted () {
      let list = []
      let maker = array => {
        let {meta, name, path, children} = array
        list.push({meta, name, path})
        if (children) {
          for (var i in children) {
            maker(children[i])
          }
        }
      }
      for (var i in this.router) {
        maker(this.router[i])
      }
      return list.filter(ele => {
        return ele.path.indexOf(this.searchText) >= 0 ||
          ele.name.indexOf(this.searchText) >= 0 ||
          ele.meta.title.indexOf(this.searchText) >= 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.empty{
  text-align: center;
  line-height: 100px;
}
</style>

