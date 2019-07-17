<template>
  <header class="common-header">
    <a>返回</a>
    <h2>{{ title }}</h2>
  </header>
</template>

<script>
export default {
  name: 'CommonHeader',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
.common-header
  display flex
  align-items center
  padding 0 0.18rem
  a
    line-height 0.48rem
    font-size 0.34rem
    color #8E8E93
</style>
