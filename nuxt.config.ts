// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  components:true,
  modules:[
    'nuxt-swiper'
  ],
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/global.css',
  ],
  app:{
    baseURL:'/portifolio'
  }
  // process.env.NODE_ENV ==='produciont'? '/portifolio/' :'/'
  // router: {
  //   base: '/app/'
  // }  
  
})

