<template>
    <div class=" content-project">
        <div v-for="(item, id) in data" ref="card" :key="id" class="card  card-bg-img" @mousemove="updatePosMouse" 
        :style="{'--rot-x':rX, '--rot-y':rY,'--drop-x':posX,'--drop-y':posY}">
    
                <div >
                    <img class="image" :src="item.image">
                </div>
                <div class="header">
                    <div class="title">
                        <p>{{ item.title }}</p>
                        <a :src="item.git" class="link">
                            <img src="/images/link.svg" class="svg">
                        </a>
                    </div>
                    <div class="line"></div>
                    <div>
                        {{ item.desc }}
                    </div>
                </div>
                <div class="resume">
                    {{ item.resume }}
                </div>
                <div class="footer">
                    <div class="date">
                        <p>{{ item.date }}</p>
                    </div>
                    <div class="line" />
                    <div class="skills">
                        <div v-for="(tecno, idx) in item.tecnologis" :key="idx">
                            <div class="skill">
                                <img class="img" :src="`/images/${tecno}`">
    
                            </div>
                        </div>
                    </div>
                </div>
            
            
        
        </div>
    </div>
</template>
<style scoped lang="scss">
    
    
    .image{
        width: 50px;
    }
    
    .skills{
        display: flex;
        gap:1em;
        .skill{
            border:solid 1px var(--color-white);
            border-radius: 10px;
            padding:5px;
            display: flex;
            justify-content: center;
            align-items: center;
            .img{
                width: 25px;
            }
        }
    }

    
    .line{
        width: 100%;
        background-color: var(--color-white);
        height: 1px;
    }
    
    .content-project{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        
        .card{
            border:solid 1px var(--color-white);
            border-radius: 15px;
            width:29%;
            padding:20px;
            margin-bottom:1%;
            position:relative;
            
            --bg-color:#0000ff03;
            --drop-color:#0000ff26;
            --rot-x:0;
            --rot-y:0;
            --drop-x:0;
            --drop-y:0;

            
            
            
            background: linear-gradient(90deg, var(--bg-color-default) 0%, var(--bg-color-default) 60%, 
                var(--color-black-trans) 100%), 
                no-repeat right 40% / 40% url(); 
    
            
            
            &-bg-img{
                &:hover{
                    background-color:var(--bg-color);
                    background-image: radial-gradient(
                        circle at var(--drop-x) var(--drop-y),
                        var(--drop-color), 
                        transparent
                    );

                }
            }
            
            &:hover{
                transform: perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(1.01) ;
            }
            .header{
                display: flex;
                flex-direction: column;
                gap: 1em;
                .title{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .link{
                        border: solid 1px var(--color-white);
                        border-radius: 10px;
                        padding:5px;
                    }
                }
                
            }
            .resume{
                margin:15px 0;
            }
            .footer{
                display: flex;
                flex-direction: column;
                gap: 1em;
            }
        }
        @media screen and (max-width: 1400px){
            .content-project{
                gap:1em; 
                justify-content: initial;
            }
            .card{
                width:27%;
            }
        }
        @media screen and (max-width: 1024px){
            .content-project{
                gap:1em; 
            }
            .card{
                width:42%;
            }
        }
        @media screen and (max-width: 720px){
            .content-project{
                gap:1em; 
            }
            .card{
                width:100%;
            }
        }
    }
    
</style>
<!--  -->
<script>
export default {
    props:{
        data:Array
    },
    data:()=>{
        return{
            posx:0,
            posy:0,
            rY:0,
            rX:0,
            cards:[]
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
}
</script>