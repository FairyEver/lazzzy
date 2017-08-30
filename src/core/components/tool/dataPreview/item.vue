<template>
  <div class="item" :class="mode">
    <!-- 一般模式 比较大 -->
    <template v-if="mode === 'normal'">
      <!-- key -->
      <span class="title">
        <Tag type="border">{{keyName}}</Tag>
      </span>
      <!-- 类型 -->
      <span class="item-type">
        <Tag v-if="typeof(item) === 'number'" color="blue">{{typeof(item)}}</Tag>
        <Tag v-if="typeof(item) === 'boolean'" color="yellow">{{typeof(item)}}</Tag>
        <Tag v-if="typeof(item) === 'object'" color="green">{{typeof(item)}}</Tag>
        <Tag v-if="typeof(item) === 'string'" type="border">{{typeof(item)}}</Tag>
      </span>
      <!-- 值 -->
      <span class="item-value">
        <template v-if="item === null">
          <Tag>null</Tag>
        </template>
        <template v-else-if="typeof(item) === 'boolean'">
          <Tag v-if="item" color="green">
            <Icon type="checkmark-circled"></Icon>
            {{item}}
          </Tag>
          <Tag v-else color="red">
            <Icon type="close-circled"></Icon>
            {{item}}
          </Tag>
        </template>
        <template v-else-if="item === ''">
          <Tag type="border">空字符串</Tag>
        </template>
        <template v-else>
          <Tag type="border">{{item}}</Tag>
        </template>
      </span>
    </template>
    <!-- 精简模式 -->
    <template v-if="mode === 'mini'">
      {{keyName}} : {{item}}
    </template>
  </div>
</template>

<script>
export default {
  props: {
    item: {},
    keyName: {},
    mode: {default: 'normal'}
  }
}
</script>

<style lang="scss" scoped>
.item{
  color: #333;
  border-radius: 2px;
  &.normal{
    &:hover{
      background-color: #F2F2F2;
    }  
  }
  &.mini{
    padding: 0px 4px;
  }
  span{
    display: inline-block;
    &.title{
      width: 180px;
      padding-left: 2px;
      // text-align: right;
    }
    &.item-type{
      width: 100px;
    }
  }
}
</style>


