<template>           
        <div class="flex flex-col items-center justify-center items-center w-50 h-50 rounded-xl pt-3 pb-3 pl-1 border-1 bg-black hover:bg-greyspotclear">
            <img :src="image" class="size-25 shrink-0"  alt="Logo" />
            <div>
                <div class="text-2xl font-medium text-black text-white text-center p-2" >{{ title }}</div>
            </div>
        </div>
</template>

<script setup lang="ts">
defineProps<{ title: string, image: string }>();
</script>