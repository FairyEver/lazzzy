<template>
  <container ma-t="10">
    <Row :gutter="10">
      <Col
        v-for="app in list"
        :key="app.appNameCN"
        span="4">
        <Card dis-hover>
          <p slot="title">
            [{{app.appName}}] {{app.appNameCN}}
          </p>
          <div class="description">
            {{app.description}}
          </div>
          <router-link :to="{ name: app.rootRouterName }">
            <Button long>
              {{btnLabel}}
            </Button>
          </router-link>
        </Card>
      </Col>
    </Row>
  </container>
</template>

<script>
import { storeArray } from '@core/registry/store'
export default {
  props: {
    btnLabel: {default: '进入'}
  },
  computed: {
    list () {
      return storeArray.map(ele => {
        return ele.state
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.description{
  font-size: 10px;
  margin-bottom: 5px;
}
</style>
