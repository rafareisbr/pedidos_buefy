import * as uuid from 'uuid'

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
    addItemToCarrinho({ commit }, item) {
      item.id = uuid.v4()
      commit('ADD_ITEM_CARRINHO', item)
    },
    updateItemToCarrinho({ commit }, { id, item }) {
      commit('UPDATE_ITEM_CARRINHO', { id, item })
    },
    removeItemFromCarrinho({ commit }, id) {
      commit('REMOVE_ITEM_CARRINHO', id)
    },
    limparCarrinho({ commit }) {
      commit('LIMPAR_CARRINHO')
    }
  },

  mutations: {
    ADD_ITEM_CARRINHO(state, produto) {
      state.produtosSelecionados.push(produto)
    },
    UPDATE_ITEM_CARRINHO(state, { id, item }) {
      const itemEncontrado = this.itemById(id)
      if(itemEncontrado) {
        state.produtosSelecionados = state.produtosSelecionados.filter(
          (item) => item.id === itemEncontrado.id
        )
        state.produtosSelecionados.push(item)
      }
    },
    REMOVE_ITEM_CARRINHO(state, id) {
      state.produtosSelecionados = state.produtosSelecionados.filter(
        (item) => item.id === id
      )
    },
    LIMPAR_CARRINHO(state) {
      state.produtosSelecionados = []
    }
  },

  getters: {
    produtosSelecionados(state) {
      return state.produtosSelecionados
    },
    itemById: (state) => (id) => {
      return state.produtosSelecionados((item) => item.id === id)
    }
  }
}
