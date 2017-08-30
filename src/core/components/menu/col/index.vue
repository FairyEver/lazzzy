<template>
  <Menu width="auto" :active-name="activeName" @on-select="select">
    <template
      v-for="item in menu">
      <!-- 有子元素 -->
      <template v-if="item.children">
        <Submenu :name="item.name">
          <template slot="title">
            <Icon
              v-if="item.icon || iconAll"
              :type="item.icon || iconDefParent">
            </Icon>
            {{item.label}}
          </template>
          <Menu-item
            v-for="menuItem in item.children"
            :key="menuItem.name"
            :name="menuItem.name">
            <Icon
              v-if="menuItem.icon || iconAll"
              :type="menuItem.icon || iconDefChild">
            </Icon>
            {{menuItem.label}}
          </Menu-item>
        </Submenu>
      </template>
      <!-- 没有子元素 -->
      <template v-else>
        <Menu-item :name="item.name">
          <Icon
            v-if="item.icon || iconAll"
            :type="item.icon || iconDefParent">
          </Icon>
          {{item.label}}
        </Menu-item>
      </template>
    </template>
  </Menu>
</template>

<script>
export default {
  props: {
    // 菜单数据
    menu: {},
    // 强制有图标
    iconAll: {default: true},
    // 如果强制有图标 默认图标是什么
    iconDefParent: {default: 'android-folder'},
    iconDefChild: {default: 'android-document'},
    // 每个项目的name就是router的name 点击直接跳转 设置为false会emit一个select事件
    routerLink: {default: true}
  },
  computed: {
    activeName () {
      return this.$route.name
    }
  },
  methods: {
    select (name) {
      if (this.routerLink) {
        this.$router.push({
          name
        })
      } else {
        this.$emit('select', name)
      }
    }
  }
}
</script>

