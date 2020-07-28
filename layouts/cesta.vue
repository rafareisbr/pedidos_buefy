<template>
  <v-app>
    <v-app-bar app dense flat color="white">
      <v-btn icon @click="retornarAoInicio()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>{{
        estabelecimento ? estabelecimento.nome : ''
      }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon class="hidden-xs-only">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      ...mapState({
        estabelecimento: 'estabelecimento'
      })
    }
  },
  methods: {
    retornarAoInicio() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
