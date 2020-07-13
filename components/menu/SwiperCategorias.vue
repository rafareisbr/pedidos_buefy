<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide class="tag">Todos</swiper-slide>
    <swiper-slide class="tag">Torta no pote</swiper-slide>
    <swiper-slide class="tag">Petisqueiras</swiper-slide>
    <swiper-slide class="tag">Mini Casquinha</swiper-slide>
    <swiper-slide class="tag">Slide 5</swiper-slide>
    <swiper-slide class="tag">Slide 6</swiper-slide>
    <swiper-slide class="tag">Slide 7</swiper-slide>
    <swiper-slide class="tag">Slide 8</swiper-slide>
    <swiper-slide class="tag">Slide 9</swiper-slide>
    <swiper-slide class="tag">Slide 10</swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 20
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  width: fit-content !important;
}
.tag {
  background-color: red;
  color: white;
  border-radius: 1rem;
}
</style>
