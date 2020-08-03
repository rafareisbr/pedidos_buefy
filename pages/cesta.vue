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

    <div id="content">
      <div>
        <div class="d-flex">
          <v-avatar color="teal" size="48">
            <span class="white--text headline">48</span>
          </v-avatar>
          <h2>{{ estabelecimento.nm_fantasia }}</h2>
        </div>
        <p>Voltar a loja</p>
      </div>

      {{ produtos }}
      <v-list two-line subheader>
        <v-list-item
          v-for="produto in produtosNoCarrinho"
          :key="produto.produto.id"
          @click="() => {}"
        >
          <v-list-item-avatar>
            <v-img src="https://picsum.photos/667/150?random"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              v-text="produto.produto.nome"
            ></v-list-item-title>
            <v-list-item-subtitle
              v-text="produto.produto.descricao"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <b-numberinput
              class="mb-3"
              size="is-small"
              v-model="produto.quantidade"
              controls-rounded
              min="1"
              max="50"
            ></b-numberinput>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <h1>Itens Adicionados</h1>
      <div v-for="produto of produtosNoCarrinho" :key="produto.produto.id">
        {{ produto.produto.nome }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'cru',
  computed: {
    ...mapGetters({
      estabelecimento: 'estabelecimento/estabelecimento',
      produtosNoCarrinho: 'carrinho/produtosSelecionados'
    })
  },
  methods: {
    voltar() {
      this.$router.push('/')
    }
  },
}
</script>

<style lang="scss" scoped></style>
