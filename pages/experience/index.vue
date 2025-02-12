<template>
    <UtilsTitlepage name="Experience"/>  
    
    <Experience :data="data"/>

</template>

<script setup>
    const {data, padding, error} = await useFetch('/api/experience')
    
</script>
