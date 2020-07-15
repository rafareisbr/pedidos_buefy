<template>
  <div>
    <h1>teste</h1>
    <div v-if="produto">
      <div style="position: relative;">
        <div>
          <img
            :src="
              produto.foto ||
                'https://semantic-ui.com/images/wireframe/image.png'
            "
            style="display: block; object-fit: cover; z-index: 0;"
            height="150px"
            width="100%"
          />
        </div>

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
  components: {},
  data: () => {
    return {
      quantidade: 1,
      itens: []
    }
  },
  computed: {
    produto() {
      /*
      const { categorias } = this.$store.state.menu
      let prod = null
      categorias.forEach((categoria) => {
        categoria.produtos.forEach((produto) => {
          if (produto.id === this.$route.params.id) {
            prod = produto
          }
        })
      })
      this.defineItens(prod)
      return prod
      */
      return null
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
    defineItens(produto) {
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
.blank {
  position: absolute;
  z-index: 5;
  background: white;
  width: 100%;
  margin-top: -15px;
  padding: 25px 15px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-radius: 25px;
}
</style>
