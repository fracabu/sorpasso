<template>
  <div class="bg-black text-white overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/Tours Auto/PHOTO-2025-09-19-20-38-43.jpg')` }"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div data-aos="fade-up">
          <router-link
            to="/servizi/supercars"
            class="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group"
          >
            <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Torna a Super Cars
          </router-link>
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Tours Auto
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl">
            Tour esclusivi con auto d'eccezione
          </p>
        </div>
      </div>
    </section>

    <!-- Cars Grid -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          <div
            v-for="(tour, index) in tours"
            :key="index"
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Tours Auto/${tour.photo}')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                {{ tour.name }}
              </h3>
              <p class="text-accent font-semibold text-sm">{{ tour.location }}</p>
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

const tours = [
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-38-43 2.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-38-43 3.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-38-43 4.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-38-43 5.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-38-43 6.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-38-43.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-39-42 10.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-39-42 2.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-39-42 3.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-39-42 4.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-39-42 5.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-39-42 6.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-39-42 7.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-39-42 8.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-39-42 9.jpg' },
  { name: 'Tour Auto', location: 'Italia', photo: 'PHOTO-2025-09-19-20-39-42.jpg' }
];

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>
