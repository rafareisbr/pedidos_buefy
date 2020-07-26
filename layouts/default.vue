<template>
  <v-app>
    <v-app-bar app flat dense collapse-on-scroll dark>
      <v-toolbar-title
        style="display: flex; justify-content: center; align-items: center;"
      >
        <img
          src="~/assets/images/LOGO_APP_PIBIBOX.png"
          height="30px"
          width="30px"
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script></script>

<style lang="scss">
.v-app {
  background-color: $vermelho-forte !important;
}
.v-toolbar {
  background-color: $vermelho-forte !important;
}
</style>
