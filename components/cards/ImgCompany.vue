<template>
    <div class="image" >
        <img :src="imgExist">
    </div>    
</template>
<script>
import noImage from '~/assets/imgs/no-img.svg'
export default {
    props:{
        img:String
    },
    
    computed:{
        imgExist(){
            if(this.img == '' || !this.img){
                return noImage
            }
            return this.img
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .image{
        width: 50px;
        img{
            border-radius: 15px;
        }
    }
</style>