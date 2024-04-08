<script setup>
    const swiper = useSwiper()
    const slides = [{
                    name:'JavaCcript',
                    img:'/images/js.png'
                },{
                    name:'Python',
                    img:'/images/python.png',
                },{
                    name:'Nuxt',
                    img:'/images/nuxt.png',
                },{
                    name:'MongoDb',
                    img:'/images/mongodb.svg',
                },{
                    name:'Node',
                    img:'/images/node.png',
                }]
    // const slides = prop.slides
</script>

<template>
    
    <div @click="swiper.slideNext()" class="btn-next">
        <img src="/assets/imgs/arrow.svg" class="arrow svg">
    </div>
    <div @click="swiper.slidePrev()" class="btn-prev">
        <img src="/assets/imgs/arrow.svg" class="arrow svg">
    </div>

</template>
<style scoped lang="scss">
    .btn-next,
    .btn-prev {
        position: absolute;
        z-index: 100;
        top:50%;
        border: solid 1px var(--color-white);
        border-radius: 50%;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .svg{
        width: 15px;
        height: 15px;
    }
    .btn-next {
        
        right:0;
        .arrow{
            transform: rotate(0def);
        }
    }
    .btn-prev {
        left:0;
        .arrow{
            transform: rotate(180deg);
        }
    }
</style>