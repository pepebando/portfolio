<template>
  <div class="flex h-screen w-screen bg-black text-white overflow-hidden">
    <main class="w-full">
      <div class="w-full flex lg:h-90/100">
        <!-- Sidebar Desktop -->
        <div class="w-2/10 p-4 m-2 bg-black flex flex-col rounded-lg">
          <router-link 
            to="/" 
            class="flex items-center space-x-2 mb-4 cursor-pointer transition-opacity hover:opacity-75"
          >
            <HomeIcon class="w-6 h-6" />
            <span>Home</span>
          </router-link>
          
          <router-link 
            to="/projects" 
            class="flex items-center space-x-2 mb-4 cursor-pointer transition-opacity hover:opacity-75"
          >
            <LibraryIcon class="w-6 h-6" />
            <span>All my projects</span>
          </router-link>
          
          <router-link 
            to="/contact" 
            class="flex items-center space-x-2 cursor-pointer transition-opacity hover:opacity-75"
          >
            <MailIcon class="w-6 h-6" />
            <span>Contact</span>
          </router-link>
          
          <div class="mt-7">
            <h2 class="text-lg font-semibold">Categories</h2>
            <ul class="mt-1 space-y-1">
              <router-link 
                v-for="(category, index) in categories" 
                :key="index" 
                :to="{ path: '/projects', query: { category: category.tags } }"
                class="transition-opacity hover:opacity-75"
              >
                <SidebarCard :title="category.title" :image="category.image" />
              </router-link>
            </ul>
          </div>
        </div>
        
        <!-- Contenido Principal con animación -->
        <div class="flex-1 p-6 overflow-y-scroll scrollbar">
          <Transition name="fade">
            <router-view />
          </Transition>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SidebarCard from '/src/components/SidebarCard.vue';


const categories = ref([
  { title: 'Unreal Engine',tags:'tag1', image: "https://img.icons8.com/nolan/240/unreal-engine.png" },
  { title: 'Web',tags:'tag3', image: "https://img.icons8.com/cute-clipart/64/web.png"},
  { title: 'Augmented Reality',tags:'tag2', image: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-augmented-reality-new-media-flaticons-lineal-color-flat-icons-2.png" },
  { title: 'Mixed Reality',tags:'tag2', image: "https://cdn.brandfetch.io/idWvz5T3V7/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B" },
  { title: 'Virtual Reality',tags:'tag2', image: "https://img.icons8.com/plasticine/100/virtual-reality.png" },
  { title: 'Videogames',tags:'tag3', image: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-gaming-live-streaming-flaticons-flat-flat-icons.png" },
  { title: 'Python',tags:'tag4', image: "https://cdn.brandfetch.io/idbpOFBgcc/w/398/h/398/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { title: 'APPs',tags:'tag5', image: "https://img.icons8.com/color/48/apple-app-store--v3.png" },
  { title: 'Others',tags:'tag6', image: "https://cdn.brandfetch.io/id93sjCX4f/w/300/h/300/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" }
]);
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}

/* Transición de Fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Efecto deslizante opcional */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
