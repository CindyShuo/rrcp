<template>
  <div class="banner-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="content">Slide 1</div>
      </div>
      <div class="swiper-slide">
        <div class="content">Slide 2</div>
      </div>
      <div class="swiper-slide">
        <div class="content">Slide 3</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'BannerSwiper',
  data () {
    return {
      mySwiper: null
    }
  },
  mounted () {
    this.mySwiper = new Swiper('.banner-swiper', {
      loop: true,
      centeredSlides: true,
      effect: 'coverflow',
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: -12.5,
        depth: 70,
        modifier: 2,
        slideShadows: false
      }
    })
    this.mySwiper.init()
  }
}
</script>

<style lang='stylus' scoped>
.banner-swiper
  height 3rem
  .swiper-slide
    width 6.92rem
    .content
      height 100%
      border-radius 0.08rem
      background-color $buttonColor
</style>
