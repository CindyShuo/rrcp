<template>
  <div class="main-index">
    <div class="main-index__content">
      <router-view />
    </div>
    <footer class="tab-bar">
      <router-link to="/">首页</router-link>
      <router-link to="/market">行情</router-link>
      <router-link to="/model">模型</router-link>
      <router-link to="/news">动态</router-link>
      <router-link to="/user">我</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainIndex'
}
</script>

<style lang='stylus' scoped>
.main-index
  &__content
    padding-bottom 1.18rem
  .tab-bar
    position fixed
    bottom 0
    z-index 99
    display flex
    justify-content space-between
    align-items center
    padding 0 0.36rem
    width 100%
    height 0.98rem
    border-top 0.02rem solid #F3F2F2
    background-color #fff
    a
      font-size 0.24rem
      color #999
</style>
