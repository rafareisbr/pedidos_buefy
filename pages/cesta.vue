<template>
  <div>
    <v-app-bar app dense flat color="white">
      <v-btn icon @click="voltar()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>Sua cesta</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon class="hidden-xs-only">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container id="content">
      <div>
        <div class="d-flex">
          <v-avatar color="teal" size="48">
            <span class="white--text headline">48</span>
          </v-avatar>
          <h2>{{ estabelecimento.nm_fantasia }}</h2>
        </div>
        <p>Voltar a loja</p>
      </div>

      <v-divider />

      <h1>Itens Adicionados</h1>
      <div
        v-for="produto in produtosNoCarrinho"
        :key="produto.produto.id"
        style="display: flex; justify-content: space-between; align-items: center;"
      >
        <div
          style="display: flex; align-items: center; justify-content: space-between;"
        >
          <div class="mr-2">{{ produto.produto.nome }}</div>
          <div>{{ produto.produto.preco }}</div>
        </div>
        <div>
          <b-numberinput
            :value="produto.quantidade"
            controls-rounded
            max="50"
            min="0"
            size="is-small"
            @input="onInputProdutoQuantidade($event, produto)"
          ></b-numberinput>
        </div>

        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            <v-card-title class="headline"
              >Tem certeza que deseja remover o item do carrinho?</v-card-title
            >
            <v-card-text
              >Você irá remover o item do carrinho. Tem certeza?</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="fecharDialog">Não</v-btn>
              <v-btn text @click="removerItem(produto.id)">Sim</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'cru',
  computed: {
    ...mapGetters({
      estabelecimento: 'estabelecimento/estabelecimento',
      dialog: 'carrinho/dialog',
      produtosNoCarrinho: 'carrinho/produtosSelecionados'
    })
  },
  methods: {
    voltar() {
      this.$router.push('/')
    },
    onInputProdutoQuantidade(quantidade, produto) {
      this.$store.dispatch('carrinho/alterarQuantidadeDeProduto', {
        quantidade,
        produto
      })
    },
    removerItem(produtoId) {
      this.$store.dispatch('carrinho/removerProduto', produtoId)
    },
    fecharDialog() {
      this.$store.dispatch('carrinho/fecharDialog')
    }
  }
}
</script>

<style lang="scss" scoped></style>
