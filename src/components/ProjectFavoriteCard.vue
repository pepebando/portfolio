<template>
    
    <div class=" cursor-pointer opacity-80 flex max-w-full lg:max-w-full items-center gap-x-4 rounded-xl p-5 bg-greyspot hover:bg-greyspotclear ">
        <img :src="image" class="w-60 h-35 lg:w-70 lg:h-42  shrink-0"  alt="Logo" />
        <div>
            <div class="text-4xl lg:text-2xl font-medium text-white text-left lg:text-left " >{{ title }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{ title: string, image: string }>();
</script>