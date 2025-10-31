<template>
  <div class="bg-black text-white overflow-x-hidden">
    <Header />

    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden flex items-center justify-center">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/images/Super%20Cars%20Vintage/PHOTO-2025-07-01-15-41-51.jpg')"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Super Cars
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Esplora la nostra collezione di supercar moderne e vintage, oltre ai tour esclusivi con auto d'eccezione
          </p>
        </div>
      </div>
    </section>

    <!-- Sezione sottocategorie -->
    <section class="bg-black py-20">
      <div class="container">

        <!-- Sottocategorie -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Super Cars Moderne -->
          <router-link
            to="/servizi/supercars/moderne"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/images/Super Cars Moderne/PHOTO-2025-07-01-15-36-30 2.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Super Cars Moderne
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Tecnologia e Prestazioni</p>
              <p class="text-white/80 text-sm">
                Le supercar più recenti e performanti
              </p>
            </div>
          </router-link>

          <!-- Super Cars Vintage -->
          <router-link
            to="/servizi/supercars/vintage"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/images/Super Cars Vintage/PHOTO-2025-07-01-15-40-46 2.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Super Cars Vintage
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Icone Senza Tempo</p>
              <p class="text-white/80 text-sm">
                Le leggendarie supercar del passato
              </p>
            </div>
          </router-link>

          <!-- Tours Auto -->
          <router-link
            to="/servizi/supercars/tours"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/images/Tours Auto/PHOTO-2025-09-19-20-38-43 2.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Tours Auto
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Esperienze Indimenticabili</p>
              <p class="text-white/80 text-sm">
                Tour esclusivi con auto d'eccezione
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
