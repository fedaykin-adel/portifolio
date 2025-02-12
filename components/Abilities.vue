<template>
    <div v-for="(abilities, idx) in data" :key="idx">
        <UtilsLineHorizontal :txt="abilities.name"/>
        <div  class="abilities" >
            
            <!-- v-if="item.show_on_ability_tree === true" -->
            <CardsCard
                
                v-for="(item, indexAbilities) in abilities.abilitity?.filter(i=>i.show_on_ability_tree ) " :key="indexAbilities"
                :style="{'--bg-img': `url(${processUrlImage(item.image)})` }"
                class="card"
            >   
                <p class="txt">{{item.name}}</p>
            </CardsCard>
        </div>
    
    </div>
    
</template>
<script>
import processUrlImage from '~/utils/processUrlImage'

export default {
    methods:{
        processUrlImage
    },
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
