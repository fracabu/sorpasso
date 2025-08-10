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
          {{ t('services.rental.categories.vintage.title') }}
        </h1>

        <!-- Auto Anni 10/20 - Belle Époque e Anni Ruggenti -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/bugatti type 13.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Bugatti Type 13
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Belle Époque</p>
              <p class="text-white/80 text-sm">
                Leggenda francese d'epoca, eleganza e velocità degli anni pioneristici dell'automobile
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
              class="absolute inset-0 bg-contain bg-center bg-no-repeat bg-black transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/lancia lambda.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Lancia Lambda
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Innovazione Italiana</p>
              <p class="text-white/80 text-sm">
                Rivoluzionaria Lancia degli anni '20, pioniere della scocca portante e del design moderno
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
              style="background-image: url('/fiat 514.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Fiat 514
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Anni Ruggenti</p>
              <p class="text-white/80 text-sm">
                Icona italiana degli anni '20, eleganza e affidabilità del made in Italy d'epoca
              </p>
            </div>
          </div>
        </div>

        <!-- Auto Anni 30/40 - Eleganza Art Déco -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/lancia aprilia.jpg')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Lancia Aprilia
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Anni 30/40</p>
              <p class="text-white/80 text-sm">
                Capolavoro dell'aerodinamica italiana, design rivoluzionario degli anni '30
              </p>
            </div>
          </div>

          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Jaguar SS100
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Art Déco</p>
              <p class="text-white/80 text-sm">
                Sportiva britannica iconica, perfetta per scene d'epoca raffinate
              </p>
            </div>
          </div>

          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1583356322882-85559b472f56?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Alfa Romeo 8C
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Eleganza Italiana</p>
              <p class="text-white/80 text-sm">
                Passione italiana su quattro ruote, leggenda delle competizioni
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seconda sezione: Auto Anni 50 e 70 -->
    <section class="bg-black flex items-center min-h-screen">
      <div class="container">
        <!-- Auto Anni 50 - Boom Economico -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
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

          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="600"
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

        <!-- Auto Anni 70 - Rivoluzione e Stile -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Lamborghini Countach
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Anni 70</p>
              <p class="text-white/80 text-sm">
                Rivoluzione del design automobilistico, icona futuristica degli anni '70
              </p>
            </div>
          </div>

          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2070')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                BMW 2002
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Stile Bavarese</p>
              <p class="text-white/80 text-sm">
                La berlina sportiva che ha definito un'epoca, stile bavarese puro
              </p>
            </div>
          </div>

          <div 
            @click="showContact = true" 
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('https://images.unsplash.com/photo-1600706432502-77a0e2e32771?q=80&w=2069')"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Lancia Stratos
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Rally Legend</p>
              <p class="text-white/80 text-sm">
                Leggenda dei rally, design italiano e prestazioni da corsa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Terza sezione: Auto Anni 80/90 -->
    <section class="bg-black flex items-center min-h-screen">
      <div class="container">
        <!-- Auto Anni 80/90 - Icone Moderne -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                Porsche 911 Turbo
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">Icone Moderne</p>
              <p class="text-white/80 text-sm">
                Potenza e tecnologia tedesca, icona delle supercar anni '80
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