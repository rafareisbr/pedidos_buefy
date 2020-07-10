<template>
  <div>
    <div v-if="loading">Carregando...</div>
    <div v-else>
      <!-- estabelecimento -->
      <div>
        <div class="nomenota">
          <h4 class="nomenota__nome">{{ estabelecimento.nm_fantasia }}</h4>
          <p class="nomenota__bio">{{ estabelecimento.bio }}</p>
          <p class="nomenota__nota">
            {{ estabelecimento.nota_avaliacoes | nota }}
          </p>
        </div>

        <div>
          <div v-for="tag in estabelecimento.tags" :key="tag" class="tag">
            {{ tag }}
          </div>
        </div>

        <div class="abertotxentregahorarios">
          <div class="abertotxentregahorarios__aberto">Aberto Agora</div>
          <div class="abertotxentregahorarios__tx_entrega">
            {{ 'R$ ' + estabelecimento.min_taxa_entrega }} -
            {{ 'R$ ' + estabelecimento.max_taxa_entrega }}
          </div>
          <div class="abertotxentregahorarios__horarios">
            {{ estabelecimento.funcionamento_hoje[0].hr_inicial | horario }} às
            {{ estabelecimento.funcionamento_hoje[0].hr_final | horario }}
          </div>
        </div>
      </div>
      <!-- /estabelecimento -->
      <!-- destaques -->
      <h4>Em</h4>
      <card-produto
        v-for="destaque in destaques"
        :key="destaque.id"
        :produto="destaque"
      />
      <!-- /destaques -->
      <br />
      <h4>produtos</h4>
      <div v-for="categoria in categorias" :key="categoria.id">
        <h4>{{ categoria.nome }}</h4>
        <card-produto
          v-for="produto in categoria.produtos"
          :key="produto.id"
          :produto="produto"
        />
      </div>
      <div class="tabs">
        <div class="tabs__item" @click="goToCarrinho">
          <div v-if="carrinho && carrinho.length" class="badge">
            {{ carrinho.length }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState, mapGetters } from 'vuex'
import CardProduto from '@/components/menu/CardProduto'
export default {
  name: 'Menu',
  components: {
    CardProduto
  },
  filters: {
    horario: (value) => {
      if (!value) return '-'
      return `${moment.utc(value, 'HH:mm:ss').format('HH:mm')}hrs`
    },
    nota: (value) => {
      if (!value) return '-'
      return value.toFixed(1)
    }
  },
  props: {},
  computed: {
    ...mapState({
      carrinho: 'carrinho/carrinho'
    }),
    ...mapGetters({
      categorias: 'estabelecimento/categorias',
      estabelecimento: 'estabelecimento/estabelecimento',
      destaques: 'estabelecimento/destaques',
      loading: 'estabelecimento/loading'
    })
  },
  created() {
    this.$store.dispatch('estabelecimento/fetchEstabelecimentoCategorias')
  },
  methods: {
    verProduto(produto) {
      this.$router.push({
        path: `/menu/${produto.id}`
      })
    },
    goToCarrinho() {
      this.$router.push({
        path: '/cliente/carrinho'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  &__item {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .badge {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: white;
    height: 20px;
    width: 20px;
    bottom: 10px;
    right: 43%;
    border-radius: 50px;
    z-index: 0;
    font-size: 13px;
  }
}

.nomenota {
  display: grid;
  grid-template-areas: 'nome .' 'bio nota';
  &__nome {
    grid-area: nome;
  }
  &__bio {
    grid-area: bio;
  }
  &__nota {
    grid-area: nota;
  }
}

.abertotxentregahorarios {
  display: grid;
  grid-template-areas: '. aberto' 'txentrega horarios';
  &__aberto {
    grid-area: aberto;
  }
  &__txentrega {
    grid-area: txentrega;
  }
  &__horarios {
    grid-area: horarios;
  }
}
</style>
