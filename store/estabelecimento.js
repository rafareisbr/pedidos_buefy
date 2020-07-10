import EstabelecimentoService from '@/services/EstabelecimentoService'

export default {
  state: () => ({
    estabelecimento: {},
    categorias: [],
    destaques: [],
    error: null,
    loading: true
  }),

  actions: {
    fetchEstabelecimentoCategorias({ commit }) {
      commit('SET_LOADING', true)
      EstabelecimentoService.getEstabelecimento()
        .then((estabelecimento) => {
          commit('SET_ESTABELECIMENTO', estabelecimento.data)
          EstabelecimentoService.getCategorias().then((categorias) => {
            commit('SET_CATEGORIAS', categorias.data)
            EstabelecimentoService.getDestaques().then((destaques) => {
              commit('SET_DESTAQUES', destaques.data)
              commit('SET_LOADING', false)
            })
          })
        })
        .catch((err) => {
          commit('SET_FETCH_ERROR', err)
          commit('SET_LOADING', false)
        })
    }
  },

  mutations: {
    SET_LOADING(state, value) {
      state.loading = value
    },
    SET_ESTABELECIMENTO(state, estabelecimento) {
      state.estabelecimento = estabelecimento
    },
    SET_CATEGORIAS(state, categorias) {
      state.categorias = categorias
    },
    SET_DESTAQUES(state, destaques) {
      state.destaques = destaques
    },
    SET_FETCH_ERROR(state, error) {
      state.error = error
    }
  },

  getters: {
    estabelecimento(state) {
      return state.estabelecimento
    },

    categorias(state) {
      return state.categorias
    },

    destaques(state) {
      return state.destaques
    },

    loading(state) {
      return state.loading
    }
  }
}
