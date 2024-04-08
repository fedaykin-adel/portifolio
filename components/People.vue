<template>
    <div class="container display-center-center">
        <div class="all-presentation">
            <div class="presentation">
                <div class="title-presetation">
                    <p>Gabriel Adelar,</p>
                </div>
                <div class="desc-presetation">
                    <p>
                        Atuei como programador e coordenador de uma equipe de desenvolvimento, utilizando NodeJs, react, redis, docker, mongo, criação de serviçoes, endpoits para webhooks, templates, sites web resposivos e backend, aplicativos, webpscraping, 
                    </p>

                </div>
                <div class="midias">

                </div>
            </div>
            <div class="swiper-style">

                <Swiper 
                    
                    class="swiper"
                    :slide-per-view="1"
                    :modules="[SwiperAutoplay, SwiperEffectCreative]"
                    :effects="'creative'"
                    :loop="true"
                    :autoplay="{
                        delay:10000,
                        disableOnInteraction:true
                    }"
                    :creative-effect="{
                        prev: {
                          shadow: false,
                          translate: ['-20%', 0, -1]
                        },
                        next: {
                          translate: ['100%', 0, 0]
                        }
                    }"
                >
                    
                    <SwiperSlide v-for="(item, idx) in data" :key="idx" class="blaa">
                        <div class="imags-slides">
                            <img :src="item.img" class="img-slide">
                            <p>{{item.name}}</p>
                        </div>
                    </SwiperSlide>

                    <SwiperControls />
                </Swiper>
            </div>
            

        </div>
    </div>
</template>
<script>

export default {
    props:{
        data:Array
    }
}
</script>

<style lang="scss" scoped>
    .wrapper{
        height: 80%;
    }
    
    .swiper-style{
        width:50%;

        .swiper{
            width: 200px;
            position:relative;
            
        }
    }
    .imags-slides{
        width:70%;
        height:100%;
        display:flex;
        justify-content: space-between;
        align-items:center;
        flex-direction: column;
        margin: 0 auto;
        gap:1em;
    }
    .img-slide{
        width: 80%;
    }
    .title-presetation{
        font-size: 3.5em;
        font-weight: 900;
    }
    .all-presentation{
        display: flex;
        align-items: center;
        justify-content:center;
        height: 150px;
        width: 90%;
    }
    .desc-presetation{
        font-size:1.2em;
        font-weight:200;
        text-align: left;
    }
    .presentation{
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>