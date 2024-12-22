<script lang="ts" setup>
const props = defineProps({
    name: String,
    img: String,
})
</script>

<template>
    <div class="w-[128px] h-[128px]">
        <img :src="`/img/partners/${img}.jpg`" alt="" class="rounded-3xl shadow-lg shadow-D-white">
        <p class="text-center font-Primary font-bold text-D-primary-pink text-2xl -mt-[15%]">{{ name }}</p>
    </div>
</template>