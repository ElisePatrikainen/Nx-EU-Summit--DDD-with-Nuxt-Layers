// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['../landing', '../search'],
  modules: ['@nuxtjs/tailwindcss'],
})
