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
    this.$http.post('/ecs/iconSearch/search', {
      keyword: 'left',
      source: '1,2,3,4,5'
    }).then(res => {
      this.res = res.data
    })
    // this.$http.post('/wl/wallpaper/getPicClass').then(res => {
    //   this.res = res.data
    // })
  }
}
</script>

