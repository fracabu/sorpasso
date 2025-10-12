<template>
  <div class="bg-black text-white">
    <Header />
    <!-- Sezione sottocategorie -->
    <section class="bg-black flex items-center min-h-screen">
      <div class="container">
        <!-- Titolo principale -->
        <h1
          class="text-4xl md:text-5xl font-bold mb-16 text-center"
          data-aos="fade-up"
        >
          {{ t('services.categories.vintage.title') }}
        </h1>

        <p class="text-center text-white/80 text-lg mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          {{ t('services.categories.vintage.longDescription') }}
        </p>

        <!-- Sottocategorie per decadi -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Anni 10-20 -->
          <router-link
            to="/servizi/auto-epoca/anni-10-20"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/bugatti type 13.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Auto Anni 10-20
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Belle Époque e Anni Ruggenti</p>
              <p class="text-white/80 text-sm">
                Le pionieristiche automobili dell'epoca d'oro
              </p>
            </div>
          </router-link>

          <!-- Anni 30-40 -->
          <router-link
            to="/servizi/auto-epoca/anni-30-40"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/lancia aprilia.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Auto Anni 30-40
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Eleganza Art Déco</p>
              <p class="text-white/80 text-sm">
                L'epoca d'oro del design automobilistico
              </p>
            </div>
          </router-link>

          <!-- Anni 50-60 -->
          <router-link
            to="/servizi/auto-epoca/anni-50-60"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1600706432502-77a0e2e32771?q=80&w=2069')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Auto Anni 50-60
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Boom Economico</p>
              <p class="text-white/80 text-sm">
                L'epoca della rinascita e dello stile italiano
              </p>
            </div>
          </router-link>

          <!-- Anni 70 -->
          <router-link
            to="/servizi/auto-epoca/anni-70"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Auto Anni 70
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Rivoluzione e Stile</p>
              <p class="text-white/80 text-sm">
                Design futuristico e prestazioni rivoluzionarie
              </p>
            </div>
          </router-link>

          <!-- Anni 80 -->
          <router-link
            to="/servizi/auto-epoca/anni-80"
            class="relative group cursor-pointer h-[320px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Auto Anni 80
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Icone Moderne</p>
              <p class="text-white/80 text-sm">
                Potenza, tecnologia e design anni '80
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
