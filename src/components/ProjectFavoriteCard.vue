<template>
    <div class=" cursor-pointer opacity-80 flex max-w-sm items-center gap-x-4 rounded-xl p-3 bg-greyspot hover:bg-greyspotclear ">
        <img :src="image" class="size-24 lg:size-12 shrink-0"  alt="Logo" />
        <div>
            <div class="text-4xl lg:text-xl font-medium text-black text-white " >{{ title }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{ title: string, image: string }>();
</script>