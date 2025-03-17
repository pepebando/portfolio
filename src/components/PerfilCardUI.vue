<template>
    <div class="flex flex-col items-center">
      <img :src="image" class="w-25 h-25 rounded-full object-cover" alt="Artist Image" />
      <p class="mt-2 text-sm">{{ title }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{ title: string, image: string }>();
  </script>