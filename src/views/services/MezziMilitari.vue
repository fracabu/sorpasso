<template>
  <div class="bg-black text-white overflow-x-hidden">
    <Header />

    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden flex items-center justify-center">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/images/Mezzi%20Militari%20d_Epoca/PHOTO-2025-07-01-17-12-45.jpg')"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            {{ t('services.categories.military.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {{ t('services.categories.military.longDescription') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Sezione sottocategorie -->
    <section class="bg-black py-20">
      <div class="container">

        <!-- Sottocategorie -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Mezzi Militari d'Epoca -->
          <router-link
            to="/servizi/mezzi-militari/epoca"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/images/Mezzi Militari d_Epoca/PHOTO-2025-07-01-17-12-45.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Mezzi Militari d'Epoca
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Storia e Potenza</p>
              <p class="text-white/80 text-sm">
                Veicoli militari storici della Seconda Guerra Mondiale
              </p>
            </div>
          </router-link>

          <!-- Mezzi Militari Moderni -->
          <router-link
            to="/servizi/mezzi-militari/moderni"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/images/Mezzi Militari Moderni/PHOTO-2025-07-01-17-13-59.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Mezzi Militari Moderni
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Tecnologia e Versatilità</p>
              <p class="text-white/80 text-sm">
                Mezzi militari moderni per produzioni contemporanee
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Header from '@/components/Header.vue'

const { t } = useI18n()
</script>
