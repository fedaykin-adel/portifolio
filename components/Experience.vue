<template>
    <div class=" arround-cards">
        <div v-for="(item, idx) in data" :key="idx" class="cards">
            <div class="arround-card">
                <div class="card">
                    <div class="image-margin">
                        <img :src="item.imageCompany" class="image"/>
                    </div>
                    <div class="content-card">
                        <div>
                            <p class="text-title">{{ item.company }} - {{ item.cargo}}</p>
                        </div>
                        <div class="locals">
                            <div v-for="(local, idx) in item.localwork" :key="idx">
                                <div class="border-withi-radius">
                                    {{ local }}
                                </div>
                            </div>
                        </div>
                        <div>
                            {{ item.dateIn }} - {{ item.dateAt }}
                        </div>
            
                        <div>
                            {{ item.resume }}
                        </div>
            
                        <div class="skills">
                            <div v-for="(skill, idxx) in item.skills" :key="idxx" class="img-select">
                                
                                <div class="border-withi-radius img">
                                    <img class="img-skill" :src="`/images/${skill.img}`"/>
                                </div>

                                <div class="title">
                                    <p>{{skill.title}}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lines">
                <div class="line" />
                <img src="/images/point.svg" class="svg">
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
        
                    border:solid 1px var(--color-white);
                    border-radius: 15px;
                    width:100%;
                    padding:15px 0;
                    display:flex;
                    gap: 1em;
                    
                    .image-margin{
                        margin-left:15px;
                        .image{
                            width:55px;
                        }
                    }

                    .content-card{
                        width:80%;
                        display: flex;
                        flex-direction: column;
                        gap: 1em;

                        .skills{
                            flex-wrap: wrap;
                            
                            .img-skill{
                                width: 20px;
                                height:20px;
                            }
                            .img-select{
                                width:45px;
                                position: relative;
                                filter: grayscale(0.65);
                                &:hover{
                                    filter: grayscale(0);
                                    border-color:var(--hover-2)
                                }
                                &:hover .title{
                                    display: flex;
                                    justify-content: center;
                                }
                                .img{
                                    width:25px;
                                    display: flex;
                                    justify-content: center;
                                }
                                
                                .title{
                                    padding:5px 15px;
                                    display:none;
                                    width:170%;
                                    border-radius: 30px;
                                    background-color: var(--hover-1);
                                    position: absolute;
                                    bottom:-26px;
                                    left:15px;
                                }
                            }
                            
                        }
                        .locals,.skills{
                            display: flex;
                            gap: 1em;
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
    
    
    
    .border-withi-radius{
        border: solid 1px var(--color-white);
        border-radius: 15px;
        padding:10px;
    }
    
</style>
<script>
export default {
    props:{
        data:Array
    }

}
</script>
