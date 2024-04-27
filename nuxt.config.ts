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
    head: {
      title: 'sortea',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
  
        // header security
        {name:'X-Content-Type-Options', content:'nosniff'},
        {name:'X-Frame-Options', content:'DENY'},
        {name:'X-XSS-Protection', content:'1; mode=block'},
        {name:'Referrer-Policy', content:'strict-origin-when-cross-origin'},
        {name:'Feature-Policy', content:"geolocations, 'self'"}
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },
  
  // app:{
  //   baseURL:process.env.NODE_ENV ==='produciont'? '/portifolio/' :'/'
  // }
  // process.env.NODE_ENV ==='produciont'? '/portifolio/' :'/'
  // router: {
  //   base: '/app/'
  // }  
  
})

