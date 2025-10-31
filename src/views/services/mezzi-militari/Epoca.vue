<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/Mezzi Militari d_Epoca/PHOTO-2025-07-01-17-12-45.jpg')` }"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div data-aos="fade-up">
          <router-link
            to="/servizi/mezzi-militari"
            class="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group"
          >
            <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Torna a Mezzi Militari
          </router-link>
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Mezzi Militari d'Epoca
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl">
            Veicoli militari storici della Seconda Guerra Mondiale
          </p>
        </div>
      </div>
    </section>

    <!-- Vehicles Grid -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          <div
            v-for="(vehicle, index) in vehicles"
            :key="index"
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Mezzi Militari d_Epoca/${vehicle.photo}')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                Mezzi Militari d'Epoca
              </h3>
              <p class="text-accent font-semibold text-sm">Storia e Potenza</p>
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

const vehicles = [
  { photo: 'PHOTO-2025-07-01-17-12-45.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 5.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 6.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 7.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 8.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 9.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 10.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 11.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 12.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 13.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 14.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 15.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 16.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 17.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 18.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 19.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 20.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 21.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 22.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 23.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 24.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 25.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 26.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 27.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 28.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 29.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 30.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 31.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 32.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 33.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 34.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 35.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 36.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 37.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 38.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 39.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 40.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 41.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 42.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 43.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 44.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 45.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 46.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 47.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 48.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 49.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 50.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 51.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 52.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 53.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 54.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 55.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 56.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 57.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 58.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 59.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 60.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 61.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 62.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 63.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 64.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 65.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 66.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 67.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 68.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 69.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 70.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 71.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 72.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 73.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 74.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 75.jpg' },
  { photo: 'PHOTO-2025-07-01-17-12-45 76.jpg' }
];

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>
