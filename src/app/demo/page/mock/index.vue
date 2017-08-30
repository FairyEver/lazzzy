<template>
  <section>
    <pre>{{res}}</pre>
  </section>
</template>

<script>
export default {
  data () {
    return {
      res: ''
    }
  },
  mounted () {
    this.$http({
      method: 'post',
      url: '/mwa/load-base-data'
    }).then(res => {
      this.res = res.data
    })
  }
}
</script>

