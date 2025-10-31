<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/Super Cars Vintage/PHOTO-2025-07-01-15-40-46.jpg')` }"
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
            Super Cars Vintage
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl">
            Le leggendarie supercar del passato
          </p>
        </div>
      </div>
    </section>

    <!-- Cars Grid -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          <div
            v-for="(car, index) in cars"
            :key="index"
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Super Cars Vintage/${car.photo}')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                {{ car.name }}
              </h3>
              <p class="text-accent font-semibold text-sm">{{ car.year }}</p>
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

const cars = [
  { name: 'Supercar Vintage', year: '1980s', photo: 'PHOTO-2025-07-01-15-40-46 2.jpg' },
  { name: 'Supercar Vintage', year: '1980s', photo: 'PHOTO-2025-07-01-15-40-46 3.jpg' },
  { name: 'Supercar Vintage', year: '1980s', photo: 'PHOTO-2025-07-01-15-40-46 4.jpg' },
  { name: 'Supercar Vintage', year: '1990s', photo: 'PHOTO-2025-07-01-15-40-46 5.jpg' },
  { name: 'Supercar Vintage', year: '1980s', photo: 'PHOTO-2025-07-01-15-40-46 6.jpg' },
  { name: 'Supercar Vintage', year: '1990s', photo: 'PHOTO-2025-07-01-15-40-46 7.jpg' },
  { name: 'Supercar Vintage', year: '1980s', photo: 'PHOTO-2025-07-01-15-40-46 8.jpg' },
  { name: 'Supercar Vintage', year: '1990s', photo: 'PHOTO-2025-07-01-15-40-46.jpg' },
  { name: 'Supercar Vintage', year: '1980s', photo: 'PHOTO-2025-07-01-15-41-51 10.jpg' },
  { name: 'Supercar Vintage', year: '1990s', photo: 'PHOTO-2025-07-01-15-41-51 11.jpg' },
  { name: 'Supercar Vintage', year: '1980s', photo: 'PHOTO-2025-07-01-15-41-51 12.jpg' },
  { name: 'Supercar Vintage', year: '1990s', photo: 'PHOTO-2025-07-01-15-41-51 13.jpg' },
  { name: 'Supercar Vintage', year: '1980s', photo: 'PHOTO-2025-07-01-15-41-51 14.jpg' },
  { name: 'Supercar Vintage', year: '1990s', photo: 'PHOTO-2025-07-01-15-41-51 15.jpg' },
  { name: 'Supercar Vintage', year: '1980s', photo: 'PHOTO-2025-07-01-15-41-51 16.jpg' },
  { name: 'Supercar Vintage', year: '1990s', photo: 'PHOTO-2025-07-01-15-41-51 17.jpg' },
  { name: 'Supercar Vintage', year: '1980s', photo: 'PHOTO-2025-07-01-15-41-51 18.jpg' },
  { name: 'Supercar Vintage', year: '1990s', photo: 'PHOTO-2025-07-01-15-41-51 2.jpg' },
  { name: 'Supercar Vintage', year: '1980s', photo: 'PHOTO-2025-07-01-15-41-51 3.jpg' },
  { name: 'Supercar Vintage', year: '1990s', photo: 'PHOTO-2025-07-01-15-41-51 4.jpg' },
  { name: 'Supercar Vintage', year: '1980s', photo: 'PHOTO-2025-07-01-15-41-51 5.jpg' },
  { name: 'Supercar Vintage', year: '1990s', photo: 'PHOTO-2025-07-01-15-41-51 6.jpg' },
  { name: 'Supercar Vintage', year: '1980s', photo: 'PHOTO-2025-07-01-15-41-51 7.jpg' },
  { name: 'Supercar Vintage', year: '1990s', photo: 'PHOTO-2025-07-01-15-41-51 8.jpg' },
  { name: 'Supercar Vintage', year: '1980s', photo: 'PHOTO-2025-07-01-15-41-51 9.jpg' },
  { name: 'Supercar Vintage', year: '1990s', photo: 'PHOTO-2025-07-01-15-41-51.jpg' }
];

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>
