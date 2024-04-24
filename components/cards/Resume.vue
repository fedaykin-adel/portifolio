<template>
    <div class="resume">
        <p>{{ txt }}</p>
    </div>
</template>
<script>
export default {
    props:{
        txt:String
    }
}
</script>
<style lang="scss" scoped>

.resume{
    overflow: hidden;
    -webkit-box-orient: vertical;
    p{
        color:var(--sec-text);
        font-size: 0.85em;
        font-weight: 300;
    }
}
@media screen and (max-width: 765px){
    .resume{
        overflow-y: auto;
    
    }
}
</style>