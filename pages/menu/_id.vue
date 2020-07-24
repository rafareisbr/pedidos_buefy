<template>
  <div>
    <div v-if="produto">
      <div>
<!--        <div>-->
<!--          <img-->
<!--            :src="-->
<!--              produto.foto ||-->
<!--                'https://semantic-ui.com/images/wireframe/image.png'-->
<!--            "-->
<!--            style="display: block; object-fit: cover; z-index: 0;"-->
<!--            height="150px"-->
<!--            width="100%"-->
<!--          />-->
<!--        </div>-->

        <div class="blank">
          <div style="margin-bottom: 20px;">{{ produto.descricao }}</div>

          <!-- Itens/Opções de escolha -->
          <div v-show="itens.length">
            <div v-for="item of itens" :key="item.item.id">
              <div
                style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #ccc;"
              >
                <div>{{ item.item.nome }}</div>
                <input id="nome" v-model="item.checked" type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <input v-model="quantidade" :min="1" :max="100" />
        <button
          type="button"
          @click="addProdutoToCarrinho({ produto, itens, quantidade })"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'slide-left',
  components: {},
  data: () => {
    return {
      quantidade: 1,
      itens: []
    }
  },
  computed: {
    produto() {
      const { categorias } = this.$store.state.menu

      let _produto = null

      categorias.forEach((categoria) => {
        categoria.produtos.forEach((produto) => {
          if (produto.id === this.$route.params.id) {
            _produto = produto
          }
        })
      })

      this.organizaItemsDoProdutoEncontrado(_produto)
      return _produto
    }
  },
  methods: {
    addProdutoToCarrinho(produto) {
      this.$store.commit('carrinho/addProdutoToCarrinho', produto)
      // this.$store.dispatch('carrinho/addProdutoToCarrinho', produto)
      // Toast('Item adicionado ao carrinho')
      this.$router.push({
        path: '/cliente/carrinho'
      })
    },
    organizaItemsDoProdutoEncontrado(produto) {
      this.itens = produto.itens.map((item) => {
        return { item, checked: false }
      })
    },
    onClickVoltar() {
      this.$router.push({
        path: '/cliente/menu'
      })
    }
  }
}
</script>

<style scoped>
</style>
