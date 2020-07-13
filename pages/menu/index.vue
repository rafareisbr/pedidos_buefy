<template>
  <div>
    <div v-if="loading">Carregando...</div>
    <div v-else>
      <!-- estabelecimento -->
      <div>
        <div class="cardapio__imagem"></div>
        <div class="nomenota column">
          <h4 class="nomenota__nome" style="font-weight: 700">
            {{ estabelecimento.nm_fantasia }}
          </h4>
          <p class="nomenota__bio">{{ estabelecimento.bio }}</p>
          <p class="nomenota__nota is-size-4">
            {{ estabelecimento.nota_avaliacoes | nota }}
          </p>
        </div>

        <div class="column">
          <div v-for="tag in estabelecimento.tags" :key="tag" class="tag">
            {{ tag }}
          </div>
        </div>

        <div class="abertotxentregahorarios column">
          <div class="abertotxentregahorarios__aberto">Aberto agora</div>
          <div class="abertotxentregahorarios__tx_entrega">
            {{ 'R$ ' + estabelecimento.min_taxa_entrega }} -
            {{ 'R$ ' + estabelecimento.max_taxa_entrega }}
          </div>
          <div class="abertotxentregahorarios__horarios">
            {{ estabelecimento.funcionamento_hoje[0].hr_inicial | horario }}
            às
            {{ estabelecimento.funcionamento_hoje[0].hr_final | horario }}
          </div>
        </div>

        <!-- swiper -->
        <div class="column">
          <swiper-categorias height="30px"></swiper-categorias>
        </div>
        <!-- /swiper -->
      </div>
      <!-- /estabelecimento -->
      <div class="column">
        <!-- destaques -->
        <div class="destaques">
          <h4 class="is-size-4">Em destaque</h4>
          <swiper-destaques></swiper-destaques>
        </div>
        <!-- /destaques -->

        <!-- produtos -->
        <div class="produtos">
          <div
            v-for="categoria in categorias"
            :key="categoria.nome"
            class="produto-categoria"
          >
            <h4 class="is-size-5" style="margin-bottom: 0.8rem;">
              {{ categoria.nome }}
            </h4>
            <card-produto
              v-for="produto in categoria.produtos"
              :key="produto.id"
            ></card-produto>
          </div>
        </div>
        <!-- /produtos -->

        <!-- tabs -->
        <div class="tabs">
          <div class="tabs__item" @click="goToCarrinho">
            <div v-if="carrinho && carrinho.length" class="badge">
              {{ carrinho.length }}
            </div>
          </div>
        </div>
        <!-- /tabs -->
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState, mapGetters } from 'vuex'

import CardProduto from '@/components/menu/CardProduto'
import SwiperCategorias from '@/components/menu/SwiperCategorias'
import SwiperDestaques from '@/components/menu/SwiperDestaques'

export default {
  name: 'Menu',
  components: {
    CardProduto,
    SwiperCategorias,
    SwiperDestaques
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
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
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
    },
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`
    }
  }
}
</script>

<style lang="scss" scoped>
.cardapio__imagem {
  background: url(https://picsum.photos/150/300) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100px;
}
.nomenota {
  padding-top: 20px;
  margin-top: -20px;
  background-color: white;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;

  display: grid;
  grid-template-areas: 'nome nota' 'bio nota';
  &__nome {
    grid-area: nome;
  }
  &__bio {
    grid-area: bio;
  }
  &__nota {
    grid-area: nota;
    text-align: right;
  }
}

.abertotxentregahorarios {
  display: grid;
  grid-template-areas: '. aberto' 'txentrega horarios';
  font-weight: 300;
  &__aberto {
    grid-area: aberto;
    text-align: right;
  }
  &__tx_entrega {
    grid-area: txentrega;
  }
  &__horarios {
    grid-area: horarios;
    text-align: right;
  }
}

.produto-categoria {
  margin-bottom: 2rem;
}

.tag {
  background-color: rgb(255, 173, 173);
  color: rgb(241, 38, 38);
  margin-right: 0.5rem;
}
</style>
