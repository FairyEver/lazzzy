<template>
  <section class="welcome">
    <div class="card">
      <div class="title">你好</div>
      <router-link :to="{name: 'app'}">
        <Button type="ghost">进入系统</Button>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.welcome{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .card{
    .title{
      font-size: 20px;
      text-align: center;
      margin-bottom: 30px;
    }
  }
}
</style>

