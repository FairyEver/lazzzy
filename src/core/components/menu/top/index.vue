<template>
  <section>
    <Affix @on-change="affixChange">
      <Menu mode="horizontal" :active-name="active">
        <div class="layout-logo">
          <span class="fa fa-dashboard"></span>
          Dashboard
        </div>
        <div class="layout-nav">
          <router-link
            v-for="(item, index) in menu"
            :key="index"
            :to="{ name: item.routerLinkName }">
            <Menu-item :name="item.routerLinkName">
              <Icon :type="item.icon"></Icon>
              {{item.label}}
            </Menu-item>
          </router-link>
        </div>
      </Menu>
    </Affix>
    <div v-if="affix" class="placeholder"></div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      affix: false,
      menu: [
        {
          routerLinkName: 'launchpad',
          label: 'Launchpad',
          icon: 'grid'
        },
        {
          routerLinkName: 'menu',
          label: '目录',
          icon: 'link'
        }
      ]
    }
  },
  computed: {
    active () {
      return this.$route.name
    }
  },
  methods: {
    affixChange (val) {
      this.affix = val
    }
  }
}
</script>


<style lang="scss" scoped>
.layout-logo{
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #FFF;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  margin: 15px 20px;
  user-select: none;
  cursor: pointer;
}
.layout-nav{
  float: left;
}
.placeholder{
  height: 60px;
}
</style>

