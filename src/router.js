import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '/portfolio/src/App.vue';
import IndividualProjectPage from '/portfolio/src/components/IndividualProject.vue';

const routes = [
  { path: '/portfolio/', component: HomePage },
  { path: '/IndividualProject/:id', component: IndividualProjectPage, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
