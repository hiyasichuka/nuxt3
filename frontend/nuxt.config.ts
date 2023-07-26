import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    output: {
      publicDir: path.join(__dirname, '../docs')
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})
