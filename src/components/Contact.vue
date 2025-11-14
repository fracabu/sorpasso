<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// API endpoint
const API_URL = import.meta.env.VITE_API_URL || '/api'



interface ContactForm {
  name:             string
  surname:          string
  email:            string
  message:          string
  privacy_accepted: boolean
}

const form = ref<ContactForm>({
  name:             '',
  surname:          '',
  email:            '',
  message:          '',
  privacy_accepted: false
})

const loading = ref(false)
const success = ref(false)
const error   = ref('')

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  loading.value = true
  error.value   = ''
  success.value = false

  try {
    // Validazione lato client
    if (!form.value.name.trim()) {
      throw new Error(t('contact.form.validation.nameRequired'))
    }
    if (!form.value.email.trim()) {
      throw new Error(t('contact.form.validation.emailRequired'))
    }
    if (!form.value.message.trim()) {
      throw new Error(t('contact.form.validation.messageRequired'))
    }
    if (form.value.message.trim().length < 10) {
      throw new Error(t('contact.form.validation.messageMinLength'))
    }
    if (!form.value.privacy_accepted) {
      throw new Error(t('contact.form.validation.privacyRequired'))
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.value.email.trim())) {
      throw new Error(t('contact.form.validation.emailInvalid'))
    }

    // Prepara i dati per l'invio
    const contactData = {
      name:    form.value.name.trim(),
      surname: form.value.surname.trim() || '',
      email:   form.value.email.toLowerCase().trim(),
      message: form.value.message.trim()
    }

    // Chiamata API
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactData)
    })

    // Verifica prima se la risposta è OK
    if (!response.ok) {
      let errorMessage = t('contact.form.error')
      try {
        const data = await response.json()
        errorMessage = data.error || data.details || errorMessage
      } catch (jsonError) {
        // Se non è JSON valido, usa il messaggio di default
        console.error('Errore parsing JSON dalla risposta:', jsonError)
        errorMessage = `Errore ${response.status}: ${response.statusText}`
      }
      throw new Error(errorMessage)
    }

    // Solo se la risposta è OK, prova a parsare il JSON
    const data = await response.json()

    success.value = true
    // reset del form
    form.value = {
      name:             '',
      surname:          '',
      email:            '',
      message:          '',
      privacy_accepted: false
    }
    // scroll al messaggio di successo
    setTimeout(() => {
      const el = document.querySelector('.success-message')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)

  } catch (err: any) {
    // Mapping degli errori
    if (err.message?.includes('fetch') || err.message?.includes('network')) {
      error.value = t('contact.form.validation.networkError')
    } else {
      error.value = err.message || t('contact.form.error')
    }
    console.error('Errore invio contatto:', err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contattaci" class="min-h-screen relative bg-black flex items-center py-24">
    <div class="container relative z-10">
      <!-- Layout a tre colonne -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <!-- Prima colonna: Testo introduttivo -->
        <div class="relative flex flex-col justify-center bg-cover bg-center bg-no-repeat rounded-2xl p-8 min-h-[400px]"
             style="background-image: url('/bg-col1.png')" data-aos="fade-up">
          <div class="absolute inset-0 bg-black/60 rounded-2xl"></div>
          <div class="relative z-10">
            <h2 class="text-3xl font-bold mb-4 text-white">{{ t('contact.title') }}</h2>
            <p class="text-zinc-200 text-lg">{{ t('contact.subtitle') }}</p>
          </div>
        </div>

        <!-- Seconda colonna: Form -->
        <div class="bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-4 shadow-2xl" data-aos="fade-up" data-aos-delay="200">
          <!-- Successo -->
          <div v-if="success" class="success-message mb-6 p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-400 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 
                         1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"/>
              </svg>
              <div>
                <p class="text-green-400 font-medium">✅ {{ t('contact.form.success.title') }}</p>
                <p class="text-green-300 text-sm mt-1">
                  {{ t('contact.form.success.message') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Errore -->
          <div v-if="error" class="mb-6 p-4 bg-red-600/20 border border-red-500/30 rounded-lg">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 
                         0 000 16zM8.707 7.293a1 1 0 00-1.414 
                         1.414L8.586 10l-1.293 1.293a1 1 0 101.414 
                         1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 
                         10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 
                         8.707 7.293z"
                      clip-rule="evenodd"/>
              </svg>
              <div>
                <p class="text-red-400 font-medium">{{ error }}</p>
                <p class="text-red-300 text-sm mt-1">
                  {{ t('contact.form.errorPersist') }}
                </p>
              </div>
            </div>
          </div>



          <!-- Form -->
          <form @submit="handleSubmit" class="space-y-4">
            <!-- Nome / Cognome -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label for="name" class="block text-sm font-medium text-zinc-300 mb-2">{{ t('contact.form.name') }} *</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  :disabled="loading"
                  autocomplete="given-name"
                  class="w-full px-3 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg
                         text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500
                         disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  :placeholder="t('contact.form.namePlaceholder')"
                />
              </div>
              <div>
                <label for="surname" class="block text-sm font-medium text-zinc-300 mb-2">{{ t('contact.form.surname') }}</label>
                <input
                  id="surname"
                  v-model="form.surname"
                  type="text"
                  :disabled="loading"
                  autocomplete="family-name"
                  class="w-full px-3 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg
                         text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500
                         disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  :placeholder="t('contact.form.surnamePlaceholder')"
                />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-zinc-300 mb-2">{{ t('contact.form.email') }} *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                :disabled="loading"
                autocomplete="email"
                class="w-full px-3 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg
                       text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500
                       disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                :placeholder="t('contact.form.emailPlaceholder')"
              />
            </div>

            <!-- Messaggio -->
            <div>
              <label for="message" class="block text-sm font-medium text-zinc-300 mb-2">{{ t('contact.form.message') }} *</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="3"
                required
                :disabled="loading"
                class="w-full px-3 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg
                       text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500
                       resize-none disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                :placeholder="t('contact.form.messagePlaceholder')"
              ></textarea>
              <div class="flex justify-between mt-2 text-sm text-zinc-400">
                <span>{{ t('contact.form.minLength') }}</span>
                <span>{{ form.message.length }}/2000</span>
              </div>
            </div>

            <!-- Privacy -->
            <div class="flex items-start space-x-3">
              <input
                id="privacy"
                v-model="form.privacy_accepted"
                type="checkbox"
                required
                :disabled="loading"
                class="mt-1 w-5 h-5 text-red-600 bg-zinc-800 border-zinc-600 rounded
                       focus:ring-red-500 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label for="privacy" class="text-sm text-zinc-300 leading-relaxed">
                <span v-html="t('contact.form.privacy').replace('<link>', '<router-link to=\'/privacy-policy\' class=\'text-red-400 hover:underline\' target=\'_blank\'>').replace('</link>', '</router-link>')"></span> *
              </label>
            </div>

            <!-- Bottone -->
            <button
              type="submit"
              :disabled="loading || !form.privacy_accepted"
              class="w-full bg-gradient-to-r from-red-600 to-red-700
                     hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6
                     rounded-lg transition-all duration-200 transform hover:scale-[1.02]
                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                     focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                {{ t('contact.form.sending') }}
              </span>
              <span v-else>📧 {{ t('contact.form.submit') }}</span>
            </button>
          </form>
        </div>

        <!-- Terza colonna: Info contatto -->
        <div class="relative flex flex-col justify-center items-center space-y-6 bg-cover bg-center bg-no-repeat rounded-2xl p-8 min-h-[400px]"
             style="background-image: url('img-col3.png')" data-aos="fade-up" data-aos-delay="400">
          <div class="absolute inset-0 bg-black/60 rounded-2xl"></div>
          <div class="relative z-10 flex flex-col justify-center items-center space-y-6">
          <!-- Telefono -->
          <div class="text-center">
            <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1
                         0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257
                         a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2
                         0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-white">{{ t('contact.info.phone') }}</h3>
            <p class="text-zinc-200">+39 347 395 2838</p>
          </div>
          <!-- Email -->
          <div class="text-center">
            <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5
                         19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2
                         0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-white">{{ t('contact.info.email') }}</h3>
            <p class="text-zinc-200">ilsorpassodilorenzobasile@gmail.com</p>
          </div>
          <!-- Indirizzo -->
          <div class="text-center">
            <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998
                         1.998 0 01-2.827 0l-4.244-4.243a8
                         8 0 1111.314 0z"/><path stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-white">{{ t('contact.info.address') }}</h3>
            <p class="text-zinc-200">Via Suor Celestina Donati 90<br>00167 Roma, Italia</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
