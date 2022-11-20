// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/scss/main.scss',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css'
  ],
  build: {
    transpile: ['primevue', /@fullcalendar.*/]
  },
  runtimeConfig: {},
  modules: [
    [
      '@nuxtjs/apollo',
      {
        clients: {
          default: {
            httpEndpoint: 'https://api.github.com/graphql',
            httpLinkOptions: {
              headers: {
                'content-type': 'application/json',
                authorization: `bearer ${process.env.GITHUB_TOKEN}`
              }
            }
          }
        }
      }
    ]
  ]
})
