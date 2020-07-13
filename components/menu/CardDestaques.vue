<template>
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
      <p class="title is-5">Cone mix trufado</p>
      <p class="subtitle is-6">De R$19.90 por R$15.00</p>
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

  .content {
    padding: 0.5rem;
  }
}
</style>
