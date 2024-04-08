<template>
    <div class="">

        <div v-for="(abilities, idx) in data" :key="idx">
            
            <div v-for="(item, indexAbilities) in abilities" :key="indexAbilities" class="abilities">
                
                <div class="title-abilities">
                    <div class="line width-20" ></div>
                    <p class="text-abilities">{{ indexAbilities }}</p>
                    <div class="line width" ></div>
                </div>
                
                <div 
                    v-for="(value, indexValue) in item" :key="indexValue" 
                    :style="{'--bg-image': `url(${value.image})` }"
                >
                    
                    <div class="group-abilities">
                        <div class="card">
                            <div class="content-card">
                                <p>{{value.name}}</p>
                            </div>
        
                        </div>

                    </div>
                </div>

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
<style scoped lang="scss">
    .group-abilities{
        width: 30%;
        
    }
    .title-abilities{
        width: 100%;
        display: flex;
        align-items: center;
        gap:1em;
        padding:15px 0;
        .line{
            height: 1px;
            background-color: var(--hover-1);
        }
        .width{
            width: 100%;
        }
        .width-20{
            width:20px
        }
    }
    .abilities{
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
    }
    
    

    .card{
        --linear-bg: linear-gradient(90deg, var(--bg-color-default) 0%, var(--bg-color-default) 60%, var(--color-black-trans) 100%);
        --bg-pos: right 35% / 40%;
        

        background: var(--linear-bg), no-repeat var(--bg-pos) var(--bg-image); 

        display: flex;
        justify-content: center;
        
        padding:25px;
        border: solid 1px white;
        border-radius: 15px;
        
        
        min-width: 300px;
        
    }
    .content-card{
        width: 80%;
        height:100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
</style>
