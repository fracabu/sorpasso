<template>
  <div class="bg-black text-white overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/Personalizzazioni/PHOTO-2025-02-07-17-46-02.jpg')` }"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div data-aos="fade-up">
          <router-link
            to="/"
            class="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group"
          >
            <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Torna alla Home
          </router-link>
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Personalizzazione
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl">
            Modifiche e trasformazioni su misura per le tue scene cinematografiche
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          <div
            v-for="(item, index) in customizations"
            :key="index"
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Personalizzazioni/${item.photo}')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                Personalizzazione
              </h3>
              <p class="text-accent font-semibold text-sm">Su Misura</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const customizations = [
  { photo: 'PHOTO-2021-09-20-14-12-18.jpg' },
  { photo: 'PHOTO-2021-10-18-17-36-21.jpg' },
  { photo: 'PHOTO-2021-10-18-17-36-21 2.jpg' },
  { photo: 'PHOTO-2021-10-30-11-03-27.jpg' },
  { photo: 'PHOTO-2021-10-30-11-03-32.jpg' },
  { photo: 'PHOTO-2021-11-30-10-48-53.jpg' },
  { photo: 'PHOTO-2021-11-30-10-48-53 2.jpg' },
  { photo: 'PHOTO-2021-12-17-10-37-12.jpg' },
  { photo: 'PHOTO-2021-12-17-10-37-12 2.jpg' },
  { photo: 'PHOTO-2022-03-09-18-38-24.jpg' },
  { photo: 'PHOTO-2022-04-22-11-36-25.jpg' },
  { photo: 'PHOTO-2022-04-22-11-36-25 2.jpg' },
  { photo: 'PHOTO-2023-10-16-12-59-35.jpg' },
  { photo: 'PHOTO-2023-10-16-12-59-35 2.jpg' },
  { photo: 'PHOTO-2023-10-16-12-59-36.jpg' },
  { photo: 'PHOTO-2023-10-18-11-27-10.jpg' },
  { photo: 'PHOTO-2023-10-18-11-27-11.jpg' },
  { photo: 'PHOTO-2023-10-18-11-27-13.jpg' },
  { photo: 'PHOTO-2023-10-18-11-27-14.jpg' },
  { photo: 'PHOTO-2023-10-18-11-27-17.jpg' },
  { photo: 'PHOTO-2023-10-18-11-27-18.jpg' },
  { photo: 'PHOTO-2023-10-18-11-27-24.jpg' },
  { photo: 'PHOTO-2023-10-18-11-27-24 2.jpg' },
  { photo: 'PHOTO-2023-10-18-11-27-29.jpg' },
  { photo: 'PHOTO-2023-10-18-11-27-30.jpg' },
  { photo: 'PHOTO-2023-10-18-11-27-32.jpg' },
  { photo: 'PHOTO-2023-10-18-11-27-33.jpg' },
  { photo: 'PHOTO-2023-10-18-11-27-36.jpg' },
  { photo: 'PHOTO-2024-03-07-20-43-20.jpg' },
  { photo: 'PHOTO-2024-08-23-14-56-26.jpg' },
  { photo: 'PHOTO-2024-08-23-14-56-27.jpg' },
  { photo: 'PHOTO-2025-02-04-11-14-19.jpg' },
  { photo: 'PHOTO-2025-02-05-17-52-41.jpg' },
  { photo: 'PHOTO-2025-02-06-17-44-20.jpg' },
  { photo: 'PHOTO-2025-02-07-12-33-34.jpg' },
  { photo: 'PHOTO-2025-02-07-12-33-52.jpg' },
  { photo: 'PHOTO-2025-02-07-17-46-02.jpg' },
];

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>