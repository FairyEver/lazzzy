<template>
  <Card dis-hover>
    <template v-if="name">
      <div v-if="mode === 'normal'" slot="title" class="title" :class="mode">{{`数据检查 | ${name}`}}</div>
      <div v-if="mode === 'mini'" slot="title" class="title" :class="mode">{{name}}</div>  
    </template>
    <!-- 一般模式 尺寸比较大 默认 -->
    <Tabs v-if="mode === 'normal'" value="pretty">
      <Tab-pane label="优化显示" name="pretty">
        <template v-for="(item, key) in data" class="item">
          <item :item="item" :key-name="key" :key="key" :mode="mode"></item>
        </template>
      </Tab-pane>
      <Tab-pane label="原始数据" name="true">
        <tool-code-preview :data="data"></tool-code-preview>
      </Tab-pane>
    </Tabs>
    <!-- 精简模式 -->
    <div v-if="mode === 'mini'" class="mode-mini">
      <template v-for="(item, key) in data" class="item">
        <item :item="item" :key-name="key" :key="key" :mode="mode"></item>
      </template>
    </div>
  </Card>
</template>

<script>
import item from './item.vue'
export default {
  props: {
    data: {},
    name: {default: null},
    mode: {default: 'normal'}
  },
  components: {
    'item': item
  }
}
</script>

<style lang="scss" scoped>
pre{
  margin: 0px;
  color: #333;
}
.title{
  &.normal{
    
  }
  &.mini{
    margin: -5px;
  }
}
.mode-mini{
  margin: -10px;
  font-size: 10px;
}
</style>

