<template>
  <div class="fill-height">
    <v-card class="fill-height">
      <v-img
        src="https://picsum.photos/667/150?random"
        class="align-end"
        height="150px"
      >
      </v-img>

      <v-card-text>
        <div class="font-g font-strong mb-4">
          {{ produto ? produto.nome : '' }}
        </div>
        <p class="font-m mb-4">{{ produto ? produto.descricao : '' }}</p>

        <div
          v-if="produto && produto.valor_original && produto.valor_atual"
          class="mb-4"
        >
          <div
            v-if="produto.valor_original !== produto.valor_atual"
            class="font-s mr-2 d-flex justify-space-between full-width"
          >
            <div class="font-m font-weak" style="text-decoration: line-through">
              De R${{ produto.valor_original.toFixed(2) }}
            </div>
            <div>
              Por:
              <span class="font-g" style="color: green;">
                R${{ produto.valor_atual.toFixed(2) }}</span
              >
            </div>
          </div>
          <div v-else>
            <div class="font-weak" style="text-align: right;">
              Valor:
              <span class="font-g font-regular" style="color: green;">
                R${{ produto.valor_atual.toFixed(2) }}</span
              >
            </div>
          </div>
        </div>

        <v-divider class="mb-3" />

        <h3>Itens:</h3>
        <div v-for="item of itens" :key="item.item.id" class="mb-5">
          <div class="produto__item">
            <div>{{ item.item.nome }}</div>
            <input
              id="nome"
              v-model.number="item.quantidade"
              min="0"
              :max="item.item.limite"
              type="number"
            />
            <b-numberinput controls-rounded></b-numberinput>
          </div>
        </div>

        <v-divider class="mb-4"></v-divider>

        <div class="mb-2">Qual a quantidade?</div>
        <b-numberinput class="mb-3" v-model="quantidade" controls-rounded min="1" max="50"></b-numberinput>

        <v-divider class="mb-4"></v-divider>

        <div>
          <div class="mb-2">Alguma Observação?</div>
          <v-textarea
            v-model="observacao"
            outlined
            rows="3"
            placeholder="Informe aqui"
          ></v-textarea>
        </div>

        <div>
          <v-btn block dark @click="addProdutoToCarrinho()"
            >Adicionar à Cesta - R${{ precoTotalProduto | preco }}
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  filters: {
    preco: (value) => {
      if (!value) return '-'
      return value.toFixed(2)
    }
  },
  components: {},
  layout: 'detalhes',
  transition: 'slide-left',
  data: () => {
    return {
      quantidade: 1,
      itens: [],
      observacao: ''
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
    },
    precoTotalItems() {
      let _total = 0

      this.itens.forEach((item) => {
        _total += item.item.valor * item.quantidade
      })

      return _total
    },
    precoTotalProduto() {
      if (this.produto) {
        return (
          this.quantidade * (this.produto.valor_atual + this.precoTotalItems)
        )
      }
      return 0.0
    }
  },
  methods: {
    addProdutoToCarrinho() {
      const _produto = {
        produto: this.produto,
        itens: this.itens,
        quantidade: this.quantidade,
        observacao: this.observacao
      }
      this.$store.dispatch('carrinho/addProdutoToCarrinho', _produto)
      this.$router.push({
        path: '/'
      })
    },
    organizaItemsDoProdutoEncontrado(produto) {
      if (this.itens && this.itens.length > 0) {
        this.itens = produto.itens.map((item) => {
          return { item, quantidade: 0 }
        })
      }
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
.produto__item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.v-btn {
  background-color: $vermelho-forte !important;
}
</style>
