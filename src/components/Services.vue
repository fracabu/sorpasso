<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const router = useRouter()
const { t } = useI18n()

const vehicleCategories = [
  {
    title: t('services.categories.vintage.title'),
    subtitle: t('services.categories.vintage.subtitle'),
    description: t('services.categories.vintage.description'),
    bgImage: "/images/Auto%20anni%2050%20-%2060/PHOTO-2025-06-29-19-01-27.jpg",
    route: t('services.categories.vintage.route')
  },
  {
    title: 'SUPER CARS',
    subtitle: 'Moderne, Vintage & Tours',
    description: 'Le supercar più esclusive per ogni occasione',
    bgImage: "/images/Super%20Cars%20Vintage/PHOTO-2025-07-01-15-41-51.jpg",
    route: '/servizi/supercars'
  },
  {
    title: t('services.categories.moto.title'),
    subtitle: t('services.categories.moto.subtitle'),
    description: t('services.categories.moto.description'),
    bgImage: "/images/Moto%20d_Epoca/PHOTO-2025-07-01-17-20-26.jpg",
    route: t('services.categories.moto.route')
  },
  {
    title: t('services.categories.musclecars.title'),
    subtitle: t('services.categories.musclecars.subtitle'),
    description: t('services.categories.musclecars.description'),
    bgImage: "/images/Auto%20Tunning%20&%20Muscle%20Cars/PHOTO-2025-07-01-17-09-36.jpg",
    route: t('services.categories.musclecars.route')
  },
  {
    title: t('services.categories.military.title'),
    subtitle: t('services.categories.military.subtitle'),
    description: t('services.categories.military.description'),
    bgImage: "/images/Mezzi%20Militari%20d_Epoca/PHOTO-2025-07-01-17-12-45.jpg",
    route: t('services.categories.military.route')
  },
  {
    title: t('services.categories.sea.title'),
    subtitle: t('services.categories.sea.subtitle'),
    description: t('services.categories.sea.description'),
    bgImage: "/images/Barche%20&%20Yacht/PHOTO-2025-07-01-17-26-09.jpg",
    route: t('services.categories.sea.route')
  },
  {
    title: t('services.categories.custom.title'),
    subtitle: t('services.categories.custom.subtitle'),
    description: t('services.categories.custom.description'),
    bgImage: "/images/Personalizzazioni/PHOTO-2025-02-07-17-46-02.jpg",
    route: t('services.categories.custom.route')
  }
]

const tourCategories = [
  {
    title: t('services.tour.categories.auto.title'),
    subtitle: t('services.tour.categories.auto.subtitle'),
    description: t('services.tour.categories.auto.description'),
    bgImage: '/images/Tours%20Auto/PHOTO-2025-09-19-20-38-43.jpg',
    route: '/tour/auto-italia'
  },
  {
    title: t('services.tour.categories.vespe.title'),
    subtitle: t('services.tour.categories.vespe.subtitle'),
    description: t('services.tour.categories.vespe.description'),
    bgImage: '/images/Tours%20Vespe/PHOTO-2025-09-19-20-42-59.jpg',
    route: '/tour/vespe-italia'
  }
]


</script>

<template>
  <!-- Services Section -->
  <section id="servizi" class="min-h-screen bg-black flex items-center py-24">
    <div class="container">
      <h2 
        class="text-4xl md:text-5xl font-bold mb-16 text-center"
        data-aos="fade-up"
      >
        {{ t('services.title') }}
      </h2>
      
      <!-- Carosello servizi -->
      <div data-aos="fade-up" data-aos-delay="200">
        <swiper
          :modules="[Autoplay, Navigation, Pagination]"
          :slides-per-view="1"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 30
            },
            '1280': {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }"
          :space-between="30"
          :navigation="true"
          :pagination="{ clickable: true }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false
          }"
          class="services-swiper"
        >
          <swiper-slide 
            v-for="category in vehicleCategories" 
            :key="category.title"
            class="pb-12"
          >
             <router-link 
               :to="category.route"
               class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden block"
             >
              <!-- Background Image -->
              <div 
                class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                :style="{ backgroundImage: `url(${category.bgImage})` }"
              ></div>
              
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <!-- Card Content -->
              <div class="relative h-full p-6 flex flex-col justify-end text-center">
                <!-- Title -->
                <h3 class="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                  {{ category.title }}
                </h3>
                
                <!-- Subtitle -->
                <p class="text-accent font-semibold mb-2 text-sm">{{ category.subtitle }}</p>
                
                <!-- Description -->
                <p class="text-white/80 text-sm">
                  {{ category.description }}
                </p>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <!-- Tour in Italia -->
  <section id="tour" class="bg-black flex items-center py-24">
    <div class="container">
      <h2
        class="text-4xl md:text-5xl font-bold mb-16 text-center"
        data-aos="fade-up"
      >
        {{ t('services.tour.title') }}
      </h2>

      <!-- Tour Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        <router-link
          v-for="category in tourCategories"
          :key="category.title"
          :to="category.route"
          class="relative group cursor-pointer h-[400px] rounded-2xl overflow-hidden block shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <!-- Background Image -->
          <div
            class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            :style="{ backgroundImage: `url(${category.bgImage})` }"
          ></div>

          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

          <!-- Card Content -->
          <div class="relative h-full p-8 flex flex-col justify-end text-center">
            <!-- Title -->
            <h3 class="text-3xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
              {{ category.title }}
            </h3>

            <!-- Subtitle -->
            <p class="text-accent font-semibold mb-4 text-lg">{{ category.subtitle }}</p>

            <!-- Description -->
            <p class="text-white/90 text-base">
              {{ category.description }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style>
.tour-swiper,
.services-swiper {
  padding-bottom: 3rem !important;
}

.tour-swiper .swiper-button-next,
.tour-swiper .swiper-button-prev,
.services-swiper .swiper-button-next,
.services-swiper .swiper-button-prev {
  color: #DC2626 !important;
}

.tour-swiper .swiper-pagination-bullet,
.services-swiper .swiper-pagination-bullet {
  background: #DC2626 !important;
}

.tour-swiper .swiper-pagination,
.services-swiper .swiper-pagination {
  bottom: 0 !important;
}
</style>