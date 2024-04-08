<template>
    <div class="title">
        <p>
            {{ name }}
        </p>
    </div>
</template>
<script>
export default {
    props:{
        name: String,
    },
    
}
</script>
<style scoped>
    .title{
        margin:20px 0;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight:700;
        font-size: 65px;
    }
</style>