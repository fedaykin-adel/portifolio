<!-- Please remove this file from your project -->
<template>
    <div class="line">

        <div class="container header-container">
          <div class="header">
      
            <h1 class="logo">
              <img src="~/assets/imgs/header/code.svg" class="svg-logo" />
              <p class='txt-header'>Gabriel Adelar</p>
            </h1>
      
            <div class="itens-header">
              
              <NuxtLink to="skills" class="item-header">
                <img src="~/assets/imgs/header/skills.svg" class="svg" />
                <p>Skill</p>
              </NuxtLink>
      
            
              <NuxtLink class="item-header">
                <img src="~/assets/imgs/header/project.svg" class="svg" />
                <p>Projects</p>
              </NuxtLink>
      
            
              <NuxtLink class="item-header">
                <img src="~/assets/imgs/header/company.svg" class="svg" />
                <p>Experience</p>
              </NuxtLink>
      
            
              <NuxtLink class="item-header">
                <img src="~/assets/imgs/header/education.svg" class="svg" />
                <p>Education</p>
              </NuxtLink>
      
      
              <NuxtLink class="item-header">
                <p>Resumé</p>
              </NuxtLink>
      
              
            </div>
          </div>
        </div>
    </div>

    <div>
        <slot/>
    </div>
  </template>
  <style scoped lang="scss">
    .header{
      display: flex;
      justify-content: space-evenly;
      
    }
    .line{
        border-bottom:solid 1px var(--color-white);
    }
    .logo{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .txt-header{
      font-weight:700;
    }
    .itens-header{
      display:flex;
      align-items: center;
      justify-content: space-around;
      
      width:100%
    }
    .item-header{
      width: 20%;
      text-decoration: none;
      color:var(--color-white);
      justify-content: space-evenly;
      display: flex;
      align-items: center;
      height: 75px;
      
      &:hover{
        background-color: var(--hover-1);
      }
    }
    .svg-logo{
      width: 35px;
      height: 35px;
      filter:invert(100%) sepia(0%) saturate(0%) hue-rotate(263deg) brightness(104%)
    }
    .svg{
      width: 20px;
      height: 20px;
      filter:invert(100%) sepia(0%) saturate(0%) hue-rotate(263deg) brightness(104%)
    }
    p,a{
      font-family: "Inter", sans-serif;
      font-style: normal;
    }
  </style>
  <script>
  
  export default {
    name: 'Navbar'
  }
  </script>
  