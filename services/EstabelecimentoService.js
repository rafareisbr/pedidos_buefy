import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentiais: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEstabelecimento() {
    return apiClient.get('/estabelecimento')
  },
  getCategorias() {
    return apiClient.get('/categorias')
  },
  getDestaques() {
    return apiClient.get('/destaques')
  }
}
