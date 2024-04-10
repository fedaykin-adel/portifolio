<template>
    <div class=" arround-cards">
        <div v-for="(item, idx) in data" :key="idx" class="cards">
            <div class="arround-card">
                <CardsCard class="card" :style="{'--direction':'row'}">
                    <div class="image-margin">
                        <img :src="item.imageCompany" class="image"/>
                    </div>
                    <div class="content-card">
                        <div>
                            <p class="text-title">{{ item.company }} - {{ item.cargo}}</p>
                        </div>
                        <div class="locals">
                            <div v-for="(local, idx) in item.localwork" :key="idx" class="local">
                                <p>{{ local }}</p>
                            </div>
                        </div>
                        <div class="date">
                            <p>{{ item.dateIn }} - {{ item.dateAt }}</p>
                        </div>
            
                        <div class="resume">
                            <p>{{ item.resume }}</p>
                        </div>
            
                        <div class="skills">
                           
                            <CardsSkillsImg 
                                v-for="(skill, idxx) in item.skills" 
                                :key="idxx" 
                                :img="skill.img" 
                                :title="skill.title"
                            />                                
                                
                        </div>
                    </div>
                
                    
                </CardsCard>
            </div>
            <div class="lines">
                <div class="line" />
                <img src="/images/point.svg" class="svg" />
                <div class="line" />
            </div>
            <div class="card-none"/>
        </div>

    </div>    
</template>
<style scoped lang="scss"> 
    .arround-cards{
        display: flex;
        flex-direction: column;
        align-items:center;
        padding-bottom: 40px;
        .cards{
            display:flex;
            width:100%;
            position:relative;
            &:nth-child(2n){
                flex-direction: row-reverse;
            }
            .arround-card{
                width:100%;
                .card{
        
                    width:100%;
                    display:flex;
                    gap: 1em;
                    
                    .image-margin{
                        margin-left:15px;
                        .image{
                            width:55px;
                        }
                    }

                    .content-card{
                        width:100%;
                        display: flex;
                        flex-direction: column;
                        gap: 1em;

                        .skills{
                            display: flex;
                            gap: 1em;
                            flex-wrap: wrap;
                            
                        }
                        .date{
                            p{
                                font-size: 0.7em;
                            }
                        }
                        .resume{
                            p{
                                font-size: 0.9em;
                            }
                        }
                        .locals{
                            display: flex;
                            gap: 1em;
                            .local{
                                border: solid 1px var(--hover-1);
                                border-radius: 15px;
                                padding:10px;
                                p{
                                    font-size: 0.65em;
                                }
                                &:hover{
                                    border-color:var(--hover-2);
                                    background-color:var(--hover-1);
                                }
                            }
                        }
                    }
                }
            }

            .lines{
                width:50px;
                display: flex;
                align-items: center;
                flex-direction: column;
                gap:1em;
                padding:0 15px;
                box-sizing: border-box;
                .line{
                    width: 1px;
                    height: 50%;
                    background-color: var(--color-white);
                    
                }
            }
            .card-none{
                width:100%;
            }
            @media screen and (max-width: 1024px) {
                .card-none,.lines{
                    display: none;
                }
                .arround-card{
                    margin:15px 0;
                }
            }
        }
    }
    
    
    
</style>
<script>

export default {
    props:{
        data:Array
    }

}
</script>
