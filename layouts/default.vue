<template>
  <v-app>
    <v-toolbar dense dark>
      <v-toolbar-title>
        <img
          src="~/assets/images/LOGO_APP_PIBIBOX.png"
          height="30px"
          width="30px"
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
