<template>
  <div class="main-entry">
    <div class="main-entry__header"></div>
    <div class="main-entry__footer"></div>
  </div>
</template>

<script>
export default {
  name: 'CommonEntry'
}
</script>

<style lang="stylus" scoped>
.main-entry
  position fixed
  top 0
  left 0
  z-index 99999
  display flex
  flex-direction column
  width 100%
  height 100%
  opacity 1
  transition opacity 0.3s ease
  &.fade-enter, &.fade-leave-to
    opacity 0
  &__header
    flex 1
    width 100%
    background linear-gradient(268deg, rgba(59, 75, 185, 1) 0%, rgba(27, 39, 125, 1) 100%)
  &__footer
    width 100%
    height 2rem
    background-color #fff
</style>
