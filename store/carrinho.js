export default {
  state: () => ({
    dialog: false,
    produtosSelecionados: [],
    cliente: {
      primeiro_nome: 'Sebastião',
      ultimo_nome: 'Dourado',
      telefone: '(62) 99654-2332'
    },
    adquirir_por: 'E',
    dt_adquirir: null,
    entregar_em: 'Rua 85 Q 23 Lt 9 Setor Marista',
    pagamento: 'D',
    troco_para: 50
  }),

  actions: {
    addProdutoToCarrinho({ commit }, produto) {
      commit('SET_PRODUTO_NO_CARRINHO', produto)
    },
    limparCarrinho({ commit }) {
      commit('LIMPAR_CARRINHO')
    },
    alterarQuantidadeDeProduto({ commit }, { quantidade, produto }) {
      if (quantidade === 0) {
        commit('SHOW_DIALOG')
      } else {
        commit('SET_PRODUTO_BY_ID', { quantidade, produto })
      }
    },
    removerProduto({ commit }, id) {
      commit('REMOVER_ITEM_NO_CARRINHO', id)
    },
    fecharDialog({ commit }) {
      commit('HIDE_DIALOG')
    }
  },

  mutations: {
    SET_PRODUTO_NO_CARRINHO(state, produto) {
      state.produtosSelecionados.push(produto)
    },
    LIMPAR_CARRINHO(state) {
      state.produtosSelecionados = []
    },
    SET_PRODUTO_BY_ID(state, { produto, quantidade }) {
      const produtoIndex = state.produtosSelecionados.findIndex(
        (item) => item.id === produto.id
      )
      state.produtosSelecionados[produtoIndex].quantidade = quantidade
    },
    REMOVER_ITEM_NO_CARRINHO(state, id) {
      state.produtosSelecionados = state.produtosSelecionados.filter(
        (item) => item.id !== id
      )
    },
    SHOW_DIALOG(state) {
      state.dialog = true
    },
    HIDE_DIALOG(state) {
      state.dialog = false
    }
  },

  getters: {
    produtosSelecionados(state) {
      return state.produtosSelecionados
    },
    dialog(state) {
      return state.dialog
    }
  }
}
