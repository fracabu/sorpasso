<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showBanner = ref(false)
const isVisible = ref(false)

const checkCookieConsent = () => {
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    showBanner.value = true
    setTimeout(() => {
      isVisible.value = true
    }, 1000)
  }
}

const acceptCookies = () => {
  localStorage.setItem('cookie-consent', 'accepted')
  isVisible.value = false
  setTimeout(() => {
    showBanner.value = false
  }, 300)
}

const rejectCookies = () => {
  localStorage.setItem('cookie-consent', 'rejected')
  isVisible.value = false
  setTimeout(() => {
    showBanner.value = false
  }, 300)
}

onMounted(() => {
  checkCookieConsent()
})
</script>

<template>
  <div 
    v-if="showBanner"
    class="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out"
    :class="{ 'translate-y-0': isVisible, 'translate-y-full': !isVisible }"
  >
    <div class="bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-700 p-4 md:p-6">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <!-- Contenuto del banner -->
          <div class="flex-1">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0">
                <svg class="w-6 h-6 text-amber-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div class="text-white">
                <p class="text-sm md:text-base leading-relaxed">
                  <strong>Utilizzo dei Cookie:</strong> Questo sito utilizza cookie tecnici necessari per il funzionamento 
                  (selezione lingua, autenticazione admin) e servizi di terze parti (Firebase). 
                  <router-link to="/cookie-policy" class="text-red-400 hover:text-red-300 underline">
                    Scopri di più
                  </router-link> 
                  nella Cookie Policy o 
                  <router-link to="/privacy-policy" class="text-red-400 hover:text-red-300 underline">
                    Privacy Policy
                  </router-link>.
                </p>
              </div>
            </div>
          </div>

          <!-- Pulsanti di azione -->
          <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              @click="rejectCookies"
              class="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white border border-zinc-600 hover:border-zinc-500 rounded-lg transition-colors"
            >
              Solo necessari
            </button>
            <button
              @click="acceptCookies"
              class="px-6 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>