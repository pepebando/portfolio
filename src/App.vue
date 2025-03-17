<template>
  <div class="flex h-screen w-screen bg-black text-white overflow-hidden">
    <main class="w-full">
      
      <div class="w-full flex h-90/100">
        <SidebarResponsive />
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
import PortfolioUI from '/src/components/PortfolioUI.vue';
import PerfilUI from '/src/components/PerfilUI.vue';
import PlayBar from '/src/components/PlayBar.vue';
import ContactForm from '/src/components/ContactForm.vue';


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
</style>
