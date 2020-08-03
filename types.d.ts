export interface Pedido {
  estabelecimento: Estabelecimento
  produtos: any[]
  itens: any[]
  adquirir_por: any
  dt_retirada: any
  dt_entrega: any
  entregar_em: any
  status: any
  cupom: string
  total: any
  pagar_com: any
  troco_para: any
}

export interface Estabelecimento {
  id: string
  bio: string
  telefone: string
  logomarca: any
  endereco: Endereco
  cnpj: string
  razao_social: string
  nm_fantasia: string
  site: string
  permite_entrega: boolean
  min_taxa_entrega: number
  max_taxa_entrega: number
  cardapio_imagem: any
  tags: string[]
  nota_avaliacoes: number
  permite_retirada: boolean
  funcionamentos: Funcionamento[]
  funcionamento_hoje: FuncionamentoHoje[]
  aberto: boolean
}

export interface Endereco {
  id: string
  uf: string
  cidade: string
  cep: string
  bairro: string
  logradouro: string
  complemento: string
}

export interface Funcionamento {
  dia: string
  hr_inicial: string
  hr_final: string
}

export interface FuncionamentoHoje {
  hr_inicial: string
  hr_final: string
}

export interface Categoria {
  produtos: Produto[]
  nome: string
}

export interface Produto {
  id: string
  itens: Item[]
  nome: string
  descricao?: string
  valor_original: number
  valor_atual: number
  foto: any
}

export interface Item {
  id: string
  nome: string
  descricao: any
  valor: number
  limite: number
}

export interface Destaque {
  id: string
  itens: Item[]
  nome: string
  descricao?: string
  valor_original: number
  valor_atual: number
  foto: any
}
