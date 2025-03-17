<template>
  <div v-if="project" class="p-6 text-white bg-black min-h-screen">
    <!-- Sección de portada -->
    <div   class="relative bg-gradient-to-b from-purple-800 to-black p-6 rounded-lg scrollbar overflow-y-scroll">
      <div class="flex items-center">
        <img  :src="project.image" class="rounded-lg w-48 h-48 object-cover shadow-lg" />
        <div class="ml-6">
          <p class="text-sm text-gray-300">{{ project.subtitle }}</p>
          <h1 class="text-4xl font-bold"> {{ project.title }}</h1>
          <p class="text-lg text-gray-400"></p>
          <div class="flex items-center space-x-4 text-gray-400 mt-2">
          </div>
        </div>
      </div>
    </div>
    <div class="p-6  min-h-screen text-white">
      <!-- Navegación de Tabs -->
      <div class="flex border-b border-gray-700">
        <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = tab"
        class="px-4 py-2 transition-all duration-300"
        :class="activeTab === tab ? 'border-b-2 border-green-500 text-white' : 'text-gray-400 hover:text-white'"
        >
        {{ tab }}
      </button>
    </div>
    
    <!-- Contenido de Tabs -->
    <div class="mt-4">
      <div v-if="activeTab === 'Descripcion'" class="text-gray-300">
        📜 Esta es la descripción del contenido. Aquí puedes escribir información detallada.
      </div>
      <div v-if="activeTab === 'Imagenes'" class="text-gray-300">
        <div class="p-6 bg-black min-h-screen text-white">
          <h1 class="text-3xl font-bold text-center mb-6">📸 Galería Mosaico</h1>
          
          <!-- Galería con CSS Grid -->
          <div class="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-[200px]">
            <div 
            v-for="(image, index) in images" 
            :key="index" 
            class="relative group overflow-hidden rounded-lg cursor-pointer"
            :class="getGridClass(index)"
            @click="openLightbox(index)"
            >
            <img 
            :src="image.src" 
            :alt="image.alt"
            class="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
        </div>
        
        <!-- Lightbox (Pantalla Completa) -->
        <div v-if="lightboxActive" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button @click="closeLightbox" class="absolute top-4 right-6 text-white text-3xl">&times;</button>
          
          <!-- Botón Anterior -->
          <button @click="prevImage" class="absolute left-6 text-white text-4xl cursor-pointer">&larr;</button>
          
          <!-- Imagen a pantalla completa -->
          <img :src="images[currentIndex].src" :alt="images[currentIndex].alt"
          class="max-w-full max-h-screen object-contain shadow-lg">
          
          <!-- Botón Siguiente -->
          <button @click="nextImage" class="absolute right-6 text-white text-4xl cursor-pointer">&rarr;</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<!-- Botón para regresar -->
<router-link to="/projects" class="mt-6 inline-block px-4 py-2  text-white rounded-lg  transition absolute top-0 left:50">
  <ArrowLeft class="w-12 h-12 mr-2"/>
</router-link>
</template>

<script setup>
import { ref, onMounted,onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowLeft } from 'lucide-vue-next';
const route = useRoute();
const project = ref(null);
const images = ref([
{ src: "https://placehold.in/1920x1080@2x.png/dark", alt: "Naturaleza" },
{ src: "https://placehold.in/1920x1080@2x.png/dark", alt: "Ciudad Nocturna" },
{ src: "https://placehold.in/1920x1080@2x.png/dark", alt: "Tecnología" },
{ src: "https://placehold.in/1920x1080@2x.png/dark", alt: "Espacio" },
{ src: "https://placehold.in/1920x1080@2x.png/dark", alt: "Océano" },
{ src: "https://placehold.in/1920x1080@2x.png/dark", alt: "Arte Digital" },
{ src: "https://placehold.in/1920x1080@2x.png/dark", alt: "Naturaleza" },
{ src: "https://placehold.in/1920x1080@2x.png/dark", alt: "Ciudad Nocturna" },
{ src: "https://placehold.in/1920x1080@2x.png/dark", alt: "Tecnología" },
{ src: "https://placehold.in/1920x1080@2x.png/dark", alt: "Espacio" },
{ src: "https://placehold.in/1920x1080@2x.png/dark", alt: "Océano" },
{ src: "https://placehold.in/1920x1080@2x.png/dark", alt: "Arte Digital" }
]);


// Estado del lightbox y la imagen actual
const lightboxActive = ref(false);
const currentIndex = ref(0);

// Función para abrir la imagen en pantalla completa
const openLightbox = (index) => {
  currentIndex.value = index;
  lightboxActive.value = true;
  enterFullscreen();
};

// Cerrar Lightbox
const closeLightbox = () => {
  lightboxActive.value = false;
  exitFullscreen();
};

// Navegar a la imagen anterior
const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

// Navegar a la imagen siguiente
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// Función para activar pantalla completa
const enterFullscreen = () => {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
};

// Función para salir de pantalla completa
const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};

// Cerrar con la tecla "Esc"
const handleKeydown = (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowLeft") {
    prevImage();
  } else if (event.key === "ArrowRight") {
    nextImage();
  }
};

// Añadir y remover el event listener para capturar teclas
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});

// Clases CSS para el diseño en mosaico
const getGridClass = (index) => {
  const layouts = [
    "col-span-2 row-span-2", // Imagen grande
    "col-span-1 row-span-1", // Imagen normal
    "col-span-1 row-span-2", // Imagen vertical
    "col-span-2 row-span-1", // Imagen horizontal
  ];
  return layouts[index % layouts.length]; // Cicla entre diferentes layouts
};
// Lista de Tabs
const tabs = ['Descripcion', 'Imagenes'];

// Tab activa por defecto
const activeTab = ref(tabs[0]);
const value = ref('0');
onMounted(async () => {
  try {
    const response = await fetch('https://pepebando.github.io/dataIndividualProject.json');
    console.log("🔍 Respuesta del servidor:", response);
    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo JSON");
    }
    
    const jsonData = await response.json();  
    project.value = jsonData.find(p => p.id == route.params.id);
    
    
    
    if (!project.value) {
      console.error("⚠ Proyecto no encontrado");
    } else {
      console.log("🔹 Proyecto cargado:", project.value.title); // Debugging en consola
    }
    
  } catch (error) {
    console.error("Error al cargar el JSON:", error);
  }
});

</script>

<style>
/* Puedes agregar animaciones o mejorar estilos aquí */
</style>
