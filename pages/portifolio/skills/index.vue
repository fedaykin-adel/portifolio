<template>
    <div class="container-content">
        <Titlepage name="Skills"/>
        <Abilities :data="data"/>
    </div>

</template>
<script>
export default {
    data:()=>{
        return{
            data:[{
                "Programming Languages":[{
                    name:'JavaScript',
                    image:'/images/js.png',
                },{
                    name:'Python',
                    image:'/images/python.png',
                },{
                    name:'PHP',
                    image:'/images/php.png',
                },{
                    name:'C/C++',
                    image:'/images/c-c++.png',
                },{
                    name:'Bash',
                    image:'/images/bash.png',
                }],
                "Web":[{
                    name:'Html',
                    image:'/images/html.png',    
                },{
                    name:'Css',
                    image:'/images/css.png',    
                },{
                    name:'Sass',
                    image:'/images/sass.png',    
                },{
                    name:'Scoket-io',
                    image:'/images/socket-io.png',
                }],
                "Databases":[{
                    name:'Vue',
                    image:'/images/vue.png',
                },{
                    name:'React',
                    image:'/images/react.png',
                },{
                    name:'Node',
                    image:'/images/node.png',
                },{
                    name:'Nuxt',
                    image:'/images/nuxt.png',
                },{
                    name:'Laravel',
                    image:'/images/laravel.png',
                },{
                    name:'React Native',
                    image:'/images/react-native.svg',
                }],
                "Databases":[{
                    name:'Mysql',
                    image:'/images/mysql.png',
                },{
                    name:'MongoDb',
                    image:'/images/mongodb.svg',
                },{
                    name:'elasticsearch',
                    image:'/images/elasticsearch.png',
                },{
                    name:'neo4j',
                    image:'/images/neo4j.png',
                }],
                "Contêineres":[{
                    name:'Docker',
                    image:'/images/docker.png',
                },{
                    name:'Kubernates',
                    image:'/images/kubernetes.png',
                }],
                "teste":[{
                    name:'jest',
                    image:'/images/jest.webp'  
                },{
                    name:'Cypress',
                    image:'/images/cypress.png'  
                },]
            }]
        }
    },
    
}
</script>
<style scoped>
    .container-content{
        padding:30px;
    }
</style>