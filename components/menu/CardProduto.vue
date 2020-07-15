<template>
  <NuxtLink :to="{ name: 'menu-id', params: { id: produto.id } }">
    <div style="position: relative; margin-bottom: 1rem;">
      <div class="card" style="display: flex; ">
        <img
          height="150px"
          width="100px"
          src="https://i.pinimg.com/originals/e3/49/af/e349af2e9e68ba152da20f834cc7fa76.jpg"
          alt="Placeholder image"
        />
        <div
          class=""
          style="padding-left: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem;"
        >
          <div class="is-7">{{ produto.nome }}</div>
          <div style="font-size: 0.8rem;">{{ produto.descricao }}</div>
          <div class="valores">
            <div
              v-if="produto.valor_original !== produto.valor_atual"
              style="font-size: 0.8rem; margin-right: 1.5rem;"
            >
              De R$19.90
            </div>
            <div style="font-size: 0.8rem;">Por R$15.00</div>
          </div>
        </div>
      </div>
      <div class="card-seta">
        <span class="material-icons">
          keyboard_arrow_right
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    produto: {
      type: Object,
      required: true
    }
  },
  methods: {
    verProduto(produto) {
      this.$router.push({
        path: `/menu/${produto.id}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  border-radius: 1rem;
  margin-right: 15px;

  .content {
    padding: 1rem;
  }
  .valores {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
  }
}
.card-seta {
  position: absolute;
  bottom: 37%;
  right: 0.2rem;
  height: 25px;
  width: 25px;
  background-color: #e32929;
  color: white;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
