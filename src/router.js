import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/App.vue';
import IndividualProject from '/src/components/IndividualProject.vue';
import PerfilUI from '/src/components/PerfilUI.vue';
import PortfolioUI from '/src/components/PortfolioUI.vue';
import ContactForm from '/src/components/ContactForm.vue';
// Asegúrate de que el archivo existe

const routes = [
  { path: '/', component: PerfilUI },
  { path: '/projects', component: PortfolioUI },
  { path: '/contact', component: ContactForm },
  { path: '/project/:id', component: IndividualProject, props: true } ,
  { path: '/:pathMatch(.*)*', component: Home },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
