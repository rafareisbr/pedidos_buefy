<template>
  <div>
    <button @click="slideTo(19)">Slide to</button>
    <swiper-vertical-categorias ref="verticalSwiper"></swiper-vertical-categorias>
  </div>
</template>

<script>
  import SwiperVerticalCategorias from '@/components/menu/SwiperVerticalCategorias'
  export default {
    components: {
      SwiperVerticalCategorias,
    },
    methods: {
      slideTo(slideIndex) {
        this.$refs.verticalSwiper.slideTo('#seletor')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
