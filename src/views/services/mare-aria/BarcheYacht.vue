<template>
  <div class="bg-black text-white overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/Barche & Yacht/PHOTO-2025-07-01-17-26-09.jpg')` }"
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
            Barche & Yacht
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl">
            Eleganza e lusso per navigare con stile
          </p>
        </div>
      </div>
    </section>

    <!-- Boats Grid -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          <div
            v-for="(boat, index) in boats"
            :key="index"
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Barche & Yacht/${boat.photo}')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                Barche & Yacht
              </h3>
              <p class="text-accent font-semibold text-sm">Lusso sul Mare</p>
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

const boats = [
  { photo: 'PHOTO-2025-07-01-17-26-09.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 5.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 6.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 7.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 8.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 9.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 10.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 11.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 12.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 13.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 14.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 15.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 16.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 17.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 18.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 19.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 20.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 21.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 22.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 23.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 24.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 25.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 26.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-12 27.jpg' },
  { photo: 'PHOTO-2025-07-01-17-27-44.jpg' },
  { photo: 'PHOTO-2025-07-01-17-29-12.jpg' },
  { photo: 'PHOTO-2025-07-01-17-29-12 2.jpg' },
];

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>
