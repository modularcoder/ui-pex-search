// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  srcDir: 'src/',
  css: [
    '@pexeso/ui-core/next/ui-core-next.css'
  ]
})
