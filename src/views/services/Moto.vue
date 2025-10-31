<template>
  <div class="bg-black text-white">
    <Header />

    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden flex items-center justify-center">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/images/Moto d_Epoca/PHOTO-2025-07-01-17-20-26.jpg')"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            {{ t('services.categories.moto.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {{ t('services.categories.moto.longDescription') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Sezione sottocategorie -->
    <section class="bg-black py-20">
      <div class="container">

        <!-- Sottocategorie -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Moto d'Epoca -->
          <router-link
            to="/servizi/moto/moto-epoca"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/images/Moto d_Epoca/PHOTO-2025-07-01-17-20-26.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Moto d'Epoca
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Icone su Due Ruote</p>
              <p class="text-white/80 text-sm">
                Le leggendarie motociclette del passato
              </p>
            </div>
          </router-link>

          <!-- Moto Moderne -->
          <router-link
            to="/servizi/moto/moto-moderne"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/images/Moto Moderne/PHOTO-2025-07-01-17-16-50.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Moto Moderne
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Potenza e Tecnologia</p>
              <p class="text-white/80 text-sm">
                Le moto più recenti e performanti
              </p>
            </div>
          </router-link>

          <!-- Vespe & Lambrette -->
          <router-link
            to="/servizi/moto/vespe-lambrette"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/images/Vespe & Lambrette/PHOTO-2025-07-01-17-23-59.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Vespe & Lambrette
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Stile Italiano Senza Tempo</p>
              <p class="text-white/80 text-sm">
                Le iconiche due ruote del design italiano
              </p>
            </div>
          </router-link>

          <!-- Tours Vespe -->
          <router-link
            to="/servizi/moto/tours-vespe"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/images/Tours Vespe/PHOTO-2025-09-19-20-42-59.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Tours Vespe
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Esperienze su Due Ruote</p>
              <p class="text-white/80 text-sm">
                Tour indimenticabili con Vespe storiche
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
