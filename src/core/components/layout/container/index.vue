<template>
  <section class="container" :style="style">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    // 上下外边距
    maT: {default: 0},
    maB: {default: 0}
  },
  computed: {
    style () {
      return {
        marginTop: this.maT + 'px',
        marginBottom: this.maB + 'px'
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.container{
  max-width: 1350px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 10px;
}
</style>

