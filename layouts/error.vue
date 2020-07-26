<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Página não encontrada</h1>
    <h1 v-else>Ocorreu um erro</h1>
    <nuxt-link to="/">Início</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>
