<template>
    <div class="mb-10 ">
      <img :src="image" class="w-25 h-25 rounded-full object-cover mb-5" alt="Artist Image" />
      <p class="w-25 mt-2 text-sm text-center" >{{ title }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{ title: string, image: string }>();
  </script>