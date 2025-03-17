<template>
  <div class=" w-full p-4 mb-2 px-6 bg-gradient-to-b from-bgtopgradient to-black rounded-lg scrollbar overflow-y-scroll  ">
    <div class="flex justify-between mt-15 lg:mt-0">
      <h1 class="text-5xl lg:text-3xl font-bold">¡Highlights!</h1>  
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 ">
      <ProjectFavoriteCard v-for="(project, index) in favoritesrray" :key="index" :title="project.title" :image="project.image" />
    </div> 
    <h1 class="text-5xl lg:text-3xl mt-15 font-bold mt-7">Projects</h1>
    <div class="grid grid-cols-3  lg:grid-cols-6 gap-4 mt-4">
      <router-link v-for="IndividualProject in IndividualProjects" :key="IndividualProject.id" :to="`/IndividualProject/${IndividualProject.id}`" >
        <ProjectCard :title="IndividualProject.title" :image="IndividualProject.image" :description="IndividualProject.description" :color="IndividualProject.color"/>
      </router-link>
    </div>
    <div class="h-50 block lg:hidden"></div>
  </div>
  
</template>

<script setup lang="ts">
import { ref ,onMounted} from 'vue';
import ProjectCard from '/src/components/ProjectCard.vue';
import ProjectFavoriteCard from '/src/components/ProjectFavoriteCard.vue';

const IndividualProjects = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('src/assets/data.json'); // Fetch data.json
    IndividualProjects.value = await response.json();
    console.log('Exito al tomar los datos');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const favoritesrray = ref([
{ title: 'Mix Diario 1',image:"https://placehold.in/1920x1080@2x.png/dark" },
{ title: 'Mix Diario 2',image:"https://placehold.in/300x200@2x.png/dark" },
{ title: 'Mix Diario 3',image:"https://placehold.in/300x200@2x.png/dark" },
{ title: 'Mix Diario 4',image:"https://placehold.in/300x200@2x.png/dark" },
{ title: 'Mix Diario 5',image:"https://placehold.in/300x200@2x.png/dark" },
{ title: 'Mix Diario 1',image:"https://placehold.in/200x200@2x.png/dark" },
{ title: 'Mix Diario 1',image:"https://placehold.in/200x200@2x.png/dark" },
{ title: 'Mix Diario 2',image:"https://placehold.in/300x200@2x.png/dark" }
]);
</script>