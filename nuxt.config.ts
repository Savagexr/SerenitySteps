// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@sidebase/nuxt-auth'],
  runtimeConfig: {
    authSecret: '', // can be overridden by NUXT_AUTH_SECRET environment variable
    googleId: process.env.GOOGLE_CLIENT_ID,
    googleSecret: process.env.GOOGLE_CLIENT_SECRET,
    authOrigin: '',
  },
});
