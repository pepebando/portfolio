<template>
  <div class="p-6 text-white bg-black min-h-screen">
    
    <!-- Sección de portada -->
    <div  v-if="project" class="relative bg-gradient-to-b from-purple-800 to-black p-6 rounded-lg">
      <div class="flex items-center">
        <img  :src="project.image" class="rounded-lg w-48 h-48 object-cover shadow-lg" />
        <div class="ml-6">
          <p class="text-sm text-gray-300">Episodio de podcast</p>
          <h1 class="text-4xl font-bold">Podcast ID: {{ route.params.id }}</h1>
          <p class="text-lg text-gray-400"></p>
          <div class="flex items-center space-x-4 text-gray-400 mt-2">
            
            
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="text-center text-red-500 mt-10">
      <h1 class="text-3xl font-bold">Proyecto no encontrado</h1>
      <h1 class="text-4xl font-bold">Podcast ID: {{ route.params.id }}</h1>
      <router-link to="/" class="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">
        <p> Regresar </p>
      </router-link>
    </div>
    
    <!-- Sección de Contenido -->
    <div class="mt-6">
      <div class="border-b border-gray-700 flex space-x-6">
        <button class="pb-2 border-b-2 border-green-500 text-white">Descripción</button>
        <button class="pb-2 text-gray-400 hover:text-white">Transcripción</button>
      </div>
      
      <p class="mt-4 text-gray-300"></p>
      <button class="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">... Mostrar más</button>
    </div>
    
    <!-- Botón para regresar -->
    <router-link to="/" class="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">
      🔙 Ver todos los episodios
    </router-link>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const project = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('dataIndividualProject.json');

    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo JSON");
    }
    else{console.log("Carga exitosa")}
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
