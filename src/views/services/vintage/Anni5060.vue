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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <!-- Auto 1 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Fiat 500
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1957</p>
            </div>
          </div>

          <!-- Auto 2 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 2.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Alfa Romeo Giulietta
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1954</p>
            </div>
          </div>

          <!-- Auto 3 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 3.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Lancia Aurelia B20
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1951</p>
            </div>
          </div>

          <!-- Auto 4 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="160"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 4.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Ferrari 250 GT
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1956</p>
            </div>
          </div>

          <!-- Auto 5 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="180"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 5.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Maserati 3500 GT
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1957</p>
            </div>
          </div>

          <!-- Auto 6 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 6.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Porsche 356
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1950</p>
            </div>
          </div>

          <!-- Auto 7 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="220"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 7.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Jaguar E-Type
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1961</p>
            </div>
          </div>

          <!-- Auto 8 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="240"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 8.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Mercedes-Benz 300 SL
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1954</p>
            </div>
          </div>

          <!-- Auto 9 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="260"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 9.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Chevrolet Corvette C1
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1953</p>
            </div>
          </div>

          <!-- Auto 10 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="280"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 10.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Aston Martin DB5
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1963</p>
            </div>
          </div>

          <!-- Auto 11 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 11.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Lancia Flaminia
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1957</p>
            </div>
          </div>

          <!-- Auto 12 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="320"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 12.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Alfa Romeo 2000 Spider
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1958</p>
            </div>
          </div>

          <!-- Auto 13 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="340"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 13.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Fiat 600
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1955</p>
            </div>
          </div>

          <!-- Auto 14 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="360"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 14.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                BMW 507
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1956</p>
            </div>
          </div>

          <!-- Auto 15 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="380"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 15.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Triumph TR3
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1955</p>
            </div>
          </div>

          <!-- Auto 16 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 16.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Austin-Healey 3000
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1959</p>
            </div>
          </div>

          <!-- Auto 17 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="420"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 17.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Ford Thunderbird
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1955</p>
            </div>
          </div>

          <!-- Auto 18 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="440"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 18.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Volkswagen Beetle
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1950</p>
            </div>
          </div>

          <!-- Auto 19 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="460"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 19.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Citroën DS
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1955</p>
            </div>
          </div>

          <!-- Auto 20 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="480"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 20.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                MG MGA
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1955</p>
            </div>
          </div>

          <!-- Auto 21 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 21.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Alfa Romeo Giulia Spider
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1962</p>
            </div>
          </div>

          <!-- Auto 22 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="520"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 22.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Ferrari 250 GTO
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1962</p>
            </div>
          </div>

          <!-- Auto 23 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="540"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 23.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Shelby Cobra
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1962</p>
            </div>
          </div>

          <!-- Auto 24 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="560"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 24.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Lamborghini 350 GT
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1964</p>
            </div>
          </div>

          <!-- Auto 25 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="580"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 25.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Maserati A6GCS
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1953</p>
            </div>
          </div>

          <!-- Auto 26 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 26.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Cadillac Eldorado
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1959</p>
            </div>
          </div>

          <!-- Auto 27 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="620"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 27.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Rolls-Royce Silver Cloud
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1955</p>
            </div>
          </div>

          <!-- Auto 28 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="640"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 28.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Bentley S1 Continental
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1955</p>
            </div>
          </div>

          <!-- Auto 29 -->
          <div
            @click="showContact = true"
            class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="660"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('/images/Auto anni 50 - 60/PHOTO-2025-06-29-19-01-27 29.jpg')` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end text-center">
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                Lancia Appia
              </h3>
              <p class="text-accent font-semibold mb-2 text-sm">1953</p>
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
