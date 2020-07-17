<template>
  <div id="categorias_swiper">
    <div
      v-for="categoria in categorias"
      :id="categorias.nome"
      :key="categoria.nome"
      class="produto-categoria"
    >
      <h4 class="is-size-5" style="margin-bottom: 0.8rem;">
        {{ categoria.nome }}
      </h4>
      <card-produto
        v-for="produto in categoria.produtos"
        :key="produto.id"
        :produto="produto"
      ></card-produto>
    </div>
    <!--
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
    -->
  </div>
</template>

<script>
import CardProduto from '@/components/menu/CardProduto'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    CardProduto
  },
  props: {
    categorias: {
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
