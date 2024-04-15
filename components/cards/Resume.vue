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
    overflow-y: auto;
    p{
        color:var(--sec-text);
        font-size: 0.85em;
        font-weight: 300;
    }
}
</style>