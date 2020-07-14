import axios from 'axios'

const apiClient = axios.create({
  baseURL:
    'http://18.231.109.238:8000/api/v1/estabelecimentos/2842a995-f097-43d3-80e8-8870146179c9/',
  withCredentiais: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCardapio() {
    return apiClient.get('/cardapio')
  }
  /*
  getCategorias() {
    return apiClient.get('/categorias')
  },
  getDestaques() {
    return apiClient.get('/destaques')
  }
  */
}
