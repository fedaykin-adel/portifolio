<template>
    <UtilsTitlepage name="Projects"/>  
    
    <Project :data="data"/>
</template>
<style scoped>
    
</style>
<script setup>
    const {data, padding, error} = await useFetch('/api/project')
   
</script>