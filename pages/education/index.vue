<template>
    <UtilsTitlepage name="Education"/>  

    <Education :data="data"/>
</template>
<script setup>
    const {data , padding, error} = await useFetch('/api/education')

</script>