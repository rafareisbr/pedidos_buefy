## Configurar URL Base para Axios

Evita problemas de cors e no deploy

- Instalar @nuxtjs/proxy

- No nuxt.config.js
```js
modules: [
  '@nuxtjs/axios',
  '@nuxtjs/proxy'
],
axios: {
  proxy: true
},
proxy: {
  '/api': 'http://localhost:5000'
},
```
