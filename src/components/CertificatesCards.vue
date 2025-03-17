<template>
    <div class="flex items-center justify-between py-2 border-b border-gray-700">
        <div class="flex items-center space-x-4">
            <span class="text-gray-400">{{ number }}</span>
            
            <img :src="image" class="w-20 h-20 rounded-full object-cover" alt="SocialMedia" />
            <div>
                <p class="font-bold">{{ title }}</p>
                <p class="text-sm text-gray-400">{{ description }}</p>
            </div>
        </div>
        <span class="text-gray-400">{{ duration }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{ number: number; title: string; description: string; duration: string,image: string }>();
</script>
