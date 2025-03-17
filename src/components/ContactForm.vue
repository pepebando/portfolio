<template>
    <div class="w-full p-4 mb-2 px-6 bg-gradient-to-b from-bggreengradient via-black to-black rounded-lg scrollbar overflow-y-scroll h-screen flex justify-center items-center">
        <!-- Encabezado con Fondo Degradado -->    
        <div class="max-w-6/10 mx-auto p-6  text-white rounded-lg  ">
            <h1 class="text-5xl font-bold text-center mb-2">Ready to work with you</h1>
            <p class="text-sm text-gray-400 mt-2 mb-4">Send me a message, and i will respond you as soon as possible</p>
            <!-- Formulario -->
            <form @submit.prevent="submitForm" class="space-y-4">
                <!-- Nombre -->
                <div>
                    
                    <input
                    v-model="form.name"
                    type="text"
                    id="name"
                    placeholder="Your name"
                    class="w-full p-2 mt-1 bg-black border border-GreenBtn rounded"
                    required
                    />
                </div>
                <!-- Correo -->
                <div>
                    
                    <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    placeholder="Your email"
                    class="w-full p-2 mt-1 bg-black border border-GreenBtn  rounded"
                    required
                    />
                </div>
                <!-- Mensaje -->
                <div>
                    
                    <textarea
                    v-model="form.message"
                    id="message"
                    rows="4"
                    placeholder="Write here your message..."
                    class="w-full p-2 mt-1 bg-black border border-GreenBtn rounded"
                    required
                    ></textarea>
                </div>
                <!-- Botón de Enviar -->
                <button
                type="submit"
                class="w-full bg-GreenBtn cursor-pointer  text-black font-bold py-2 px-4 rounded transition  hover:bg-GreenBtnHover">
                Send message
            </button>
        </form>
        <!-- Mensaje de Confirmación -->
        <p v-if="successMessage" class="mt-4 text-green-400 text-center">
            ✅ Menssage send correctly!
        </p>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import emailjs from 'emailjs-com';

const form = ref({
  name: '',
  email: '',
  message: '',
});

const successMessage = ref(false);

const sendEmail = () => {
  emailjs.send(
    'service_ksli9va',  // Reemplaza con tu Service ID
    'template_hovccsn', // Reemplaza con tu Template ID
    {
      from_name: form.value.name,
      from_email: form.value.email,
      message: form.value.message,
    },
    'xkluxQnsTWzjY94fd' // Reemplaza con tu Public Key
  ).then(() => {
    successMessage.value = true;
    setTimeout(() => {
      successMessage.value = false;
      form.value = { name: '', email: '', message: '' };
    }, 5000);
  }).catch((error) => {
    console.error("Error: Try again later", error);
  });
};
</script>

