// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {'/admin/**': { ssr: false },},
    css:['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
    build: {
        transpile: ['vuetify']
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'RSpharma',
            meta: [
              { name: 'description', content: 'a' }
            ],
          }
      },
})
