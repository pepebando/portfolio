<template>
  <div class="flex h-screen w-screen bg-black text-white overflow-hidden">
    <main class="w-full">
      <div class="w-full flex lg:h-90/100">
        <!-- Sidebar Desktop -->
        <div class="w-2/10 p-4 m-2 bg-black flex flex-col rounded-lg hidden lg:block">
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
<!--Menu Mobile-->
<div class="relative lg:hidden">
  <!-- Botón de menú -->
  
  <button @click="isOpen = !isOpen" class="fixed top-10 right-10 z-50 p-2 bg-black text-white rounded-lg shadow-lg">
    <MenuIcon class="w-20 h-20" />
  </button>
  <transition name="slide-fade">
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-80 z-40 flex flex-col p-6">
      <h1 class="text-5xl text-center mt-25 m-10">Main menu</h1>
      <button @click="isOpen = false" class="absolute top-10 left-10 text-white text-7xl">&times;</button>
      <masonry-wall :items="menuMobile" :column-width='650' :min-columns="3" :gap="10" >
        <template v-slot="{ item }">
          <router-link @click="isOpen = false" :to="item.link" class="block p-4 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">
            <div class="flex items-center space-x-3">
              <img :src="item.image" alt="icon" class="w-20 h-20 object-contain" />
              <span class="text-3xl">{{ item.title }}</span>
            </div>
          </router-link>
        </template>
      </masonry-wall>
      <h1 class="text-5xl text-center mt-25 m-10">Categories</h1>
      <masonry-wall :items="categories" :min-columns="2"  :gap="10">
        <template v-slot="{ item }">
          <router-link @click="isOpen = false" :key=item.index :to="{path: '/projects',query:{category: item.tags}}" class="block p-4 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">
            <div class="flex items-center space-x-3">
              <img :src="item.image" alt="icon" class="w-20 h-20 object-contain" />
              <span class="text-3xl">{{ item.title }}</span>
            </div>
          </router-link>
        </template>
      </masonry-wall>
    </div>
  </transition>
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
import MasonryWall from "@yeger/vue-masonry-wall";
import { Menu as MenuIcon , MailIcon,LibraryIcon,HomeIcon} from "lucide-vue-next";
const isOpen = ref(false);
const menuMobile = ref([
{ title: "Home", link: "/", image: "https://img.icons8.com/ffffff/ios-filled/50/home.png" },
{ title: "Projects", link: "/projects", image: "https://img.icons8.com/ffffff/ios-filled/50/project.png" },
{ title: "Contact", link: "/contact", image: "https://img.icons8.com/ffffff/ios-filled/50/email.png" },
]);
const categories = ref([
{ title: 'Unreal Engine',tags:'ue', image: "https://img.icons8.com/nolan/240/unreal-engine.png" },
{ title: 'Web', tags:"web", image:"https://img.icons8.com/cute-clipart/64/web.png"},
{ title: 'Augmented Reality',tags:'ar', image: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-augmented-reality-new-media-flaticons-lineal-color-flat-icons-2.png" },
{ title: 'Mixed Reality',tags:'mr', image: "https://cdn.brandfetch.io/idWvz5T3V7/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B" },
{ title: 'Virtual Reality',tags:'vr', image: "https://img.icons8.com/plasticine/100/virtual-reality.png" },
{ title: 'Videogames',tags:'games', image: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-gaming-live-streaming-flaticons-flat-flat-icons.png" },
{ title: 'Python',tags:'py', image: "https://cdn.brandfetch.io/idbpOFBgcc/w/398/h/398/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
{ title: 'APPs',tags:'app', image: "https://img.icons8.com/color/48/apple-app-store--v3.png" },
{ title: 'Others',tags:'other', image: "https://cdn.brandfetch.io/id93sjCX4f/w/300/h/300/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" }
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
/* Animaciones para el menú */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
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
