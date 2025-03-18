<template >
  <div v-if="project" class="p-6 text-white bg-black ">
    <!-- Sección de portada -->
    <div class="relative bg-gradient-to-b from-purple-800 to-black p-6 rounded-lg scrollbar  ">
      <div class="flex items-center">
        <img :src="project.image" class="rounded-lg w-48 h-48 object-cover shadow-lg" />
        <div class="ml-6">
          <p class="text-sm text-gray-300">{{ project.subtitle }}</p>
          <h1 class="text-4xl font-bold">{{ project.title }}</h1>
        </div>
      </div>
    </div>

    <div class="p-6 min-h-screen text-white">
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
          <p>{{ project.description }}</p>
        </div>

        <div v-if="activeTab === 'Imagenes'" class="text-gray-300">
          <div class="p-6 bg-black min-h-screen text-white">
            <h1 class="text-3xl font-bold text-center mb-6">Galería Mosaico</h1>

            <!-- Masonry Wall -->
            <masonry-wall v-if="images.length" :items="images" :ssr-columns="1" :column-width="300" :gap="16">
              <template #default="{ item, index }">
                <div class="relative group overflow-hidden rounded-lg cursor-pointer" @click="openLightbox(index)">
                  <img :src="item.src" :alt="item.alt" class="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-110" />
                </div>
              </template>
            </masonry-wall>

            <!-- Lightbox (Pantalla Completa) -->
            <div v-if="lightboxActive" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
              <button @click="closeLightbox" class="absolute top-4 right-6 text-white text-3xl">&times;</button>

              <!-- Botón Anterior -->
              <button @click="prevImage" class="absolute left-6 text-white text-4xl cursor-pointer">&larr;</button>

              <!-- Imagen en pantalla completa -->
              <img v-if="currentImage" :src="currentImage.src" :alt="currentImage.alt" class="max-w-full max-h-screen object-contain shadow-lg">

              <!-- Botón Siguiente -->
              <button @click="nextImage" class="absolute right-6 text-white text-4xl cursor-pointer">&rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Botón para regresar -->
  <router-link to="/projects" class="mt-6 inline-block px-4 py-2 text-white rounded-lg transition absolute top-0 left-50">
    <ArrowLeft class="w-12 h-12 mr-2" />
  </router-link>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";
import MasonryWall from "@yeger/vue-masonry-wall";

const route = useRoute();
const project = ref(null);
const lightboxActive = ref(false);
const currentIndex = ref(0);

// Computed para obtener imágenes de `ImagenesIndividualProjectArray`
const images = computed(() => project.value?.ImagenesIndividualProjectArray || []);

// Imagen actual en el lightbox
const currentImage = computed(() => images.value[currentIndex.value] || null);

// ✅ Corregido: `openLightbox(index)` ahora recibe el índice correctamente
const openLightbox = (index) => {
  console.log("🔍 Abriendo imagen en index:", index);
  currentIndex.value = index;
  lightboxActive.value = true;
};

// ✅ Corregido: Se verifica que hay imágenes antes de navegar
const prevImage = () => {
  if (!images.value.length) return;
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const nextImage = () => {
  if (!images.value.length) return;
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// ✅ Cierra el Lightbox
const closeLightbox = () => {
  lightboxActive.value = false;
};

// ✅ Cargar datos del JSON
onMounted(async () => {
  try {
    const response = await fetch("/dataIndividualProject.json");
    if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");

    const jsonData = await response.json();
    project.value = jsonData.find((p) => p.id == route.params.id);

    console.log("Imágenes cargadas:", project.value?.ImagenesIndividualProjectArray);
  } catch (error) {
    console.error("Error al cargar el JSON:", error);
  }
});

// Lista de Tabs
const tabs = ["Descripcion", "Imagenes"];
const activeTab = ref(tabs[0]);
</script>
