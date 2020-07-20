<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="categoria of categorias"
      :key="categoria.id"
      class="tag"
    >
      <div
        height="100%"
        width="100%"
        @click="selecionaCategoria(categoria.nome)"
      >
        {{ categoria.nome }}
      </div>
    </swiper-slide>
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
  },
  methods: {
    selecionaCategoria(categoriaNome) {
      const semEspacos = categoriaNome.replace(/ /g, '')
      this.$emit('clicked', `#${semEspacos}`)
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
  cursor: pointer;
}
</style>
