<template>
  <div class="bg-black text-white overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/Moto d_Epoca/PHOTO-2025-07-01-17-20-26.jpg')` }"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div data-aos="fade-up">
          <router-link
            to="/servizi/moto"
            class="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group"
          >
            <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Torna a Moto
          </router-link>
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Moto d'Epoca
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl">
            Le leggendarie motociclette del passato
          </p>
        </div>
      </div>
    </section>

    <!-- Bikes Grid -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          <div
            v-for="(bike, index) in bikes"
            :key="index"
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Moto d_Epoca/${bike.photo}')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                Moto d'Epoca
              </h3>
              <p class="text-accent font-semibold text-sm">Icone Senza Tempo</p>
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

const bikes = [
  { photo: 'PHOTO-2025-07-01-17-20-26 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-20-26 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-20-26 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-20-26 5.jpg' },
  { photo: 'PHOTO-2025-07-01-17-20-26 6.jpg' },
  { photo: 'PHOTO-2025-07-01-17-20-26 7.jpg' },
  { photo: 'PHOTO-2025-07-01-17-20-26 8.jpg' },
  { photo: 'PHOTO-2025-07-01-17-20-26.jpg' },
  { photo: 'PHOTO-2025-07-01-17-21-32 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-21-32 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-21-32 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-21-32 5.jpg' },
  { photo: 'PHOTO-2025-07-01-17-21-32.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 10.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 11.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 12.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 13.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 14.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 15.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 16.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 17.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 18.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 19.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 20.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 21.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 22.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 23.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 24.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 5.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 6.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 7.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 8.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42 9.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-42.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-43 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-43 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-43 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-22-43.jpg' }
];

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>
