<template>
  <div class="bg-black text-white overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/Auto Tunning & Muscle Cars/PHOTO-2025-07-01-17-09-36.jpg')` }"
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
            Tuning & Muscle Cars
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl">
            Auto potenti e personalizzate per ogni scena
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
              :style="{ backgroundImage: `url('/images/Auto Tunning & Muscle Cars/${car.photo}')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                Tuning & Muscle Car
              </h3>
              <p class="text-accent font-semibold text-sm">Potenza Pura</p>
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
  { photo: 'PHOTO-2025-07-01-17-09-36.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 5.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 6.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 7.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 8.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 9.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 10.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 11.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 12.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 13.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 14.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 15.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 16.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 17.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 18.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 19.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 20.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 21.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 22.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 23.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 24.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 25.jpg' },
  { photo: 'PHOTO-2025-07-01-17-09-36 26.jpg' }
];

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>
