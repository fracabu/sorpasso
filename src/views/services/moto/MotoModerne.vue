<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/Moto Moderne/PHOTO-2025-07-01-17-16-50.jpg')` }"
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
            Moto Moderne
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl">
            Le moto più recenti e performanti
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
              :style="{ backgroundImage: `url('/images/Moto Moderne/${bike.photo}')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                Moto Moderna
              </h3>
              <p class="text-accent font-semibold text-sm">Alta Tecnologia</p>
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
  { photo: 'PHOTO-2025-07-01-17-16-50 10.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 11.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 12.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 13.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 14.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 15.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 16.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 17(1).jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 17.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 18.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 19.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 20.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 21.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 5.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 6.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 7.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 8.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50 9.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-50.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-51 10.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-51 11.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-51 12.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-51 13.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-51 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-51 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-51 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-51 5.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-51 6.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-51 7.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-51 8.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-51 9.jpg' },
  { photo: 'PHOTO-2025-07-01-17-16-51.jpg' },
  { photo: 'PHOTO-2025-07-01-17-19-22 10.jpg' },
  { photo: 'PHOTO-2025-07-01-17-19-22 11.jpg' },
  { photo: 'PHOTO-2025-07-01-17-19-22 12.jpg' },
  { photo: 'PHOTO-2025-07-01-17-19-22 13.jpg' },
  { photo: 'PHOTO-2025-07-01-17-19-22 2.jpg' },
  { photo: 'PHOTO-2025-07-01-17-19-22 3.jpg' },
  { photo: 'PHOTO-2025-07-01-17-19-22 4.jpg' },
  { photo: 'PHOTO-2025-07-01-17-19-22 5.jpg' },
  { photo: 'PHOTO-2025-07-01-17-19-22 6.jpg' },
  { photo: 'PHOTO-2025-07-01-17-19-22 7.jpg' },
  { photo: 'PHOTO-2025-07-01-17-19-22 8.jpg' },
  { photo: 'PHOTO-2025-07-01-17-19-22 9.jpg' },
  { photo: 'PHOTO-2025-07-01-17-19-22.jpg' }
];

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>
