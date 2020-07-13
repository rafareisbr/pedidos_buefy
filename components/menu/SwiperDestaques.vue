<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <card-destaques></card-destaques>
    </swiper-slide>
    <swiper-slide>
      <card-destaques></card-destaques>
    </swiper-slide>
    <swiper-slide>
      <card-destaques></card-destaques>
    </swiper-slide>
    <swiper-slide>
      <card-destaques></card-destaques>
    </swiper-slide>
    <swiper-slide>
      <card-destaques></card-destaques>
    </swiper-slide>
    <swiper-slide>
      <card-destaques></card-destaques>
    </swiper-slide>
    <swiper-slide>
      <card-destaques></card-destaques>
    </swiper-slide>
    <swiper-slide>
      <card-destaques></card-destaques>
    </swiper-slide>
    <swiper-slide>
      <card-destaques></card-destaques>
    </swiper-slide>
    <swiper-slide>
      <card-destaques></card-destaques>
    </swiper-slide>
    <swiper-slide>
      <card-destaques></card-destaques>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import CardDestaques from '@/components/menu/CardDestaques'
export default {
  components: {
    Swiper,
    SwiperSlide,
    CardDestaques
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
.swiper {
  padding: 1rem 0.2rem;
}
.swiper-slide {
  width: fit-content !important;
}
</style>
