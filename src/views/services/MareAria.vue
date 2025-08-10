<template>
  <div class="bg-black text-white">
    <Header />
    <!-- Prima sezione: stessa struttura delle altre sezioni -->
    <section class="bg-black flex items-center min-h-screen">
      <div class="container">
        <!-- Titolo principale -->
        <h1 
          class="text-4xl md:text-5xl font-bold mb-16 text-center"
          data-aos="fade-up"
        >
          {{ t('services.rental.categories.sea.title') }}
        </h1>

        <!-- Prime 3 card -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1566847438217-76e82d383f84?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Yacht d'Epoca
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Lusso e Tradizione</p>
              <p class="text-white/80 text-sm">
                Eleganti imbarcazioni storiche per scene di lusso e raffinatezza
              </p>
            </div>
          </div>

          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Motoscafi Vintage
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Velocità e Stile</p>
              <p class="text-white/80 text-sm">
                Imbarcazioni classiche per scene dinamiche e d'epoca
              </p>
            </div>
          </div>

          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1517925035435-7976539b920d?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Aerei Classici
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Eleganza in Volo</p>
              <p class="text-white/80 text-sm">
                Velivoli d'epoca per scene di lusso e viaggi esclusivi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seconda sezione: altre 3 card -->
    <section class="bg-black flex items-center min-h-screen">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Elicotteri
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Versatilità Aerea</p>
              <p class="text-white/80 text-sm">
                Elicotteri per riprese aeree e trasporto VIP
              </p>
            </div>
          </div>

          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Barche Storiche
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Tradizione Marinara</p>
              <p class="text-white/80 text-sm">
                Imbarcazioni tradizionali per scene autentiche
              </p>
            </div>
          </div>

          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Idrovolanti
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Mare e Cielo</p>
              <p class="text-white/80 text-sm">
                Velivoli anfibio per scene spettacolari
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
import { ref, provide } from 'vue'
import { useI18n } from 'vue-i18n'
import Header from '@/components/Header.vue'
import Contact from '@/components/Contact.vue'

const { t } = useI18n()
const showContact = ref(false)

// Provide the function to show contact form to child components
provide('showContactForm', () => {
  showContact.value = true
})
</script>