<template>
  <container ma-t="10">
    <div class="main">
      <Row>
        <i-col :span="span.active.l">
          <div class="toggle" @click="toggle">
            <template v-if="modeSelf === 'normal'">
              <Icon type="arrow-expand"></Icon>
            </template>
            <template v-else>
              <Icon type="navicon-round"></Icon>
            </template>
          </div>
          <slot v-if="modeSelf === 'normal'" name="l"></slot>
        </i-col>
        <i-col :span="span.active.r">
          <div class="r" :style="rStyle">
            <slot name="r"></slot>
          </div>
        </i-col>
      </Row>
    </div>
  </container>
</template>

<script>
// [介绍]
// 提供一个左右布局
export default {
  props: {
    mode: {default: 'mini'},
    // 左右占比
    spanL: {default: 4},
    spanR: {default: 20},
    // 最小高度
    minHeight: {default: 'calc(100vh - 120px)'}
  },
  data () {
    return {
      modeSelf: '',
      span: {
        active: {
          l: 0,
          r: 0
        },
        normal: {
          l: 0,
          r: 0
        },
        mini: {
          l: 1,
          r: 23
        }
      }
    }
  },
  created () {
    this.span.normal.l = this.spanL
    this.span.normal.r = this.spanR
    this.modeSelf = this.routerSetting ? this.routerSetting : 'normal'
    this.span.active.l = this.span[this.modeSelf].l
    this.span.active.r = this.span[this.modeSelf].r
  },
  computed: {
    rStyle () {
      return {
        minHeight: this.minHeight
      }
    },
    routerSetting () {
      return this.$route.meta.sideOpen ? 'normal' : 'mini'
    }
  },
  watch: {
    routerSetting (value) {
      if (value === 'normal') {
        this.open()
      } else {
        this.close()
      }
    }
  },
  methods: {
    toggle () {
      if (this.modeSelf === 'normal') {
        this.close()
      } else {
        this.open()
      }
    },
    open () {
      this.span.active.l = this.span.normal.l
      this.span.active.r = this.span.normal.r
      this.modeSelf = 'normal'
    },
    close () {
      this.span.active.l = this.span.mini.l
      this.span.active.r = this.span.mini.r
      this.modeSelf = 'mini'
    }
  }
}
</script>


<style lang="scss" scoped>
.main{
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.toggle{
  border-bottom: 1px solid #d7dde4;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  user-select: none;
  cursor: pointer;
}
.r{
  padding: 10px;
  &:after{
    content: "";
    display: block;
    width: 1px;
    background: #d7dde4;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1px;
  }
}
</style>
