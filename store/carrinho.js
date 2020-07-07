export const state = () => ({
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
})

export const mutations = {
  addProdutoToCarrinho(state, produto) {
    state.produtosSelecionados.push(produto)
  },
  limparCarrinho(state) {
    state.produtosSelecionados = []
  }
}
