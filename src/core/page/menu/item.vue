<template>
  <div>
    <router-link
      :to="{name: value.name}">
      <div
        class="item"
        :style="style">
        <span class="inner">
          <template v-if="icon">
            <Icon :type="icon"></Icon>
          </template>
          <template v-else>
            <Icon v-if="index == 0" type="briefcase"></Icon>
            <Icon v-else type="document"></Icon>
          </template>
          <span>
            {{value.meta.title}}
          </span>
        </span>
      </div>
    </router-link>
    <template v-if="value.children">
      <core-menu-item
        v-for="(item, key) in value.children"
        :key="key"
        :value="item"
        :index="index + 1"
        :icon="icon">
      </core-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'core-menu-item',
  props: {
    value: {},
    index: {default: 0},
    icon: {default: null}
  },
  computed: {
    style () {
      return {
        paddingLeft: this.index * 10 + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item{
  line-height: 30px;
  border-radius: 2px;
  .inner{
    margin-left: 10px;
    span{
      margin-left: 4px;
    }
  }
  &:hover{
    background-color: #FFF;
  }
}
</style>

