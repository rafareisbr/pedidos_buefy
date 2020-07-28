export default {
  state: () => ({
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
    }
  },

  mutations: {
    SET_PRODUTO_NO_CARRINHO(state, produto) {
      state.produtosSelecionados.push(produto)
    },
    LIMPAR_CARRINHO(state) {
      state.produtosSelecionados = []
    }
  },

  getters: {
    produtosSelecionados(state) {
      return state.produtosSelecionados
    }
  }
}
