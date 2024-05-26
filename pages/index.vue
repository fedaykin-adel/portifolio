<template>
  <People :data="data" />
</template>



<script>
import trataImagem from '@/utils/trataImage'
export default {
  name: 'IndexPage',
  data:()=>{
      return{
          data:[{
              name:'JavaCcript',
              img:trataImagem('/images/js.png') 
          },{
              name:'HTML',
              img:trataImagem('/images/html.png'),
          },{
              name:'Css',
              img:trataImagem('/images/css.png'),
          },{
              name:'React',
              img:trataImagem('/images/react.png'),
          },{
              name:'Python',
              img:trataImagem('/images/python.png'),
          },{
              name:'Nuxt',
              img:trataImagem('/images/nuxt.png'),
          },{
              name:'Node',
              img:trataImagem('/images/node.png'),
          }]
          
      }
  }
}
</script>
