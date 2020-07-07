<template>
  <div>
    <div v-if="loading">Carregando...</div>
    <div v-else>
      <div v-for="categoria in categorias" :key="categoria.id">
        <card-produto
          v-for="produto in categoria.produtos"
          :key="produto.id"
          :produto="produto"
        />
      </div>
      <div class="tabs">
        <div class="tabs__item" @click="goToCarrinho">
          <div v-if="carrinho && carrinho.length" class="badge">
            {{ carrinho.length }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import CardProduto from '@/components/menu/CardProduto'
export default {
  name: 'Menu',
  components: {
    CardProduto
  },
  props: {},
  computed: {
    ...mapState({
      carrinho: 'carrinho/carrinho'
    }),
    ...mapGetters({
      categorias: 'estabelecimento/categorias',
      estabelecimento: 'estabelecimento/estabelecimento',
      loading: 'estabelecimento/loading'
    })
  },
  created() {
    this.$store.dispatch('estabelecimento/fetchEstabelecimentoCategorias')
  },
  methods: {
    verProduto(produto) {
      this.$router.push({
        path: `/menu/${produto.id}`
      })
    },
    goToCarrinho() {
      this.$router.push({
        path: '/cliente/carrinho'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  &__item {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .badge {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: white;
    height: 20px;
    width: 20px;
    bottom: 10px;
    right: 43%;
    border-radius: 50px;
    z-index: 0;
    font-size: 13px;
  }
}
</style>
