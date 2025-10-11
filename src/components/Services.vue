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
    title: t('services.categories.supercar.title'),
    subtitle: t('services.categories.supercar.subtitle'),
    description: t('services.categories.supercar.description'),
    bgImage: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2074",
    route: t('services.categories.supercar.route')
  },
  {
    title: t('services.categories.tuning.title'),
    subtitle: t('services.categories.tuning.subtitle'),
    description: t('services.categories.tuning.description'),
    bgImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070",
    route: t('services.categories.tuning.route')
  },
  {
    title: t('services.categories.militari.title'),
    subtitle: t('services.categories.militari.subtitle'),
    description: t('services.categories.militari.description'),
    bgImage: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=2070",
    route: t('services.categories.militari.route')
  },
  {
    title: t('services.categories.motociclette.title'),
    subtitle: t('services.categories.motociclette.subtitle'),
    description: t('services.categories.motociclette.description'),
    bgImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070",
    route: t('services.categories.motociclette.route')
  },
  {
    title: t('services.categories.vespe.title'),
    subtitle: t('services.categories.vespe.subtitle'),
    description: t('services.categories.vespe.description'),
    bgImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7ac2?q=80&w=2074",
    route: t('services.categories.vespe.route')
  },
  {
    title: t('services.categories.barche.title'),
    subtitle: t('services.categories.barche.subtitle'),
    description: t('services.categories.barche.description'),
    bgImage: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=2072",
    route: t('services.categories.barche.route')
  },
  {
    title: t('services.categories.elicotteri.title'),
    subtitle: t('services.categories.elicotteri.subtitle'),
    description: t('services.categories.elicotteri.description'),
    bgImage: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=2070",
    route: t('services.categories.elicotteri.route')
  },
  {
    title: t('services.categories.carrozze.title'),
    subtitle: t('services.categories.carrozze.subtitle'),
    description: t('services.categories.carrozze.description'),
    bgImage: "https://images.unsplash.com/photo-1515706886582-54c73c5eaf41?q=80&w=2070",
    route: t('services.categories.carrozze.route')
  },
  {
    title: t('services.categories.biciclette.title'),
    subtitle: t('services.categories.biciclette.subtitle'),
    description: t('services.categories.biciclette.description'),
    bgImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7ac2?q=80&w=2074",
    route: t('services.categories.biciclette.route')
  }
]

const tourImages = [
  { 
    url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
    title: t('services.tour.locations.amalfi.title'),
    description: t('services.tour.locations.amalfi.description')
  },
  { 
    url: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',
    title: t('services.tour.locations.tuscany.title'),
    description: t('services.tour.locations.tuscany.description')
  },
  { 
    url: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c',
    title: t('services.tour.locations.como.title'),
    description: t('services.tour.locations.como.description')
  },
  { 
    url: 'https://images.unsplash.com/photo-1499678329028-101435549a4e',
    title: t('services.tour.locations.sicily.title'),
    description: t('services.tour.locations.sicily.description')
  },
  { 
    url: 'https://images.unsplash.com/photo-1537799943037-f5da89a65689',
    title: t('services.tour.locations.dolomites.title'),
    description: t('services.tour.locations.dolomites.description')
  }
]

const navigateToService = (route: string) => {
  router.push(route)
}
</script>

<template>
  <!-- Services Section -->
  <section id="servizi" class="bg-black flex items-center">
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
            <div 
              @click="navigateToService(category.route)"
              class="relative group cursor-pointer h-[280px] rounded-2xl overflow-hidden"
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
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <!-- Tour in Italia -->
  <section id="tour" class="bg-black flex items-center">
    <div class="container">
      <h2 
        class="text-4xl md:text-5xl font-bold mb-16 text-center"
        data-aos="fade-up"
      >
        {{ t('services.tour.title') }}
      </h2>
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
                }
              }"
              :space-between="30"
              :navigation="true"
              :pagination="{ clickable: true }"
              :autoplay="{
                delay: 3000,
                disableOnInteraction: false
              }"
              class="tour-swiper"
            >
              <swiper-slide 
                v-for="image in tourImages" 
                :key="image.title"
                class="pb-12"
              >
                <div class="relative group overflow-hidden rounded-lg h-[200px] md:h-[240px]">
                  <img 
                    :src="image.url" 
                    :alt="image.title"
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-end p-6 text-center">
                    <h4 class="text-xl font-bold text-white mb-2">{{ image.title }}</h4>
                    <p class="text-white/80 text-sm">{{ image.description }}</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
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