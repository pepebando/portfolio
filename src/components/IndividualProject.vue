<template>
  <div class="p-6 text-white">
    <h1 v-if="IndividualProject" class="text-3xl font-bold">{{ IndividualProject.title }}</h1>
    <p v-if="IndividualProject">{{ IndividualProject.description }}</p>
    <img v-if="IndividualProject" :src="IndividualProject.image" class="rounded-lg mt-4 w-64 h-64 object-cover" />
    
    <router-link to="/" class="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg">
      Back to Home
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const IndividualProject = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('/data.json'); // Load all IndividualProjects
    const data = await response.json();

    // Find the IndividualProject that matches the ID from the URL
    IndividualProject.value = data.find(p => p.id === parseInt(route.params.id));

    if (!IndividualProject.value) {
      console.error("IndividualProject not found");
    }
  } catch (error) {
    console.error('Error fetching IndividualProject:', error);
  }
});
</script>
