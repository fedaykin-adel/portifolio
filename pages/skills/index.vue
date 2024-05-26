<template>
    <div class="container-content">
        <Titlepage name="Skills"/>
        <Abilities :data="data"/>
    </div>

</template>
<script>
import trataImagem from '@/utils/trataImage'

export default {
    data:()=>{
        return{
            data:[{
                "Programming Languages":[{
                    name:'JavaScript',
                    image:trataImagem('/images/js.png'),
                },{
                    name:'Python',
                    image:trataImagem('/images/python.png'),
                },{
                    name:'PHP',
                    image:trataImagem('/images/php.png'),
                },{
                    name:'C/C++',
                    image:trataImagem('/images/c-c++.png'),
                },{
                    name:'Bash',
                    image:trataImagem('/images/bash.png'),
                }],
                "Web":[{
                    name:'Html',
                    image:trataImagem('/images/html.png'),    
                },{
                    name:'Css',
                    image:trataImagem('/images/css.png'),    
                },{
                    name:'Sass',
                    image:trataImagem('/images/sass.png'),    
                },{
                    name:'Scoket-io',
                    image:trataImagem('/images/socket-io.png'),
                }],
                "Databases":[{
                    name:'Vue',
                    image:trataImagem('/images/vue.png'),
                },{
                    name:'React',
                    image:trataImagem('/images/react.png'),
                },{
                    name:'Node',
                    image:trataImagem('/images/node.png'),
                },{
                    name:'Nuxt',
                    image:trataImagem('/images/nuxt.png'),
                },{
                    name:'Laravel',
                    image:trataImagem('/images/laravel.png'),
                },{
                    name:'React Native',
                    image:trataImagem('/images/react-native.svg'),
                }],
                "Databases":[{
                    name:'Mysql',
                    image:trataImagem('/images/mysql.png'),
                },{
                    name:'MongoDb',
                    image:trataImagem('/images/mongodb.svg'),
                },{
                    name:'elasticsearch',
                    image:trataImagem('/images/elasticsearch.png'),
                },{
                    name:'neo4j',
                    image:trataImagem('/images/neo4j.png'),
                }],
                "Contêineres":[{
                    name:'Docker',
                    image:trataImagem('/images/docker.png'),
                },{
                    name:'Kubernates',
                    image:trataImagem('/images/kubernetes.png'),
                }],
                "teste":[{
                    name:'jest',
                    image:trataImagem('/images/jest.webp')  
                },{
                    name:'Cypress',
                    image:trataImagem('/images/cypress.png')  
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