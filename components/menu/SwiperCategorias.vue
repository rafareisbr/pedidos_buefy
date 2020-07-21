<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="categoria of categorias" :key="categoria.id">
      <v-chip class="ma-2" @click="selecionaCategoria(categoria.nome)">
        {{ categoria.nome }}
      </v-chip>
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
        spaceBetween: 10
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
.swiper {
  display: flex !important;
}

.swiper-slide {
  width: fit-content !important;
}

.v-chip {
  border: 1px solid $vermelho-forte;
  background-color: #fff !important;
  color: $vermelho-forte !important;
}

.v-chip-active {
  color: $vermelho-fraco !important;
  background-color: $vermelho-forte !important;
}
</style>
