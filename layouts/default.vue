<!-- Please remove this file from your project -->
<template>
    <div class="line">
      <div class="container">
          <div class="header">
            <h1 class="logo">
              <NuxtLink to="/" key="index" class="logo">
                <img src="~/assets/imgs/header/code.svg" class="svg" />
                <p class='txt-header'>Gabriel Adelar</p>

              </NuxtLink>
              
              <div :class="[classExisted, {'header-cross-display':expandMobAddClass}] " @click="expandMob"></div>

            </h1>

            <div v-if="expandMobAddClass" :class="{'header-mob':expandMobAddClass}">
              <NuxtLink :to="item.route" v-for="(item, id) in data" class="item-header-mob" exact  :key="id">
                <img :src="item.image" class="svg" v-if="item.image"/>
                <p class="">{{item.name}}</p>
              </NuxtLink>
            </div>

            <div class="itens-header" >
              <NuxtLink :to="item.route" v-for="(item, id) in data" class="item-header" exact  :key="id">
                <img :src="item.image" class="svg" v-if="item.image"/>
                <p class="txt-header-opt">{{item.name}}</p>
              </NuxtLink>
              
            </div>
            
          </div>
        </div>
    </div>

    <div class="container">
      <slot/>
    </div>
  </template>

  <script>
  
  export default {
    name: 'Navbar',
    data:()=>{
      return{
          data:[{
            name:'skill',
            image:'/images/header/skills.svg',
            route:'skills',
          },{
            name:'Projects',
            image:'/images/header/project.svg',
            route:'projects',
          },{
            name:'Experience',
            image:'/images/header/company.svg',
            route:'experience',
          },{
            name:'Education',
            image:'/images/header/education.svg',
            route:'/education',
          },{
            name:'Resumé',
            image:'',
            route:'/',
          }],
          expandMobAddClass:false
      }
    },
    methods: {
      expandMob(){
        this.expandMobAddClass = !this.expandMobAddClass
        
      },
    },
    computed:{
      classExisted(){
        return 'display-header-mob'
      }
    }
  }
  </script>

  <style scoped lang="scss">
    @mixin tablet{
        
      @media screen and (max-width: 950px){
        .txt-header-opt{
          display:none;
        }   
        .item-header {
          &:hover{
            .txt-header-opt{
              display:block;
              gap:1em;
            }
          }
        
        }   
      }
    }
    @mixin mobile{
      @media screen and (max-width: 765px){
        .txt-header-opt{
          display:none;
        }      
        .itens-header{
          display: none;
        }
        .logo{
          width: 100%;
          justify-content: space-between;
        }
        .display-header-mob{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 36px;
          width: 36px;
          
          &::before{
            background-color: var(--color-white);
            width:20px;
            height:1px;
            content:""; 
            transform: translateY(-5px) rotate(0deg);
            transition: transform 200ms ease;
          }
          &::after{
            background-color: var(--color-white);
            width:20px;
            height:1px;
            content:"";  
            transform: translateY(4px) rotate(0deg);
            transition: transform 200ms ease;
          }
          
        }
        .header-cross-display{
          &::before{
            transform: translateY(2px) rotate(45deg) 
  
          }
          &::after{
            transform: translateY(0px) rotate(-45deg)
          }
        }
        .header-mob{
          display: block;
          width: 100%;
          background-color:var(--bg-color-default);
          height:100vh;
          position:fixed;
          z-index:2;
          top:0;
          left:0;
          transition: 400ms easy;
          padding-top:37px;
          .item-header-mob{
            padding:0 0 0 20px;
            width: 100%;
            text-decoration: none;
            color:var(--color-white);
            gap:1em;
            display: flex;
            align-items: center;
            height: 75px;
          }
        }
      }
    }
    .line{
      border-bottom:solid 1px var(--color-white);
      z-index: 3;
    }

    .header{
      
      display: flex;
      justify-content: space-between;
      .display-header-mob{
        display: none;
      }
      .header-mob{
        height:0;
        display: none;
        .item-header-mob{
          display: none;
        }
      }
      .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        .txt-header{
          font-weight:700;
          text-align: center;
        }
      }
      .itens-header{
        display:flex;
        align-items: center;
        justify-content: space-around;
        
        width:70%;

        .item-header{
          width: 20%;
          text-decoration: none;
          color:var(--color-white);
          gap:1em;
          justify-content: center;
          display: flex;
          align-items: center;
          padding:10px 20px;
          &:hover{
            background-color: var(--hover-1);
          }
          .txt-header-opt{
            display:block;
            font-weight: 400px;
            font-size: 0.875rem;
          }
          .svg{
            width:15px;
            height:15px;
          }
          @include tablet
        }

      }
      @include mobile
    }

    

    
    
    
    
    
    
  
  </style>
  
  