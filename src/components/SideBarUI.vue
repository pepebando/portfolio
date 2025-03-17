<template>
        <div class="w-2/10 p-4 m-2 bg-black flex flex-col rounded-lg scrollbar overflow-y-scroll">
            <div @click="PerfilActual = 'Home'" class="flex items-center space-x-2 mb-4 cursor-pointer transition-opacity">
              <HomeIcon class="w-6 h-6" />
              <span>Home</span>
            </div>
            <div @click="PerfilActual = 'Projects'" class="flex items-center space-x-2 mb-4 cursor-pointer transition-opacity">
              <LibraryIcon class="w-6 h-6" />
              <span>All my projects</span>
            </div>
            <div @click="PerfilActual = 'Contact'" class="flex items-center space-x-2 cursor-pointer transition-opacity">
              <MailIcon class="w-6 h-6" />
              <span>Contact</span>
            </div>
            <div class="mt-7">
              <h2 class="text-lg font-semibold">Categories</h2>
              <ul class="mt-1 space-y-1">
                <SidebarCard v-for="(project, index) in sidebararray" :key="index" :title="project.title" :image="project.image" />
              </ul>
            </div>
          </div>
</template>
<script setup lang="ts">
import { ref} from 'vue';

import SidebarCard from '/src/components/SidebarCard.vue';

import { HomeIcon, LibraryIcon, MailIcon } from 'lucide-vue-next';

const sidebararray = ref([
{ title: 'Unreal Engine', image: "https://img.icons8.com/nolan/240/unreal-engine.png" },
{ title: 'Web', image: "https://img.icons8.com/cute-clipart/64/web.png" },
{ title: 'Augmented Reality', image: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-augmented-reality-new-media-flaticons-lineal-color-flat-icons-2.png" },
{ title: 'Mixed Reality', image: "https://cdn.brandfetch.io/idWvz5T3V7/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B" },
{ title: 'Virtual Reality', image: "https://img.icons8.com/plasticine/100/virtual-reality.png" },
{ title: 'Videogames', image: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-gaming-live-streaming-flaticons-flat-flat-icons.png" },
{ title: 'Python', image: "https://cdn.brandfetch.io/idbpOFBgcc/w/398/h/398/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
{ title: 'APPs', image: "https://img.icons8.com/color/48/apple-app-store--v3.png" },
{ title: 'Others', image: "https://cdn.brandfetch.io/id93sjCX4f/w/300/h/300/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" }
]);
</script>