<template>
  <div>
    <v-card>
      <v-img
        src="https://semantic-ui.com/images/wireframe/image.png"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title>Titulo</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>

        <v-divider />

        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

  </div>

  <!--  <div>-->
  <!--    <v-card-text class="fill-height">dosaidnsoaidns</v-card-text>-->
  <!--    <div v-if="produto">-->
  <!--      <div>-->
  <!--        <img-->
  <!--          :src="-->
  <!--            produto.foto || 'https://semantic-ui.com/images/wireframe/image.png'-->
  <!--          "-->
  <!--          style="display: block; object-fit: cover; z-index: 0;"-->
  <!--          height="150px"-->
  <!--          width="100%"-->
  <!--        />-->
  <!--      </div>-->


  <!--      <div class="blank">-->
  <!--        <div style="margin-bottom: 20px;">{{ produto.descricao }}</div>-->

  <!--        &lt;!&ndash; Itens/Opções de escolha &ndash;&gt;-->
  <!--        <div v-show="itens.length">-->
  <!--          <div v-for="item of itens" :key="item.item.id">-->
  <!--            <div-->
  <!--              style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #ccc;"-->
  <!--            >-->
  <!--              <div>{{ item.item.nome }}</div>-->
  <!--              <input id="nome" v-model="item.checked" type="checkbox"/>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->

  <!--    <div>-->
  <!--      <input v-model="quantidade" :min="1" :max="100"/>-->
  <!--      <button-->
  <!--        type="button"-->
  <!--        @click="addProdutoToCarrinho({ produto, itens, quantidade })"-->
  <!--      >-->
  <!--        Adicionar ao Carrinho-->
  <!--      </button>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    layout:'detalhes',
    transition: 'slide-left',
    components: {},
    data: () => {
      return {
        quantidade: 1,
        itens: []
      }
    },
    computed: {
      ...mapGetters({
        categorias: 'estabelecimento/categorias'
      }),
      produto() {
        let _produto = null

        this.categorias.forEach((categoria) => {
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

<style lang="scss" scoped>

</style>
