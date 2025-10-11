<template>
  <ServiceLayout>
    <template #title>{{ t('services.categories.supercar.title') }}</template>
    <template #description>
      {{ t('services.categories.supercar.longDescription') }}
    </template>

    <template #cards>
      <!-- Supercar Moderne -->
      <div class="col-span-full mb-8">
        <h3 class="text-2xl font-bold mb-6 text-center text-accent">
          {{ t('services.categories.supercar.subcategories.moderne.title') }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            v-for="vehicle in moderneVehicles"
            :key="vehicle.title"
            v-bind="vehicle"
          />
        </div>
      </div>

      <!-- Supercar Vintage -->
      <div class="col-span-full">
        <h3 class="text-2xl font-bold mb-6 text-center text-accent">
          {{ t('services.categories.supercar.subcategories.vintage.title') }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            v-for="vehicle in vintageVehicles"
            :key="vehicle.title"
            v-bind="vehicle"
          />
        </div>
      </div>
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServiceCard from '@/components/ServiceCard.vue'

const { t } = useI18n()

const moderneVehicles = [
  {
    image: '/images/supercar/moderne/lamborghini-huracan.jpg',
    title: 'Lamborghini Huracán',
    description: 'Potenza e design italiano per scene ad alto impatto'
  },
  {
    image: '/images/supercar/moderne/ferrari-488.jpg',
    title: 'Ferrari 488 GTB',
    description: 'Il cavallino rampante nella sua forma più moderna'
  },
  {
    image: '/images/supercar/moderne/mclaren-720s.jpg',
    title: 'McLaren 720S',
    description: 'Tecnologia British per performance estreme'
  },
  {
    image: '/images/supercar/moderne/porsche-911-turbo.jpg',
    title: 'Porsche 911 Turbo S',
    description: 'L\'icona tedesca nell\'ultima evoluzione'
  },
  {
    image: '/images/supercar/moderne/audi-r8.jpg',
    title: 'Audi R8 V10',
    description: 'Eleganza e potenza dai quattro anelli'
  },
  {
    image: '/images/supercar/moderne/nissan-gtr.jpg',
    title: 'Nissan GT-R',
    description: 'Godzilla giapponese per scene d\'azione'
  }
]

const vintageVehicles = [
  {
    image: '/images/supercar/vintage/ferrari-testarossa.jpg',
    title: 'Ferrari Testarossa',
    description: 'L\'icona degli anni \'80 in tutta la sua gloria'
  },
  {
    image: '/images/supercar/vintage/lamborghini-countach.jpg',
    title: 'Lamborghini Countach',
    description: 'Design rivoluzionario che ha definito un\'epoca'
  },
  {
    image: '/images/supercar/vintage/porsche-930-turbo.jpg',
    title: 'Porsche 930 Turbo',
    description: 'La vedova nera di Stoccarda'
  },
  {
    image: '/images/supercar/vintage/ferrari-f40.jpg',
    title: 'Ferrari F40',
    description: 'L\'ultima Ferrari approvata da Enzo'
  },
  {
    image: '/images/supercar/vintage/lamborghini-diablo.jpg',
    title: 'Lamborghini Diablo',
    description: 'Il toro di Sant\'Agata negli anni \'90'
  },
  {
    image: '/images/supercar/vintage/porsche-959.jpg',
    title: 'Porsche 959',
    description: 'Tecnologia all\'avanguardia degli anni \'80'
  }
]
</script>