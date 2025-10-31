<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/Vespe & Lambrette/PHOTO-2025-07-01-17-23-59.jpg')` }"
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
            Vespe & Lambrette
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl">
            Le iconiche due ruote del design italiano
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
              :style="{ backgroundImage: `url('/images/Vespe & Lambrette/${vehicle.photo}')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                Vespa / Lambretta
              </h3>
              <p class="text-accent font-semibold text-sm">Icona Italiana</p>
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
  { photo: 'PHOTO-2025-07-01-17-23-59.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 10.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 11.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 12.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 13.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 14.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 15.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 16.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 17.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 18.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 19.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 20.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 21.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 22.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 23.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 24.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 25.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 26.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 27.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 28.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 29.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 30.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 31.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 32.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 33.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 34.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 35.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 36.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 37.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 38.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 39.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 40.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 41.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 42.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 43.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 44.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 45.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 46.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 47.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 48.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 49.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 5.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 50.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 51.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 52.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 53.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 54.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 55.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 56.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 57.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 58.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 59.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 6.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 60.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 61.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 62.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 7.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 8.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00 9.jpg' },
  { photo: 'PHOTO-2025-07-01-17-24-00.jpg' }
];

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>
