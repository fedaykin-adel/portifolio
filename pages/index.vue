<template>
  <People :data="data" />
</template>



<script>
export default {
  name: 'IndexPage',
  data:()=>{
      return{
          data:[{
              name:'JavaCcript',
              img:'/images/js.png'
          },{
              name:'HTML',
              img:'/images/html.png',
          },{
              name:'Css',
              img:'/images/css.png',
          },{
              name:'React',
              img:'/images/react.png',
          },{
              name:'Python',
              img:'/images/python.png',
          },{
              name:'Nuxt',
              img:'/images/nuxt.png',
          },{
              name:'Node',
              img:'/images/node.png',
          }]
          
      }
  }
}
</script>
