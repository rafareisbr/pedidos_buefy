<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="categoria of categorias"
      :key="categoria.nome"
      class="tag"
      >{{ categoria.nome }}</swiper-slide
    >
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
  props: {
    categorias: {
      type: Array,
      default: () => []
    }
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
