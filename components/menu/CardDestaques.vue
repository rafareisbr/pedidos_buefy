<template>
  <div style="position: relative;">
    <div class="card">
      <div class="card-image">
        <v-img
          src="https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2018/07/23/brigadeiro-vegano.jpg"
          aspect-ratio="1.8"
        />
      </div>
      <div class="content">
        <div class="font-g font-strong pb-2">{{ destaque.nome }}</div>
        <div
          v-if="destaque.valor_atual !== destaque.valor_original"
          class="valores"
        >
          <div class="">De R$15.00</div>
          <div class="">Por R$15.00</div>
        </div>
        <div v-else class="valores">
          <div class="">Por R$15.00</div>
        </div>
      </div>
    </div>
    <div class="card-seta">
      <span class="material-icons">
        keyboard_arrow_right
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    destaque: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  border-radius: 1rem;
  margin-right: 15px;
  min-width: 240px;
  height: 180px;
}

.content {
  padding: 0.5rem;
}

.valores {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
}

.card-seta {
  position: absolute;
  bottom: 40%;
  right: 0rem;
  height: 35px;
  width: 35px;
  background-color: #e32929;
  color: white;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
