<template>
  <div class="bg-black text-white overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/Tours%20Vespe/PHOTO-2025-09-19-20-42-59.jpg')` }"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div data-aos="fade-up">
          <router-link
            to="/#tour"
            class="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group"
          >
            <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {{ t('tour.vespe.backToTours') }}
          </router-link>
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            {{ t('tour.vespe.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl">
            {{ t('tour.vespe.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Tours Grid -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('tour.vespe.gridTitle') }}</h2>
          <p class="text-white/70 max-w-3xl mx-auto">
            {{ t('tour.vespe.gridDescription') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(tour, index) in tours"
            :key="index"
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Tours%20Vespe/${tour.photo}')` }"
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

    <!-- CTA Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div class="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ t('tour.vespe.ctaTitle') }}</h2>
        <p class="text-white/70 mb-8 text-lg">
          {{ t('tour.vespe.ctaDescription') }}
        </p>
        <router-link
          to="/contatti"
          class="btn-primary inline-block"
        >
          {{ t('tour.vespe.ctaButton') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { t } = useI18n();

const tours = [
  { name: 'Tour Vespa', location: 'Italia', photo: 'PHOTO-2025-09-19-20-42-59.jpg' },
  { name: 'Tour Vespa', location: 'Italia', photo: 'PHOTO-2025-09-19-20-42-59 2.jpg' },
  { name: 'Tour Vespa', location: 'Italia', photo: 'PHOTO-2025-09-19-20-42-59 3.jpg' }
];

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>
