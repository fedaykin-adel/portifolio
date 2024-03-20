<template>
    <div class="container">

        <div v-for="(typesAbilities, indexTypesAbilities) in listAbilities" :key="indexTypesAbilities">
            
            <div>
                <div v-for="(abilities, indexAbilities) in typesAbilities" :key="indexAbilities" >
                    <p>{{ indexAbilities }}</p>
                    <div 
                    v-for="(value, indexValue) in abilities" 
                    :key="indexValue" 
                    class="card" 
                    :style="{backgroundImage: `url(${value.image})` }">
                        <p>{{value.name}}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data:()=>{
        return{
            listAbilities:[{
                "Programming Languages":[{
                    name:'JavaScript',
                    image:'/skills/python.png',
                },{
                    name:'Python',
                    image:'/skills/python.png',
                },{
                    name:'C/C++',
                    image:'/skills/python.png',
                }],
                "Frameworks":[{
                    name:'Vue',
                    image:'/skills/python.png',
                },{
                    name:'React',
                    image:'/skills/python.png',
                },{
                    name:'Nuxt',
                    image:'/skills/nuxt.png',
                }],
                "Databases":[{
                    name:'Mysql',
                    image:'/skills/python.png',
                },{
                    name:'MongoDb',
                    image:'/skills/python.png',
                }]
            }]
        }
    },
    setup() {
        
    },

}
</script>
<style scoped>
    .card{
        display: flex;
        align-items: center;
        width: 50%;
        margin-bottom: 10px;
        border: solid 1px white;
        border-radius: 30px;
        height:50px;
        justify-content: flex-start;
        padding-left:35px;
        background-color: linear-gradient(90deg, var(--bg-color-default) 0%, var(--bg-color-default) 60%, var(--color-black-trans) 100%);
        background-position-x: right;
        background-repeat: no-repeat;
        background-size: 125px;
    }
    
</style>