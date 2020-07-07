export const state = () => ({
  estabelecimento: {
    id: '4427e78f-a03c-4b74-9b63-fb3c1c33d474',
    bio: 'A melhor comida do mundo!',
    telefone: '6289098897',
    avatar: null,
    endereco: {
      id: '84fccddc-9cda-4893-85ff-674518978c9c',
      uf: 'GO',
      cidade: 'GOIÂNIA',
      cep: '7865292',
      bairro: 'Santa Genoveva',
      logradouro: 'Rua da Felicidade Quadra 23 Lote 11',
      complemento: ''
    },
    nr_cnpj: '23456789802690',
    razao_social: 'Junior 123',
    nm_fantasia: 'Junior Restaurante',
    site: 'junior.com.br',
    pg_dinheiro: true,
    pg_cartao: true,
    permite_entrega: true,
    taxa_entrega: null,
    permite_retirada: true,
    avaliacao: null,
    funcionamentos: [
      {
        id: 'ab48f7d1-67b4-4972-ac00-7809b0b5a0ab',
        dia: 'SEG',
        hr_inicial: '08:00:00',
        hr_final: '18:00:00'
      },
      {
        id: 'ad41669d-dbe4-42cd-a342-613fcc3bcca6',
        dia: 'QUI',
        hr_inicial: '08:00:00',
        hr_final: '18:00:00'
      }
    ]
  },
  categorias: [
    {
      id: '5e78e836-6de2-43b3-b67e-c4212855902d',
      nome: 'Marmitex',
      produtos: [
        {
          id: 'b953bdeb-05ee-48ad-9c02-00e615ee52b4',
          itens: [
            {
              id: '3b3a7ccf-13a8-4930-94cd-8efac2d8fdd8',
              nome: 'Arroz Branco',
              descricao: null,
              valor: 0.0
            },
            {
              id: '6b35da43-9244-43aa-865b-561742c97198',
              nome: 'Feijão Tropeiro',
              descricao: null,
              valor: 0.0
            },
            {
              id: '6e81495a-e2c1-4762-9748-b7a789ac34a0',
              nome: 'Carne Bovina',
              descricao: null,
              valor: 0.0
            },
            {
              id: '4e9cd766-4f88-413f-b3da-4689b329331d',
              nome: 'Macarrão Bolonhesa',
              descricao: null,
              valor: 0.0
            }
          ],
          nome: 'Marmitex Padrão',
          descricao:
            'Inserir os itens que deseja na sua marmitex. O valor é fixo.',
          valor: 13.0,
          foto:
            'https://conteudo.imguol.com.br/c/entretenimento/08/2017/11/29/remedios-medicamento-1511972729154_v2_615x300.jpg'
        },
        {
          id: '2dc4df2f-ba9d-42ec-9fc3-c254ec208942',
          itens: [],
          nome: 'Marmitex Executiva',
          descricao: 'Preço fixo',
          valor: 20.0,
          foto: null
        }
      ]
    }
  ]
})

export const mutations = {}
