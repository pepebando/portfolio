<template>
    <div class="relative">
        <!-- Botón de Menú -->
        <button @click="menuOpen = !menuOpen" class="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md">
            <MenuIcon class="w-6 h-6" />
        </button>
        
        <!-- Menú Desplegable -->
        <Transition name="slide">
            <div v-if="menuOpen" class="fixed inset-y-0 left-0 w-72 bg-black text-white p-6 shadow-lg z-40">
                
                <!-- Perfil -->
                <div class="flex items-center space-x-3 mb-6">
                    <img src="https://via.placeholder.com/50" class="w-12 h-12 rounded-full" />
                    <div>
                        <h2 class="text-lg font-bold">Pepe Obando</h2>
                        <p class="text-gray-400 text-sm">Ver perfil</p>
                    </div>
                </div>
                
                <!-- Opciones del Menú -->
                <nav class="space-y-4">
                    <ul>
                    <SidebarCard v-for="(project, index) in sidebararray" :key="index" :title="project.title" :image="project.image" />
                    </ul>
                </nav>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MenuIcon } from 'lucide-vue-next';
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

const menuOpen = ref(false);
</script>

<style>
/* Transición deslizante */
.slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}
.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
</style>
