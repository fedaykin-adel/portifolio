<template>
    <div class="container display-center-center">
        <div class="all-presentation">
            <div class="presentation">
                <div class="title-presetation">
                    <p>Gabriel Adelar,</p>

                </div>
                <div class="desc-presetation">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis laudantium quaerat iure ipsum!
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
                >
                    <SwiperSlide
                        v-for="(item, idx) in slides"
                        :key="idx"
                    >
                        <div class="imags-slides">
                            <img :src="item.img" class="img-slide">
                            <p>{{item.name}}</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            

        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    data:()=>{
        return{
            slides:[
                {
                    name:'Nuxt',
                    img:'presetation/nuxt.png',
                },
                {
                    name:'MongoDb',
                    img:'presetation/mongodb.svg',
                },
                {
                    name:'Node',
                    img:'presetation/node.png',
                },
                {
                    name:'Python',
                    img:'presetation/python.png',
                },
            ]
        }

    },
    setup() {
        
    },
    mounted(){
        // let list = 
        // for(let x=0; x < list.length ; x++){
        //     slides.append(list[x])
        // }
    },
    
})
</script>

<style lang="scss" scoped>
    .swiper{
        width:150px;
        height:150px;
    }
    .swiper-style{
        width:50%;
        
    }
    .imags-slides{
        width:100%;
        height:100%;
        display:flex;
        justify-content: space-between;
        align-items:center;
        flex-direction: column;
    }
    .img-slide{
        width: 80%;
        height:80%;
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