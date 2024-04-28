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
                    image:'/portifolio/images/js.png',
                },{
                    name:'Python',
                    image:'/portifolio/images/python.png',
                },{
                    name:'PHP',
                    image:'/portifolio/images/php.png',
                },{
                    name:'C/C++',
                    image:'/portifolio/images/c-c++.png',
                },{
                    name:'Bash',
                    image:'/portifolio/images/bash.png',
                }],
                "Web":[{
                    name:'Html',
                    image:'/portifolio/images/html.png',    
                },{
                    name:'Css',
                    image:'/portifolio/images/css.png',    
                },{
                    name:'Sass',
                    image:'/portifolio/images/sass.png',    
                },{
                    name:'Scoket-io',
                    image:'/portifolio/images/socket-io.png',
                }],
                "Databases":[{
                    name:'Vue',
                    image:'/portifolio/images/vue.png',
                },{
                    name:'React',
                    image:'/portifolio/images/react.png',
                },{
                    name:'Node',
                    image:'/portifolio/images/node.png',
                },{
                    name:'Nuxt',
                    image:'/portifolio/images/nuxt.png',
                },{
                    name:'Laravel',
                    image:'/portifolio/images/laravel.png',
                },{
                    name:'React Native',
                    image:'/portifolio/images/react-native.svg',
                }],
                "Databases":[{
                    name:'Mysql',
                    image:'/portifolio/images/mysql.png',
                },{
                    name:'MongoDb',
                    image:'/portifolio/images/mongodb.svg',
                },{
                    name:'elasticsearch',
                    image:'/portifolio/images/elasticsearch.png',
                },{
                    name:'neo4j',
                    image:'/portifolio/images/neo4j.png',
                }],
                "Contêineres":[{
                    name:'Docker',
                    image:'/portifolio/images/docker.png',
                },{
                    name:'Kubernates',
                    image:'/portifolio/images/kubernetes.png',
                }],
                "teste":[{
                    name:'jest',
                    image:'/portifolio/images/jest.webp'  
                },{
                    name:'Cypress',
                    image:'/portifolio/images/cypress.png'  
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