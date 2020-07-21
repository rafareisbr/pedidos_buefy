<template>
  <v-app>
    <v-toolbar dense dark>
      <v-toolbar-title>
        <v-img
          src="../assets/images/LOGO_APP_PIBIBOX.png"
          aspect-ratio="1.7"
          height="150px"
          cover
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-toolbar>

    <section>
      <v-main>
        <nuxt />
      </v-main>
    </section>
  </v-app>
</template>

<script>
import routesConstants from '@/routes.js'
import 'swiper/swiper.scss'

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
