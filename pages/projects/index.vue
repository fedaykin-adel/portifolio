<template>
    <Titlepage name="Projects"/>  
    
    <Project :data="data"/>
</template>
<style scoped>
    
</style>
<script >
import noImage from '~/assets/imgs/no-img.svg'
export default {
    
    data:()=>{
        return{
            data:[{
                image:noImage,
                title:'game pong',
                git:'',
                desc:'game in pygame',
                resume:'Esté jogo eu criei depois de alguns jogos que fiz em python. Decidi escrever um artigo sobre como criar um jogo e algumas explicações de como funciona a logica de jogos em pygame. Usei ele como base para entender melhor como funciona a fisica e colissões.',
                date:'Jan 2024',
                tecnologis:['python.png','pygame.png']
            },{
                image:noImage,
                title:'game snake',
                git:'',
                desc:'game in pygame',
                resume:'',
                date:'Fev 2024',
                tecnologis:['python.png']
            },{
                image:noImage,
                title:'game pong',
                git:'',
                desc:'game in pygame',
                resume:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos',
                date:'Fev 2024',
                tecnologis:['python.png']
            },{
                image:noImage,
                title:'game pong',
                git:'',
                desc:'game in pygame',
                resume:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos',
                date:'Fev 2024',
                tecnologis:['python.png']
            }]
        }
    }
}
</script>