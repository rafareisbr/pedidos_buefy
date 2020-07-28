<template>
  <div>
    <div v-for="produto of produtosNoCarrinho" :key="produto.produto.id">
      {{ produto.produto.nome }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'detalhes',
  computed: {
    ...mapGetters({
      produtosNoCarrinho: 'carrinho/produtosSelecionados'
    })
  }
}
</script>

<style lang="scss" scoped></style>
