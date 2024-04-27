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
              img:'/portifolio/images/js.png'
          },{
              name:'HTML',
              img:'/portifolio/images/html.png',
          },{
              name:'Css',
              img:'/portifolio/images/css.png',
          },{
              name:'React',
              img:'/portifolio/images/react.png',
          },{
              name:'Python',
              img:'/portifolio/images/python.png',
          },{
              name:'Nuxt',
              img:'/portifolio/images/nuxt.png',
          },{
              name:'Node',
              img:'/portifolio/images/node.png',
          }]
          
      }
  }
}
</script>
