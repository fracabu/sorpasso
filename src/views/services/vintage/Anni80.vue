<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.25.jpeg')` }"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div data-aos="fade-up">
          <router-link
            to="/servizi/auto-epoca"
            class="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group"
          >
            <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Torna ad Auto d'Epoca
          </router-link>
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Anni '80
          </h1>
          <p class="text-xl md:text-2xl text-white/90 max-w-2xl">
            L'era delle supercar da sogno e delle sportive iconiche
          </p>
        </div>
      </div>
    </section>

    <!-- Cars Grid -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          <!-- Ferrari F40 (1987) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.25.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Ferrari F40</h3>
              <p class="text-lg text-white/90">1987</p>
            </div>
          </div>

          <!-- Lamborghini Countach 5000 QV (1985) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.26 (1).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Lamborghini Countach 5000 QV</h3>
              <p class="text-lg text-white/90">1985</p>
            </div>
          </div>

          <!-- Porsche 959 (1986) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.26 (2).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Porsche 959</h3>
              <p class="text-lg text-white/90">1986</p>
            </div>
          </div>

          <!-- Ferrari Testarossa (1984) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.26.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Ferrari Testarossa</h3>
              <p class="text-lg text-white/90">1984</p>
            </div>
          </div>

          <!-- Lamborghini Jalpa (1981) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.27.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Lamborghini Jalpa</h3>
              <p class="text-lg text-white/90">1981</p>
            </div>
          </div>

          <!-- BMW M3 E30 (1986) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.28 (1).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">BMW M3 E30</h3>
              <p class="text-lg text-white/90">1986</p>
            </div>
          </div>

          <!-- Mercedes-Benz 190E 2.3-16 (1983) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.28.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Mercedes-Benz 190E 2.3-16</h3>
              <p class="text-lg text-white/90">1983</p>
            </div>
          </div>

          <!-- Audi Quattro (1980) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.29 (1).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Audi Quattro</h3>
              <p class="text-lg text-white/90">1980</p>
            </div>
          </div>

          <!-- Lancia Delta Integrale (1987) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.29.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Lancia Delta Integrale</h3>
              <p class="text-lg text-white/90">1987</p>
            </div>
          </div>

          <!-- Alfa Romeo 75 (1985) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.30.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Alfa Romeo 75</h3>
              <p class="text-lg text-white/90">1985</p>
            </div>
          </div>

          <!-- Porsche 911 Turbo 930 (1980) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.31.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Porsche 911 Turbo 930</h3>
              <p class="text-lg text-white/90">1980</p>
            </div>
          </div>

          <!-- Ferrari 308 GTS (1980) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.32 (1).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Ferrari 308 GTS</h3>
              <p class="text-lg text-white/90">1980</p>
            </div>
          </div>

          <!-- DeLorean DMC-12 (1981) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.32 (2).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">DeLorean DMC-12</h3>
              <p class="text-lg text-white/90">1981</p>
            </div>
          </div>

          <!-- Renault 5 Turbo (1980) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="650"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.32 (3).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Renault 5 Turbo</h3>
              <p class="text-lg text-white/90">1980</p>
            </div>
          </div>

          <!-- Peugeot 205 GTI (1984) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.32.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Peugeot 205 GTI</h3>
              <p class="text-lg text-white/90">1984</p>
            </div>
          </div>

          <!-- Volkswagen Golf GTI Mk2 (1983) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="750"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.33 (1).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Volkswagen Golf GTI Mk2</h3>
              <p class="text-lg text-white/90">1983</p>
            </div>
          </div>

          <!-- BMW M5 E28 (1985) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.33 (2).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">BMW M5 E28</h3>
              <p class="text-lg text-white/90">1985</p>
            </div>
          </div>

          <!-- Mercedes-Benz SL R107 (1980) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="850"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.33.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Mercedes-Benz SL R107</h3>
              <p class="text-lg text-white/90">1980</p>
            </div>
          </div>

          <!-- Jaguar XJ-S (1980) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.34 (1).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Jaguar XJ-S</h3>
              <p class="text-lg text-white/90">1980</p>
            </div>
          </div>

          <!-- Aston Martin V8 Vantage (1980) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="950"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.34.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Aston Martin V8 Vantage</h3>
              <p class="text-lg text-white/90">1980</p>
            </div>
          </div>

          <!-- Lotus Esprit Turbo (1980) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.35 (1).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Lotus Esprit Turbo</h3>
              <p class="text-lg text-white/90">1980</p>
            </div>
          </div>

          <!-- Maserati Biturbo (1981) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1050"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.35 (2).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Maserati Biturbo</h3>
              <p class="text-lg text-white/90">1981</p>
            </div>
          </div>

          <!-- Ferrari Mondial (1980) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1100"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.35 (3).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Ferrari Mondial</h3>
              <p class="text-lg text-white/90">1980</p>
            </div>
          </div>

          <!-- Porsche 928 S (1980) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1150"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.35.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Porsche 928 S</h3>
              <p class="text-lg text-white/90">1980</p>
            </div>
          </div>

          <!-- BMW 635 CSi (1982) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.36 (1).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">BMW 635 CSi</h3>
              <p class="text-lg text-white/90">1982</p>
            </div>
          </div>

          <!-- Alfa Romeo GTV6 (1980) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1250"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.36 (2).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Alfa Romeo GTV6</h3>
              <p class="text-lg text-white/90">1980</p>
            </div>
          </div>

          <!-- Fiat Uno Turbo (1985) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1300"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.36.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Fiat Uno Turbo</h3>
              <p class="text-lg text-white/90">1985</p>
            </div>
          </div>

          <!-- Lancia Thema 8.32 (1986) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1350"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.37 (1).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Lancia Thema 8.32</h3>
              <p class="text-lg text-white/90">1986</p>
            </div>
          </div>

          <!-- Ferrari 288 GTO (1984) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.37 (2).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Ferrari 288 GTO</h3>
              <p class="text-lg text-white/90">1984</p>
            </div>
          </div>

          <!-- Lamborghini LM002 (1986) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1450"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.37.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Lamborghini LM002</h3>
              <p class="text-lg text-white/90">1986</p>
            </div>
          </div>

          <!-- Nissan 300ZX (1984) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1500"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.38 (1).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Nissan 300ZX</h3>
              <p class="text-lg text-white/90">1984</p>
            </div>
          </div>

          <!-- Toyota Supra A70 (1986) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1550"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.38.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Toyota Supra A70</h3>
              <p class="text-lg text-white/90">1986</p>
            </div>
          </div>

          <!-- Mazda RX-7 FC (1985) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.39 (1).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Mazda RX-7 FC</h3>
              <p class="text-lg text-white/90">1985</p>
            </div>
          </div>

          <!-- Chevrolet Corvette C4 (1984) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1650"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.39 (2).jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Chevrolet Corvette C4</h3>
              <p class="text-lg text-white/90">1984</p>
            </div>
          </div>

          <!-- Pontiac Firebird Trans Am (1982) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1700"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.39.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Pontiac Firebird Trans Am</h3>
              <p class="text-lg text-white/90">1982</p>
            </div>
          </div>

          <!-- Ford Mustang GT (1987) -->
          <div
            @click="$router.push('/contatti')"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1750"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 80/WhatsApp Image 2025-10-11 at 20.41.40.jpeg')` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 class="text-2xl font-serif font-bold mb-2">Ford Mustang GT</h3>
              <p class="text-lg text-white/90">1987</p>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>
