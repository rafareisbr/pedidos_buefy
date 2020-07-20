<template>
  <div>
    <v-img
      src="https://picsum.photos/667/150?random"
      aspect-ratio="1.7"
      height="150px"
      cover
    />
    <v-card class="blue-grey card-menu">
      <v-card-text>
        <div class="nomenota">
          <p class="nomenota__nome font-g font-strong">Pop Mix Gourmet</p>
          <p class="nomenota__bio font-m">Confeitaria Artesanal</p>
          <p class="nomenota__nota font-gg font-strong">5.0</p>
        </div>

        <div class="categoria mb-16">
          <v-chip>Doces</v-chip>
          <v-chip>Guloseimas</v-chip>
        </div>

        <div class="abertotxentregahorarios font-weak">
          <div class="abertotxentregahorarios__tx_entrega">
            R$ 5.00 - R$ 24.00
          </div>
          <div class="abertotxentregahorarios__horarios">
            08:00 às 20:00
          </div>
        </div>

        <div>
          <swiper-categorias
            :categorias="[
              { nome: 'Doces' },
              { nome: 'Guloseimas' },
              { nome: 'Doces' },
              { nome: 'Guloseimas' },
              { nome: 'Doces' },
              { nome: 'Guloseimas' }
            ]"
          />
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import SwiperCategorias from '@/components/menu/SwiperCategorias'
export default {
  components: {
    SwiperCategorias
  }
}
</script>

<style lang="scss" scoped>
.card-menu {
  border-top-left-radius: 2em !important;
  border-top-right-radius: 2em !important;
  margin-top: -50px !important;
  min-height: 100vh !important;
  height: 100% !important;
  padding-top: 1.5rem !important;
}
.nomenota {
  padding-top: 20px;
  margin-top: -20px;
  padding-bottom: 0.5rem;
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
</style>
