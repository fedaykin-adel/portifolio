<template>
    <div v-for="(abilities, idx) in data" :key="idx">
        
        <div v-for="(item, indexAbilities) in abilities" :key="indexAbilities" class="abilities">
            
            <UtilsLineHorizontal :txt="indexAbilities"/>
            
            <CardsCard
                v-for="(value, indexValue) in item" :key="indexValue" 
                :style="{'--bg-img': `url(${value.image})` }"
                class="card"
            >
                <p class="txt">{{value.name}}</p>
            </CardsCard>

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
    .abilities{
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        
        .card{
            min-width: 300px;
            .txt{
                font-size: smaller;
            }
            
        }
    }
    
</style>
