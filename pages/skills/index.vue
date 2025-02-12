<template>
    <div class="container-content">
        <Titlepage name="Skills"/>
        <Abilities :data="data"/>
    </div>
    
</template>
<script setup>
    const {data, padding, error} = await useFetch('/api/ability')

</script>
<style scoped>
    .container-content{
        padding:30px;
    }
</style>