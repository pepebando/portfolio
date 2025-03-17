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
      <ProjectCard v-for="(project, index) in projectarray" :key="index" :title="project.title" :image="project.image" :description="project.description" :color="project.color"/>
    </div>
  </div>

  </template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectCard from '/src/components/ProjectCard.vue';
import ProjectFavoriteCard from '/src/components/ProjectFavoriteCard.vue';

const projectarray = ref([
{ title: 'Mix Diario 1',image:"https://placehold.in/1920x1080@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep1"},
{ title: 'Mix Diario 2',image:"https://placehold.in/200x200@2x.png/dark",description:"Este proyecto, esta hecho en y se usaron estos lenguajes" ,color:"bg-titlep2"},
{ title: 'Mix Diario 3',image:"https://placehold.in/200x200@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep3"},
{ title: 'Mix Diario 4',image:"https://placehold.in/200x200@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep4"},
{ title: 'Mix Diario 5',image:"https://placehold.in/200x200@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep5"},
{ title: 'Mix Diario 1',image:"https://placehold.in/200x200@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep6"},
{ title: 'Mix Diario 1',image:"https://placehold.in/200x200@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep1"},
{ title: 'Mix Diario 2',image:"https://placehold.in/200x200@2x.png/dark",description:"Este proyecto, esta hecho en y se usaron estos lenguajes" ,color:"bg-titlep2"},
{ title: 'Mix Diario 3',image:"https://placehold.in/200x200@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep3"},
{ title: 'Mix Diario 4',image:"https://placehold.in/200x200@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep4"},
{ title: 'Mix Diario 5',image:"https://placehold.in/200x200@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep5"},
{ title: 'Mix Diario 1',image:"https://placehold.in/200x200@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep6"},
{ title: 'Mix Diario 1',image:"https://placehold.in/200x200@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep1"},
{ title: 'Mix Diario 2',image:"https://placehold.in/200x200@2x.png/dark",description:"Este proyecto, esta hecho en y se usaron estos lenguajes" ,color:"bg-titlep2"},
{ title: 'Mix Diario 3',image:"https://placehold.in/200x200@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep3"},
{ title: 'Mix Diario 4',image:"https://placehold.in/200x200@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep4"},
{ title: 'Mix Diario 5',image:"https://placehold.in/200x200@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep5"},
{ title: 'Mix Diario 1',image:"https://placehold.in/200x200@2x.png/dark" ,description:"Este proyecto, esta hecho en y se usaron estos lenguajes",color:"bg-titlep6"}
]);

const favoritesrray = ref([
{ title: 'Mix Diario 1',image:"https://placehold.in/200x200@2x.png/dark" },
{ title: 'Mix Diario 2',image:"https://placehold.in/300x200@2x.png/dark" },
{ title: 'Mix Diario 3',image:"https://placehold.in/300x200@2x.png/dark" },
{ title: 'Mix Diario 4',image:"https://placehold.in/300x200@2x.png/dark" },
{ title: 'Mix Diario 5',image:"https://placehold.in/300x200@2x.png/dark" },
{ title: 'Mix Diario 1',image:"https://placehold.in/200x200@2x.png/dark" },
{ title: 'Mix Diario 1',image:"https://placehold.in/200x200@2x.png/dark" },
{ title: 'Mix Diario 2',image:"https://placehold.in/300x200@2x.png/dark" }
]);
</script>