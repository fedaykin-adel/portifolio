<template>
    <div class="card  " @mousemove="updatePosMouse" 
        :style="{'--rot-x':rX, '--rot-y':rY,'--drop-x':posX,'--drop-y':posY}">
        <div class="card-bg-img">
            <slot/>

        </div>
            
            
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    data:()=>{
        return{
            posX:0,
            posY:0,
            rY:0,
            rX:0,
        }
    },
    methods:{
        updatePosMouse(event){
            let tg = event.currentTarget
            let rect = tg.getBoundingClientRect()

            
            this.posX = event.clientX - rect.left + 'px'
            this.posY = event.clientY - rect.top + 'px'


            let width = rect.width
            let height = rect.height

            let cX = rect.x + width / 2
            let cy = rect.y + height / 2

            let mX = event.clientX - cX
            let mY = event.clientY - cy

            this.rY = ((5*mX)/(width/2)).toFixed(2) + 'deg'
            this.rX = ((-1 *(5 * mY)) / (height /2)).toFixed(2) + 'deg'
           
        },

    }
})
</script>
<style lang="scss" scoped>
    .card{
        border:solid 1px var(--border-color);
        border-radius: 15px;
        
        --bg-color:#0000ff03;
        --drop-color:#0000ff26;
        --rot-x:0;
        --rot-y:0;
        --drop-x:0;
        --drop-y:0;
        --direction:column;

        --bg-img:url();
        --pos-img:right 40% / 40%;
        background: linear-gradient(90deg, var(--bg-color-default) 0%, var(--bg-color-default) 60%, 
            var(--color-black-trans) 100%), 
            no-repeat var(--pos-img) var(--bg-img); 

        &-bg-img{
            padding:20px;
            display: flex;

            flex-direction: var(--direction);
            gap: 1em;
            &:hover{
                background-color:var(--bg-color);
                background-image: radial-gradient(
                    circle at var(--drop-x) var(--drop-y),
                    var(--drop-color), 
                    transparent
                );
                border-radius: 15px;
            }
        }
        
        &:hover{
            transform: perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(1.01) ;
            border:solid 1px var(--color-white);
        }
    }
</style>