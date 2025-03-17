<template>
  <div class="flex h-screen w-screen bg-black text-white overflow-hidden">
    <main class="w-full">
      <div class="w-full flex h-90/100">
        
        <!-- Sidebar Desktop (Solo en Desktop) -->
        <div class="w-2/10 p-4 m-2 bg-black flex flex-col rounded-lg scrollbar overflow-y-scroll hidden lg:block" >
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
        
        <!-- Botón de Menú Móvil (Solo en móvil) -->
        <button @click="menuOpen = true" class="fixed top-4 right-5 z-50 p-2 bg-gray-800 text-white rounded-md block lg:hidden">
          <MenuIcon class="w-12 h-12" />
        </button>
        
        <!-- Menú Responsive en Móvil -->
        <Transition name="slide">
          <div v-if="menuOpen" class="fixed inset-0  bg-black bg-opacity-50 backdrop-blur-md z-50 flex"
          @click="menuOpen = false"
          @touchstart="menuOpen = false">
          
          <!-- Contenedor del Menú -->
          
          <div class="f-right w-full bg-black text-white p-6 shadow-lg z-50 relative p-15" @click.stop>
            <button @click="menuOpen = false" class="absolute top-4 left-4 text-white w-12 h-12 z-999">
              <XIcon class="w-12 h-12" />
            </button>  
            <nav class="space-y-4">
              <ul>
                <li class="p-5">
                  <div @click="PerfilActual = 'Home'" class="flex justify-center items-center gap-x-4 rounded-xl pt-3 pb-3 pl-1 border-1 bg-black hover:bg-greyspotclear">
                    <HomeIcon class="w-12 h-12" />
                    <span>Home</span>
                  </div>
                </li>
                <li class="p-5">
                  <div @click="PerfilActual = 'Projects'" class="flex justify-center items-center gap-x-4 rounded-xl pt-3 pb-3 pl-1 border-1 bg-black hover:bg-greyspotclear">
                    <LibraryIcon class="w-12 h-12" />
                    <span>All my projects</span>
                  </div>
                </li>
                <li class="p-5">
                  <div @click="PerfilActual = 'Contact'" class="flex justify-center items-center gap-x-4 rounded-xl pt-3 pb-3 pl-1 border-1 bg-black hover:bg-greyspotclear">
                    <MailIcon class="w-12 h-12" />
                    <span>Contact</span>
                  </div>
                </li>
                <SidebarResponsive  v-for="(project, index) in sidebararray" :key="index" :title="project.title" :image="project.image" />
              </ul>
            </nav>
          </div>
          
        </div>
      </Transition>
      
      <!-- Transición entre Secciones -->
      <Transition name="fade" mode="out-in">
        <component :is="currentComponent" :key="PerfilActual" />
      </Transition>
    </div>
    
    <!-- Barra de Reproducción -->
    <PlayBar class="fixed" />
    
  </main>
</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SidebarResponsive from '/src/components/SidebarResponsive.vue';
import SidebarCard from '/src/components/SidebarCard.vue';
import PortfolioUI from '/src/components/PortfolioUI.vue';
import PerfilUI from '/src/components/PerfilUI.vue';
import PlayBar from '/src/components/PlayBar.vue';
import ContactForm from '/src/components/ContactForm.vue';

import { HomeIcon, LibraryIcon, MailIcon, MenuIcon,XIcon } from 'lucide-vue-next';

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

const PerfilActual = ref("Home");
const menuOpen = ref(false);

// Computed property para cambiar dinámicamente el componente
const currentComponent = computed(() => {
  switch (PerfilActual.value) {
    case "Projects": return PortfolioUI;
    case "Contact": return ContactForm;
    case "Home": return PerfilUI;
    default: return PerfilUI;
  }
});
</script>

<style>
/* Transición de Fade Mejorada */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
/* Transición deslizante */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
