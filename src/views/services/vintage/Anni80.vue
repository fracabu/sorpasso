<template>
  <div class="bg-black text-white">
    <Header />
    <section class="bg-black flex items-center min-h-screen">
      <div class="container">
        <!-- Titolo -->
        <h1
          class="text-4xl md:text-5xl font-bold mb-8 text-center"
          data-aos="fade-up"
        >
          Auto Anni 80
        </h1>

        <p class="text-center text-accent font-semibold mb-4 text-lg" data-aos="fade-up" data-aos-delay="100">
          Icone Moderne
        </p>

        <p class="text-center text-white/80 text-lg mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          Potenza, tecnologia e design anni '80. Le supercar che hanno segnato la storia dell'automobile moderna.
        </p>

        <!-- Card delle auto -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Ferrari Testarossa -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Ferrari Testarossa
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Anni 80/90</p>
              <p class="text-white/80 text-sm">
                Il mito degli anni '80 in tutta la sua gloria rossa
              </p>
            </div>
          </div>

          <!-- Porsche 911 Turbo -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Porsche 911 Turbo
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Icone Moderne</p>
              <p class="text-white/80 text-sm">
                Potenza e tecnologia tedesca, icona delle supercar anni '80
              </p>
            </div>
          </div>

          <!-- BMW M3 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1583356322882-85559b472f56?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                BMW M3
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Leggenda Sportiva</p>
              <p class="text-white/80 text-sm">
                La berlina sportiva definitiva, leggenda delle piste e delle strade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Modal -->
    <Teleport to="body">
      <div
        v-if="showContact"
        class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        @click="showContact = false"
      >
        <div
          class="bg-zinc-900 rounded-lg w-full max-w-2xl"
          @click.stop
        >
          <Contact />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Contact from '@/components/Contact.vue'

const showContact = ref(false)
</script>
