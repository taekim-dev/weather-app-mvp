// https://nuxt.com/docs/api/configuration/nuxt-config

import '@nuxtjs/i18n'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.json' },
      { code: 'kr', iso: 'kr-KR', file: 'kr-KR.json' },
 
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css']
})
