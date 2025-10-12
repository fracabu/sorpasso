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
          Auto Anni 50-60
        </h1>

        <p class="text-center text-accent font-semibold mb-4 text-lg" data-aos="fade-up" data-aos-delay="100">
          Boom Economico
        </p>

        <p class="text-center text-white/80 text-lg mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          L'epoca della rinascita e dello stile italiano. Icone del boom economico e della dolce vita.
        </p>

        <!-- Card delle auto -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Fiat 500 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1600706432502-77a0e2e32771?q=80&w=2069')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Fiat 500
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Anni 50</p>
              <p class="text-white/80 text-sm">
                L'icona italiana del boom economico, simbolo di rinascita e ottimismo
              </p>
            </div>
          </div>

          <!-- Ferrari 250 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Ferrari 250
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Boom Economico</p>
              <p class="text-white/80 text-sm">
                Leggenda di Maranello, perfetta per scene di lusso e velocità
              </p>
            </div>
          </div>

          <!-- Porsche 356 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Porsche 356
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Eleganza Tedesca</p>
              <p class="text-white/80 text-sm">
                La prima vera Porsche, eleganza e sportività tedesche
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
