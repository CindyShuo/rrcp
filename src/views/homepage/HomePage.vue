<template>
  <div class="home-page">
    <div class="home-page__top">
      <header class="logo"></header>
      <banner-swiper />
      <notice-swiper />
      <fund-total />
    </div>
    <assets-nav />
    <div class="home-page__ad"></div>
    <fund-list />
  </div>
</template>

<script>
import BannerSwiper from '../../components/home/BannerSwiper'
import NoticeSwiper from '../../components/home/NoticeSwiper'
import FundTotal from '../../components/home/FundTotal'
import AssetsNav from '../../components/home/AssetsNav'
import FundList from '../../components/home/FundList'

export default {
  name: 'HomePage',
  components: { BannerSwiper, NoticeSwiper, FundTotal, AssetsNav, FundList }
}
</script>

<style lang='stylus' scoped>
.home-page
  background-color #FAFAFA
  &__top
    background-color #fff
    .logo
      display flex
      justify-content center
      align-items center
      height 0.96rem
  &__ad
    width 100%
    height 1.6rem
    background-color #000
</style>
