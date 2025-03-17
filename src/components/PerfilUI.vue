<template>
    <div class="w-full p-4 mb-2 px-6 bg-gradient-to-b from-gray-700 to-black rounded-lg scrollbar overflow-y-scroll">
        <!-- Encabezado con Fondo Degradado -->
        <div class="relative flex items-center p-6">
            <img class=" w-50 h-50 rounded-full border-4 border-gray-900 " src="/src/assets/Profile.jpg" alt="Profile Picture" />
            <div class="ml-6">
                <p class="text-2xl lg:text-sm text-gray-300">Profile</p>
                <h1 class="text-5xl lg:text-5xl font-bold">José Obando</h1>
                <p class="text-2xl lg:text-sm text-gray-400 mt-2">+30 Projects Created • +5 Programming Languages • Bilingual(English/Spanish)</p>
            </div>
        </div>
        
        <!-- Sección de Artistas -->
        <section class="w-full p-6">
            <h2 class="text-center text-4xl lg:text-left lg:text-2xl font-bold mb-10">Technical Skills</h2>
            <div class="grid grid-cols-3 place-items-center lg:grid-cols-7 overflow-y-none overflow-x-none  ">
                <PerfilCardUI v-for="(project, index) in Habilidades" :key="index" :title="project.title" :image="project.image" />
            </div>
        </section>
        
        <section class="p-6">
            <h2 class="text-4xl lg:text-2xl font-bold">Certficates and Education</h2>
            <div class="mt-4">
                <SocialMediaPercilUI v-for="(social, index) in socialmedia" :key="index" :number="index + 1" :title="social.title" :description="social.description" :duration="social.duration" :image="social.image" />
            </div>
        </section>

    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import PerfilCardUI from '/src/components/PerfilCardUI.vue';
import SocialMediaPercilUI from '/src/components/CertificatesCards.vue';


const Habilidades = ref([
{ title: "Unreal Engine", image: "https://img.icons8.com/nolan/240/unreal-engine.png" },
{ title: "Python", image: "https://cdn.brandfetch.io/idbpOFBgcc/w/398/h/398/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
{ title: "Wordpress", image: "https://cdn.brandfetch.io/idbnlnCBDY/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
{ title: "PHP", image: "https://cdn.brandfetch.io/idYqAg6C_T/w/200/h/200/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
{ title: "C++", image: "https://img.icons8.com/color/240/c-plus-plus-logo.png" },
{ title: "C#", image: "https://img.icons8.com/color/240/c-sharp-logo-2.png" },
{ title: "Node JS", image: "https://img.icons8.com/fluency/240/node-js.png" },
{ title: "Javascript", image: "https://img.icons8.com/color/240/javascript--v1.png" },
{ title: "VUE", image: "https://img.icons8.com/nolan/240/vue-js.png" },
{ title: "SQL", image: "https://img.icons8.com/external-soft-fill-juicy-fish/240/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png" },
{ title: "MySQL", image: "https://img.icons8.com/fluency/240/my-sql.png" },
{ title: "Reality Capture", image: "https://www.modenatechnologies.com/site/wp-content/uploads/2021/08/RealityCapture-Logo.jpg" },
{ title: "GIT", image: "https://img.icons8.com/color/240/git.png" }
]);

const socialmedia = ref([
{ title: "San Francisco de Quito University", description: "Interactivity and multimedia career", duration: "4 Years", image: "https://cdn.brandfetch.io/idXtap1lEY/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"  },
{ title: "San Francisco de Quito University", description: "Computer engineering minor", duration: "1 Year", image: "https://cdn.brandfetch.io/idXtap1lEY/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"  },
{ title: "IELTS ",  description: "C1 CEFR Level", duration: "n/a",image: "https://cdn.brandfetch.io/idYQtq3VI6/w/800/h/800/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"  },
{ title: "Escuela Politecnica del Ejercito",  description: "Ethical Hacking Course", duration: "3 Weeks",image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Logo_ESPE.png"  },
{ title: "Adobe Certification ",  description: "Photshop and illustrator CS6 certification", duration: "n/a",image: "https://cdn.brandfetch.io/id_KsyK7J9/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"  },
]);
</script>

