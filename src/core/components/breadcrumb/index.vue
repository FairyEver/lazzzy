<template>
  <container ma-t="10">
    <Breadcrumb>
      <Breadcrumb-item v-for="(item, index) in menu" :key="index">
        <router-link :to="{ name: item.name }">
          {{item.label}}
        </router-link>
      </Breadcrumb-item>
    </Breadcrumb>
  </container>
</template>

<script>
export default {
  computed: {
    menu () {
      return this.$route.matched.map(ele => {
        return {
          label: ele.meta.title,
          name: ele.name
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.breadcrumb{
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
}
</style>

