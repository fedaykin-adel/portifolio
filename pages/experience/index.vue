<template>
    <Titlepage name="Experience"/>  
    
    <Experience :data="data"/>

</template>

<script>
import noImage from '~/assets/imgs/no-img.svg'
export default{
    data:()=>{
        return{
            data:[{
                company:'Avec',
                cargo:'Estágio em desenvolvimento',
                imageCompany:noImage,
                dateIn:'Junho 2019',
                dateAt:' Abril 2020',
                resume:'Desenvolvimento web, automações de formulários, desenvolvimento de web scraping, criação de endpoits para webhooks',
                skills:[{
                    title:'html',
                    img:'html.png'
                },{
                    title:'css',
                    img:'css.png'
                },{
                    title:'javascript',
                    img:'js.png'
                },{
                    title:'react',
                    img:'react.png'
                },{
                    title:'node js',
                    img:'node.png'
                },{
                    title:'python',
                    img:'python.png'
                },{
                    title:'mysql',
                    img:'mysql-icon.png'
                },{
                    title:'php',
                    img:'php-icon.png'
                }],
                localwork:['in-the-company','home']
            },{
                company:'Advance telecom',
                cargo:'Full Stack pleno nível 1 ',
                imageCompany:noImage,
                dateIn:'Junho 2020',
                dateAt:'Agosto 2020',
                resume:'Desenvolvimento de aplicações front end, estrutura de back end e criação de web chat',
                skills:[{
                    title:'node js',
                    img:'node.png'
                },{
                    title:'vue',
                    img:'vue.png'
                },{
                    title:'vuex',
                    img:'vuex.svg'
                },{
                    title:'laravel',
                    img:'laravel.png'
                },{
                    title:'socket-io',
                    img:'socket-io.png'
                },{
                    title:'mysql',
                    img:'mysql-icon.png'
                }],
                localwork:['in-the-company','home']
            },{
                company:'Worksmidia',
                cargo:'Full Stack pleno',
                imageCompany:noImage,
                dateIn:'Nov 2020',
                dateAt:'Fevereiro  2022',
                resume:'Desenvolvimento full-stack de sites, criação de aplicativos, criação de web chat, banco de dados, criação de web scraping',
                skills:[{
                    title:'php',
                    img:'php-icon.png'
                },{
                    title:'react',
                    img:'react.png'
                },{
                    title:'react native',
                    img:'react-native.svg'
                },{
                    title:'node js',
                    img:'node.png'
                },{
                    title:'socket-io',
                    img:'socket-io.png'
                },{
                    title:'mysql',
                    img:'mysql-icon.png'
                },{
                    title:'mongodb',
                    img:'mongodb.svg'
                },{
                    title:'python',
                    img:'python.png'
                }],
                localwork:['in-the-company','home']
            },{
                company:'spread/qualicorp',
                cargo:'Full Stack pleno',
                imageCompany:noImage,
                dateIn:'Fevereiro 2022',
                dateAt:'Julho  2022',
                resume:'Desenvolvimento em back-end e front-end ,micro serviço para aplicações web',
                skills:[{
                    title:'vue',
                    img:'vue.png'
                },{
                    title:'vuex',
                    img:'vuex.svg'
                },{
                    title:'node js',
                    img:'node.png'
                },{
                    title:'elasticsearch',
                    img:'elasticsearch.png'
                },{
                    title:'neo4j',
                    img:'neo4j.png'
                },{
                    title:'mongodb',
                    img:'mongodb.svg'
                }],
                localwork:['in-the-company','home']
            },{
                company:'Digigrow',
                cargo:'Programador sênior',
                imageCompany:noImage,
                dateIn:'Outubro de 2022',
                dateAt:'Fevereiro 2023',
                resume:"Coordenador de uma equipe de dev's e QA's para criação de Hub de e-commerce",
                skills:[{
                    title:'node js',
                    img:'node.png'
                },{
                    title:'react',
                    img:'react.png'
                },{
                    title:'mongodb',
                    img:'mongodb.svg'
                },{
                    title:'docker',
                    img:'docker.png'
                },{
                    title:'jest',
                    img:'jest.webp'
                },{
                    title:'cypress',
                    img:'cypress.png'
                }],
                localwork:['in-the-company','home']
            },{
                company:'Maverick inc ',
                cargo:'Desenvolvedor Full Stack',
                imageCompany:noImage,
                dateIn:'Março de 2023',
                dateAt:'setembro de 2023',
                resume:"desenvolvimento de sistemas para blog e admin, refatoração de layout e códigos em vtex(react), atualização de aplicações e fatoração de código em WordPress, criação de web scraping com interface de interação",
                skills:[{
                    title:'node js',
                    img:'node.png'
                },{
                    title:'react',
                    img:'react.png'
                },{
                    title:'mongodb',
                    img:'mongodb.svg'
                },{
                    title:'docker',
                    img:'docker.png'
                },{
                    title:'jest',
                    img:'jest.webp'
                },{
                    title:'cypress',
                    img:'cypress.png'
                }],
                localwork:['in-the-company','home']
            }]
        }
    }
}
</script>
