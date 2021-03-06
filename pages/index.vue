<template>
  <div>
    <v-img
      src="https://picsum.photos/667/150?random"
      aspect-ratio="1.7"
      height="150px"
      cover
    />

    <v-card class="card-menu fill-height">
      <v-card-text class="pb-16">
        <div class="nomenota">
          <p class="nomenota__nome font-g font-strong">
            {{ estabelecimento.nm_fantasia }}
          </p>
          <p class="nomenota__bio font-m">{{ estabelecimento.bio }}</p>
          <div
            class="nomenota__nota font-gg font-strong d-flex align-center justify-end"
          >
            <v-rating
              v-model="estabelecimento.nota_avaliacoes"
              background-color="indigo lighten-3"
              color="yellow"
              length="1"
              :half-increments="true"
            ></v-rating>
            <span>{{ estabelecimento.nota_avaliacoes | nota }}</span>
          </div>
        </div>

        <div class="categoria">
          <v-chip v-for="tag in estabelecimento.tags" :key="tag" class="mr-1"
            >{{ tag }}</v-chip>
        </div>

        <div class="abertotxentregahorarios font-weak">

          <div class="abertotxentregahorarios__tx_entrega">
            {{ 'R$ ' + estabelecimento.min_taxa_entrega }} -
            {{ 'R$ ' + estabelecimento.max_taxa_entrega }}
          </div>
          <div v-if="estabelecimento.funcionamento_hoje">
            Fechado hoje
          </div>
          <div
            v-else-if="!estabelecimento.funcionamento_hoje === []"
            class="abertotxentregahorarios__horarios"
          >
            {{ estabelecimento.funcionamento_hoje[0].hr_inicial | horario }}
            às
            {{ estabelecimento.funcionamento_hoje[0].hr_final | horario }}
          </div>
        </div>

        <div class="mb-8">
          <swiper-categorias
            height="30px"
            :categorias="categorias"
            @clicked="slideTo($event)"
          />
        </div>

        <div class="destaques mb-5">
          <div class="font-g font-regular">Em destaque</div>
          <swiper-destaques :destaques="destaques"></swiper-destaques>
        </div>

        <!-- produtos -->
        <div class="produtos">
          <swiper-vertical-categorias
            ref="swiperCategorias"
            :categorias="categorias"
          >
          </swiper-vertical-categorias>
        </div>
        <!-- /produtos -->

        <v-btn
          v-if="produtosNoCarrinho.length > 0"
          fixed
          height="50"
          dark
          bottom
          class="btn__carrinho"
          @click="navegarParaCesta()"
        >
          <v-row
            class="px-2 py-4 font-weight-light"
            align="center"
            justify="space-between"
          >
            <div>
              <v-icon size="12">fas fa-shopping-basket</v-icon>
              <span>MINHA CESTA</span>
            </div>
            <div>R$ {{ valorTotalProdutosSelecionados }}</div>
          </v-row>
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'

import SwiperCategorias from '@/components/menu/SwiperCategorias'
import SwiperDestaques from '@/components/menu/SwiperDestaques'
import SwiperVerticalCategorias from '@/components/menu/SwiperVerticalCategorias'

export default {
  components: {
    SwiperCategorias,
    SwiperDestaques,
    SwiperVerticalCategorias
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
  computed: {
    ...mapGetters({
      categorias: 'estabelecimento/categorias',
      estabelecimento: 'estabelecimento/estabelecimento',
      destaques: 'estabelecimento/destaques',
      loading: 'estabelecimento/loading',
      produtosNoCarrinho: 'carrinho/produtosSelecionados',
      valorTotalProdutosSelecionados: 'carrinho/valorTotalProdutosSelecionados',
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
    navegarParaCesta() {
      this.$router.push({
        path: `/cesta`
      })
    },
    goToCarrinho() {
      this.$router.push({
        path: '/cliente/carrinho'
      })
    },
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`
    },
    slideTo(categoriaId) {
      this.$refs.swiperCategorias.slideTo(categoriaId)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-menu {
  border-top-left-radius: 2em !important;
  border-top-right-radius: 2em !important;
  margin-top: -50px !important;
  width: 100%;
  padding-top: 1.5rem !important;
}

.nomenota {
  padding-top: 20px;
  margin-top: -20px;
  padding-bottom: 0.5rem;
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

.categoria {
  margin-bottom: 1rem;
}

.abertotxentregahorarios {
  display: grid;
  grid-template-areas: '. aberto' 'txentrega horarios';
  margin-bottom: 1rem;

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

.v-chip {
  background-color: $vermelho-fraco !important;
  color: $vermelho-forte !important;
}

.v-chip-active {
  color: $vermelho-fraco !important;
  background-color: $vermelho-forte !important;
}

.btn__carrinho {
  background-color: $vermelho-forte !important;
  width: calc(100% - 2rem);
  z-index: 5;
}
</style>
