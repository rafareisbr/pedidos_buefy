<template>
  <div style="position: relative;">
    <div class="card">
      <div class="card-image">
        <figure class="image is-2by1">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="content">
        <div class="is-6 pb-2">Cone mix trufado</div>
        <div class="valores">
          <div style="margin-right: 1.5rem;">De R$19.90</div>
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
  props: {}
}
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  border-radius: 1rem;
  margin-right: 15px;

  .content {
    padding: 0.5rem;

    .valores {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
    }
  }
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
