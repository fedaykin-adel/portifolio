<template>
    <div class="title-abilities">
        <div class="line width-20" />

        <p class="text-abilities">{{ txt }}</p>
        <div class="line width" />
    </div>
</template>
<script>

export default {
    props:{
        txt:String,
    }
}
</script>
<style lang="scss" scoped>
    .title-abilities{
        width: 100%;
        display: flex;
        align-items: center;
        gap:1em;
        padding:15px 0;
        .line{
            height: 1px;
            background-color: var(--hover-1);
        }
        .width{
            flex: 1 1 0%;
        }
        .width-20{
            width:20px
        }
        .text-abilities{
            color:var(--txt-dark)
        }
    }
</style>