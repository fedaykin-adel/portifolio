<template>
    <div class=" content-project">
        <CardsCard v-for="(item, id) in data" :key="id" :color="item.color" class="card"> 
            <CardsImgCompany :img="item.image"/>
            
            <div class="header">
                <div class="title">
                    <p>{{ item.title }}</p>
                    <a :href="item.git" target="_blank" class="link">
                        <img src="/images/link.svg" class="svg">
                    </a>
                </div>
                <div class="line" />
                <div class="desc">
                    <p>{{ item.desc }}</p>
                </div>
            </div>

            <CardsResume class="resume" :txt="item.resume"/>
            
            <div class="footer">
                <div class="date">
                    <p>{{ item.date }}</p>
                </div>
                <div class="line" />
                <div class="skills">
                    <CardsSkillsImg 
                        v-for="(skill, idx) in item.tecnologis" 
                        :key="idx" 
                        :img="skill.img" 
                        :title="skill.title"
                    /> 
                </div>
            </div>
        </CardsCard>
    </div>

</template>
<style scoped lang="scss">
    
    
    .content-project{
        display:flex;
        flex-wrap: wrap;
        gap: 2em;
        margin: 0 auto;
        .card{
            width:30%;
            gap:1em;
            margin-bottom:1%;
            
            
            .line{
                background-color: var(--color-white);
                height: 1px;
            }

            .header{
                display: flex;
                flex-direction: column;
                gap: 1em;
                .desc{
                    p{
                        color:var(--txt-white);
                        font-weight: 500;
                    }
                }
                .title{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    p{
                        color:var(--txt-white);
                        font-weight: 600;
                    }
                    .link{
                        border: solid 1px var(--hover-1);
                        border-radius: 10px;
                        padding:5px;
                        .svg{
                            width: 15px;
                            height:15px;
                        }
                    
                        &:hover{
                            border-color:var(--hover-2);
                            background-color:var(--hover-1);
                        
                        }
                    }
                }
                
            }
            .resume{
                height:150px;
                
            }
            .footer{
                display: flex;
                flex-direction: column;
                gap: 1em;
                .date{
                    p{
                        font-size: 0.75em;
                    }
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
            }
        }
        @media screen and (max-width: 1400px){
            .content-project{
                gap:1em; 
                justify-content: initial;
            }
        }
        @media screen and (max-width: 1024px){
            .content-project{
                gap:1em; 
            }
            .card{
                width:46%;
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
<script>
export default {
    props:{
        data:Array
    },
    
}
</script>