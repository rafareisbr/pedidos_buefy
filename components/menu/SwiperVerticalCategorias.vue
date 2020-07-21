<template>
  <div id="categorias_swiper">
    <div
      v-for="categoria in categorias"
      :id="categoria.nome.replace(/ /g, '')"
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
  </div>
</template>

<script>
import CardProduto from '@/components/menu/CardProduto'

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
  height: 100%;
  overflow-y: scroll;
}
#categorias_swiper > * {
  height: 150px;
  width: 100%;
}
</style>
