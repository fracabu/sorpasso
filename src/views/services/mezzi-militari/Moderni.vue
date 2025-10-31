<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/Mezzi Militari Moderni/PHOTO-2025-07-01-17-13-59.jpg')` }"
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
            Mezzi Militari Moderni
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl">
            Mezzi militari moderni per produzioni contemporanee
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
              :style="{ backgroundImage: `url('/images/Mezzi Militari Moderni/${vehicle.photo}')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                Mezzi Militari Moderni
              </h3>
              <p class="text-accent font-semibold text-sm">Tecnologia e Versatilità</p>
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
  { photo: 'PHOTO-2025-07-01-17-13-59.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 5.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 6.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 7.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 8.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 9.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 10.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 11.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 12.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 13.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 14.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 15.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 16.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 17.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 18.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 19.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 20.jpg' },
  { photo: 'PHOTO-2025-07-01-17-13-59 21.jpg' }
];

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>
