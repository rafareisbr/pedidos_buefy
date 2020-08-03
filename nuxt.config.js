import colors from 'vuetify/lib/util/colors';

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Pibibox',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'Pibibox',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/pibibox.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {},
  /*
   ** Global CSS
   */
  css: ['assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/awesomeSwiper.js', ssr: false },
    { src: '@/plugins/vueSax.js', ssr: true }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',

    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Using scss globally
    '@nuxtjs/style-resources',
    // Material Icons embeded
    'nuxt-material-design-icons',
    // Vue scroll to
    ['vue-scrollto/nuxt', { duration: 300 }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.API_URL,
    proxy: true
  },

  proxy: {
    '/api/': 'http://localhost:5000'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ['vue-cli-plugin-vuetify-preset-crane'],
    extend(config, ctx) {}
  },

  router: {
    /*
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'inicio',
        path: '',
        component: resolve(__dirname, 'pages/menu/index.vue')
      })
    }
    */
  },

  /** Configuração da biblioteca (plugin) que coloca o scss globalmente */
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  vuetify: {
    preset: 'vue-cli-plugin-vuetify-preset-crane/preset',
    theme: {
      themes: {
        light: {
          primary: colors.purple,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3
        },
        dark: {
          // colors
        }
      }
    }
  }
}
