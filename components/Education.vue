<template>
    <div>
        <div class="title-abilities">
            <div class="line width-20" ></div>
            <p class="text-abilities"> faculty </p>
            <div class="line width" ></div>
        </div>

        
    </div>
</template>
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
            width: 100%;
        }
        .width-20{
            width:20px
        }
    }
</style>