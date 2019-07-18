<template>
  <div class="main-index">
    <div class="main-index__content">
      <router-view />
    </div>
    <footer class="tab">

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
    padding-bottom 0.98rem
  .tab
    position fixed
    bottom 0
    z-index 99
    display flex
    justify-content space-between
    align-items center
    width 100%
    height 0.98rem
    border-top 0.02rem solid #F3F2F2
    background-color #fff
</style>
