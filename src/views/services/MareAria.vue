<template>
  <div class="bg-black text-white overflow-x-hidden">
    <Header />

    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden flex items-center justify-center">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/images/Barche%20&%20Yacht/PHOTO-2025-07-01-17-26-09.jpg')"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            {{ t('services.categories.sea.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Esplora le nostre esclusive collezioni di barche, yacht, elicotteri e aerei per le tue produzioni più prestigiose.
          </p>
        </div>
      </div>
    </section>

    <!-- Sezione sottocategorie -->
    <section class="bg-black py-20">
      <div class="container">

        <!-- Sottocategorie: Mare e Aria -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Mare: Barche & Yacht -->
          <router-link
            to="/servizi/mare-aria/barche-yacht"
            class="relative group cursor-pointer h-[400px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/images/Barche & Yacht/PHOTO-2025-07-01-17-26-09.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-8 flex flex-col justify-end text-center">
              <h3 class="text-3xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                MARE
              </h3>
              <p class="text-accent font-semibold mb-4 text-lg">Barche & Yacht</p>
              <p class="text-white/80 text-base">
                Eleganti imbarcazioni e yacht di lusso per scene marine indimenticabili
              </p>
            </div>
          </router-link>

          <!-- Aria: Elicotteri & Aerei -->
          <router-link
            to="/servizi/mare-aria/elicotteri-aerei"
            class="relative group cursor-pointer h-[400px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/images/Elicotteri & Aerei/PHOTO-2025-07-01-17-30-44.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-8 flex flex-col justify-end text-center">
              <h3 class="text-3xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                ARIA
              </h3>
              <p class="text-accent font-semibold mb-4 text-lg">Elicotteri & Aerei</p>
              <p class="text-white/80 text-base">
                Velivoli esclusivi per riprese aeree mozzafiato e trasporto VIP
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Header from '@/components/Header.vue'

const { t } = useI18n()
</script>