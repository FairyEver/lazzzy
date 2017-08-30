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
    this.$http.post('/wl/getToken').then(res => {
      this.res = res.data
    })
  }
}
</script>