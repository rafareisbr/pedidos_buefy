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

      <h3>Itens Adicionados</h3>
      <div
        v-for="item in produtosNoCarrinho"
        :key="item.id"
        style="display: flex; justify-content: space-between; align-items: center;"
      >
        <div
          style="display: flex; align-items: center; justify-content: space-between;"
        >
          <div class="mr-2">{{ item.produto.nome }}</div>
          <div>{{ item.produto.preco }}</div>
        </div>
        <div>
          <vs-input-number
            :value="item.quantidade"
            :is-disabled="true"
            @input="updateItem($event, item)"
          />
        </div>

      </div>
    </v-container>

    <v-dialog v-model="dialog" persistent max-width="310">
      <v-card>
        <v-card-title style="line-break: normal !important;">
          Você tem certeza?
        </v-card-title>
        <v-card-text
        >Você confirma que está removendo o item da sua
          cesta?</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="fecharDialog">Não</v-btn>
          <v-btn text @click="removerItem">Sim</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    lookupQuantidade(id) {
      return this.$store.getters['carrinho/getItemById'](id).quantidade
    },
    updateItem(event, item) {
      const quantidade = parseInt(event)
      this.$store.dispatch('carrinho/updateItemFromCarrinho', {
        quantidade,
        item
      })
    },
    removerItem() {
      this.$store.dispatch('carrinho/removeItemFromCarrinho')
    },
    fecharDialog() {
      this.$store.dispatch('carrinho/fecharDialog')
    }
  },
  created() {
    this.$store.dispatch('carrinho/fecharDialog')
  }
}
</script>

<style lang="scss" scoped></style>
