<template>
    <li class="cursor-pointer ">            
        <div class=" flex max-w-sm items-center gap-x-4 rounded-xl pt-3 pb-3 pl-1 bg-black hover:bg-greyspotclear ">
            <img :src="image" class="size-9 shrink-0"  alt="Logo" />
            <div>
                <div class="text-sm text-white " >{{ title }}</div>
            </div>
        </div>
    </li>
</template>
<script setup lang="ts">
defineProps<{ title: string, image: string }>();
</script>