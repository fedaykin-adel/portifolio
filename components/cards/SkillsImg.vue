<template>
    <div class="img-select" >
        <div class="border-withi-radius img">
            <img class="img-skill" :src="trataImagem(`/images/${img}`)"/>
        </div>
    
        <div class="title">
            <p>{{title}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .img-skill{
        width: 20px;
        height:20px;
    }
    .img-select{
        position: relative;
        filter: grayscale(0.65);
        border: solid 1px var(--border-color);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-radius: 10px;
        &:hover{
            filter: grayscale(0);
            border-color:var(--hover-2);
            background-color:var(--hover-1);
        }
        &:hover .title{
            display: flex;
            justify-content: center;
        }
        .img{
            width:25px;
            display: flex;
            justify-content: center;
        }
        
        .title{
            padding:5px 15px;
            display:none;
            width: 100px;
            border-radius: 30px;
            background-color: var(--hover-1);
            position: absolute;
            bottom:-26px;
            left:15px;
            p{
                font-size: 0.8em;
            }
        }
    }
</style>
<script>
import trataImagem from '@/utils/trataImage'

export default {
    props:{
        img:String,
        title:String
    },
    methods:{
        trataImagem
    }
}
</script>