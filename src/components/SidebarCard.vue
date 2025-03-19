<template>
    <li class="cursor-pointer ">            
        <div class=" flex max-w-sm items-center gap-x-4 rounded-xl pt-3 pb-3 pl-1 bg-black hover:bg-greyspotclear ">
            <div>
                <div class="text-sm text-white flex" ><ChevronRight class="size-4"/>{{ title }}</div>
            </div>
        </div>
    </li>
</template>
<script setup lang="ts">
import {ChevronRight} from "lucide-vue-next";
defineProps<{ title: string, image: string }>();
</script>