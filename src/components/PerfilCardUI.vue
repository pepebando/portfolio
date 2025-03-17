<template>
    <div class="mb-10 ">
      <img :src="image" class="w-40 h-40 lg:w-25 lg:h-25 rounded-full object-cover mb-5" alt="Artist Image" />
      <h1 class="text-2xl mt-2 lg:text-sm text-center" >{{ title }}</h1>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{ title: string, image: string }>();
  </script>