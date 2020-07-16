<template>
  <div id="categorias_swiper">
    <div id="1">1</div>
    <div id="2">1</div>
    <div id="3">1</div>
    <div id="4">1</div>
    <div id="5">5</div>
    <div id="6">1</div>
    <div id="7">1</div>
    <div id="seletor">seletor</div>
    <div id="9">1</div>
    <div id="10">1</div>
  </div>
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
  props: {
    destaques: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {
    slideTo(element) {
      this.$scrollTo(element, { container: '#categorias_swiper' })
    }
  }
}
</script>

<style lang="scss">
#categorias_swiper {
  height: 300px;
  overflow-y: scroll;;
}
#categorias_swiper > * {
  height: 150px;
}
</style>
