<template>
  <v-app>
    <v-app-bar app dense flat color="white">
      <v-btn icon @click="retornarAoInicio()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

<!--      <v-toolbar-title>Title</v-toolbar-title>-->

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
  export default {
    methods: {
      retornarAoInicio() {
        this.$router.push({ path: '/' })
      }
    }
  }
</script>
