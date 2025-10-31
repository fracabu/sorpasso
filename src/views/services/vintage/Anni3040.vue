<template>
  <div class="bg-black text-white overflow-x-hidden">
    <Header />
    <section class="bg-black flex items-center min-h-screen">
      <div class="container">
        <!-- Titolo -->
        <h1
          class="text-4xl md:text-5xl font-bold mb-8 text-center"
          data-aos="fade-up"
        >
          Auto Anni 30-40
        </h1>

        <p class="text-center text-accent font-semibold mb-4 text-lg" data-aos="fade-up" data-aos-delay="100">
          Eleganza Art Déco
        </p>

        <p class="text-center text-white/80 text-lg mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          L'epoca d'oro del design automobilistico. Capolavori di eleganza e innovazione tecnica.
        </p>

        <!-- Card delle auto -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <!-- Auto 1 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-56.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Lancia Aprilia
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1937</p>
            </div>
          </div>

          <!-- Auto 2 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-56 2.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Alfa Romeo 6C 2500
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1939</p>
            </div>
          </div>

          <!-- Auto 3 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-56 3.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Fiat 1500
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1935</p>
            </div>
          </div>

          <!-- Auto 4 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-56 4.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Lancia Astura
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1933</p>
            </div>
          </div>

          <!-- Auto 5 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-56 5.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Alfa Romeo 8C 2900
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1938</p>
            </div>
          </div>

          <!-- Auto 6 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-56 6.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Bugatti Type 57
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1934</p>
            </div>
          </div>

          <!-- Auto 7 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-56 7.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Mercedes-Benz 540K
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1936</p>
            </div>
          </div>

          <!-- Auto 8 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-56 8.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Jaguar SS100
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1936</p>
            </div>
          </div>

          <!-- Auto 9 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-56 9.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                BMW 328
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1936</p>
            </div>
          </div>

          <!-- Auto 10 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-56 10.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Fiat 508 Balilla
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1932</p>
            </div>
          </div>

          <!-- Auto 11 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-56 11.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Lancia Dilambda
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1930</p>
            </div>
          </div>

          <!-- Auto 12 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="650"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-57.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Isotta Fraschini 8A
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1931</p>
            </div>
          </div>

          <!-- Auto 13 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-57 2.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Rolls-Royce Phantom III
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1936</p>
            </div>
          </div>

          <!-- Auto 14 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="750"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-57 3.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Delahaye 135
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1935</p>
            </div>
          </div>

          <!-- Auto 15 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-57 4.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Cord 812
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1937</p>
            </div>
          </div>

          <!-- Auto 16 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="850"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-57 5.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Auburn 851 Speedster
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1935</p>
            </div>
          </div>

          <!-- Auto 17 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-57 6.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Talbot-Lago T150-C
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1937</p>
            </div>
          </div>

          <!-- Auto 18 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="950"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-58.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Packard Twelve
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1939</p>
            </div>
          </div>

          <!-- Auto 19 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-58 2.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Duesenberg Model J
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1933</p>
            </div>
          </div>

          <!-- Auto 20 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="1050"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-58 3.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Hispano-Suiza J12
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1934</p>
            </div>
          </div>

          <!-- Auto 21 -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="1100"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 30 - 40/PHOTO-2025-06-29-18-52-58 4.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Bentley 3½ Litre
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1934</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>
