<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="destaque of destaques" :key="destaque.id">
      <card-destaques :destaque="destaque"></card-destaques>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import CardDestaques from '@/components/menu/CardDestaques'
export default {
  components: {
    Swiper,
    SwiperSlide,
    CardDestaques
  },
  props: {
    destaques: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10
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
