<template>
  <div>
    <v-toolbar dense dark>
      <v-toolbar-title>L</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-toolbar>

    <section>
      <div>
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import routesConstants from '@/routes.js'
export default {
  data() {
    return {
      items: routesConstants.routes
    }
  }
}
</script>

<style lang="scss">
  .v-toolbar {
    background-color: #dd0019 !important;
  }
</style>
