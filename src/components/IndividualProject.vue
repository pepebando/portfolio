<template>
    <div class="w-full bg-gradient-to-b from-purple-800 to-black min-h-screen text-white">
      <div class="max-w-4xl mx-auto px-6 py-12">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <!-- Imagen del Podcast -->
          <img 
            src="https://via.placeholder.com/150" 
            alt="Podcast Cover" 
            class="w-40 h-40 rounded-lg object-cover"
          />
          
          <!-- Información del Podcast -->
          <div>
            <p class="text-sm text-gray-300">Episodio de podcast</p>
            <h1 class="text-2xl md:text-3xl font-bold leading-tight">
              {{ title }}
            </h1>
            <p class="text-lg text-gray-400 mt-1">MIEDO AL MIEDO</p>
            <p class="text-sm text-gray-400 mt-2">🎥 Video • 10 mar • 47 min 14 segundos</p>
          </div>
        </div>
  
        <!-- Controles de Reproducción -->
        <div class="flex items-center space-x-4 mt-6">
          <button class="p-4 bg-green-500 rounded-full text-black">
            <PlayIcon class="w-6 h-6" />
          </button>
          <button class="p-2 bg-gray-700 rounded-full">
            <DownloadIcon class="w-6 h-6 text-white" />
          </button>
          <button class="p-2 bg-gray-700 rounded-full">
            <PlusIcon class="w-6 h-6 text-white" />
          </button>
          <button class="p-2 bg-gray-700 rounded-full">
            <MoreHorizontalIcon class="w-6 h-6 text-white" />
          </button>
        </div>
  
        <!-- Tabs (Descripción y Transcripción) -->
        <div class="mt-6 border-b border-gray-700 flex space-x-8">
          <button @click="activeTab = 'description'" :class="activeTab === 'description' ? 'text-white border-b-2 border-green-500' : 'text-gray-400'"
            class="pb-2 font-semibold transition-colors">
            Descripción
          </button>
          <button @click="activeTab = 'transcription'" :class="activeTab === 'transcription' ? 'text-white border-b-2 border-green-500' : 'text-gray-400'"
            class="pb-2 font-semibold transition-colors">
            Transcripción
          </button>
        </div>
  
        <!-- Contenido de los Tabs -->
        <div class="mt-4">
          <p v-if="activeTab === 'description'" class="text-gray-300">
            Comenzó haciendo contenido con sus mejores amigos, El Parche, después algo pasó...
            decidió seguir solo, pero en el camino se dio cuenta que no podía ser bueno para todo, le tocaba confiar y delegar. <br /><br />
            De todo este proceso, terminó dándose cuenta que podía hacer una empresa, pero solo si lograba detectar el verdadero talento de sus partners.
          </p>
  
          <p v-if="activeTab === 'transcription'" class="text-gray-300">
            [Aquí iría la transcripción del episodio]
          </p>
        </div>
  
        <!-- Botón Ver Todos los Episodios -->
        <button class="mt-6 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition">
          Ver todos los episodios
        </button>
  
      </div>
    </div>
  </template>

<script setup lang="ts">
import { ref } from 'vue';
import { PlayIcon, DownloadIcon, PlusIcon, MoreHorizontalIcon } from 'lucide-vue-next';

const activeTab = ref('description');
defineProps<{ title: string}>();
</script>
