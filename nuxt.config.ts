// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components:true,
  modules:[
    'nuxt-swiper'
  ],
  css: [
    '@/assets/css/global.css',
    '@/assets/css/reset.css',
  ],
})
