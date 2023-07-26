import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    output: {
      publicDir: path.join(__dirname, '../docs')
    }
  },
  app: {
    // baseURL: '/nuxt3/'
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})
