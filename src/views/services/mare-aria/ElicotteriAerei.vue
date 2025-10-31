<template>
  <div class="bg-black text-white overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/Elicotteri & Aerei/PHOTO-2025-07-01-17-30-44.jpg')` }"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div data-aos="fade-up">
          <router-link
            to="/servizi/mare-aria"
            class="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group"
          >
            <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Torna a Mare e Aria
          </router-link>
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Elicotteri & Aerei
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl">
            Vola alto con eleganza e prestigio
          </p>
        </div>
      </div>
    </section>

    <!-- Aircraft Grid -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          <div
            v-for="(aircraft, index) in aircrafts"
            :key="index"
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Elicotteri & Aerei/${aircraft.photo}')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                Elicotteri & Aerei
              </h3>
              <p class="text-accent font-semibold text-sm">Lusso in Volo</p>
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

const aircrafts = [
  { photo: 'PHOTO-2025-07-01-17-30-44.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 5.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 6.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 7.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 8.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 9.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 10.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 11.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 12.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 13.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 14.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 15.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 16.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 17.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 18.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 19.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 20.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 21.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 22.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 23.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 24.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 25.jpg' },
  { photo: 'PHOTO-2025-07-01-17-30-44 26.jpg' },
  { photo: 'PHOTO-2025-07-01-17-31-48.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-23.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-23 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-23 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-23 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-23 5.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-23 6.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-23 7.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-23 8.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-23 9.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-23 10.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-23 11.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-23 12.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 5.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 6.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 7.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 8.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 9.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 10.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 11.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 12.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 13.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 14.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 15.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 16.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 17.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 18.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 19.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 20.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 21.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 22.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 23.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 24.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 25.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 26.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 27.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 28.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 29.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 30.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 31.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 32.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 33.jpg' },
  { photo: 'PHOTO-2025-07-01-17-33-24 34.jpg' },
];

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>
