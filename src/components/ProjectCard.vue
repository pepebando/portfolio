<template>
  <div  @mouseover="show = true" @mouseleave="show = false" class="relative group p-5 cursor-pointer rounded-lg  hover:bg-greyspotclear p-2">
    <!-- Imagen -->
    <img :src="image" alt="Cover"   class="w-full h-60 lg:h-40 object-cover rounded-lg " />
    
    <!-- Cinta de título -->
    <div class=" flex items-center justify-center text-center lg:justify-left lg:text-left text-white px-2 py-1 rounded-md text-3xl lg:text-sm font-bold w-full h-20 lg:h-10 " :class="color">
      {{ title }}
    </div>
    <!-- Botón de Play -->
    <Transition name="slide">
      <button raised v-if="show"
      class="absolute bottom-2 right-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 raised z-10">
      <PlayIcon class="w-6 h-6 text-black" />
    </button>
  </Transition>
  <!-- Descripción -->
  <p class="mt-3 text-gray-300 text-3xl lg:text-sm">{{ description }}</p>
</div>
</template>
<script setup lang="ts">
import { ref} from 'vue';
const show = ref(false);
import { PlayIcon } from 'lucide-vue-next';

defineProps<{ title: string, image: string ,description: string, color:string}>();
</script>

<style>
/* Definir animaciones */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>