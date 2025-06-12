<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { db } from '@/firebaseConfig'
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  limit
} from 'firebase/firestore'

const { t } = useI18n()

// Expose environment variables for template usage
const isDev = import.meta.env.DEV
const firebaseProjectId = import.meta.env.VITE_FIREBASE_PROJECT_ID
const firebaseAppId     = import.meta.env.VITE_FIREBASE_APP_ID
const envMode           = import.meta.env.MODE

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
      throw new Error('Il nome è obbligatorio')
    }
    if (!form.value.email.trim()) {
      throw new Error('L\'email è obbligatoria')
    }
    if (!form.value.message.trim()) {
      throw new Error('Il messaggio è obbligatorio')
    }
    if (form.value.message.trim().length < 10) {
      throw new Error('Il messaggio deve essere di almeno 10 caratteri')
    }
    if (!form.value.privacy_accepted) {
      throw new Error('Devi accettare l\'informativa sulla privacy per continuare')
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.value.email.trim())) {
      throw new Error('Inserisci un indirizzo email valido')
    }

    // (Opzionale) Test di connessione a Firestore
    const testQ = query(
      collection(db, 'contact_requests'),
      limit(1)
    )
    await getDocs(testQ)

    // Prepara i dati per l'invio
    const contactData = {
      name:             form.value.name.trim(),
      surname:          form.value.surname.trim() || null,
      email:            form.value.email.toLowerCase().trim(),
      message:          form.value.message.trim(),
      status:           'new',
      privacy_accepted: true,
      created_at:       serverTimestamp()
    }

    // Inserimento in Firestore
    await addDoc(collection(db, 'contact_requests'), contactData)

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
    if (err.message?.includes('Timeout')) {
      error.value = 'La connessione è troppo lenta. Riprova più tardi.'
    } else if (err.message?.includes('network')) {
      error.value = 'Errore di rete. Controlla la connessione e riprova.'
    } else {
      error.value = err.message || 'Si è verificato un errore. Riprova più tardi.'
    }
    console.error('Errore invio contatto:', err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contattaci" class="relative min-h-screen flex items-center justify-center py-20">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2000" 
        alt="Background" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/90"></div>
    </div>

    <div class="container relative z-10">
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">{{ t('contact.title') }}</h2>
          <p class="text-xl text-zinc-400">{{ t('contact.subtitle') }}</p>
        </div>

        <div class="bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl" data-aos="fade-up" data-aos-delay="200">
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
                <p class="text-green-400 font-medium">✅ Perfetto! La tua richiesta è stata inviata.</p>
                <p class="text-green-300 text-sm mt-1">
                  Lorenzo riceverà un'email con i tuoi dettagli. Controlla anche la tua casella!
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
                  Se persiste, contatta Lorenzo direttamente.
                </p>
              </div>
            </div>
          </div>

          <!-- Debug (solo DEV) -->
          <div v-if="isDev" class="mb-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
            <h4 class="text-blue-200 font-medium mb-2">🔧 Debug Info (DEV)</h4>
            <div class="text-blue-300 text-sm space-y-1">
              <p><strong>Project ID:</strong> {{ firebaseProjectId }}</p>
              <p><strong>App ID:</strong> {{ firebaseAppId }}</p>
              <p><strong>Env:</strong> {{ envMode }}</p>
            </div>
          </div>

          <!-- Info Sistema Email -->
          <div class="mb-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 
                         0 0116 0zm-7-4a1 1 0 11-2 
                         0 1 1 0 012 0zM9 9a1 1 0 000 
                         2v3a1 1 0 001 1h1a1 1 0 
                         100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"/>
              </svg>
              <div>
                <p class="text-blue-400 font-medium">📧 Sistema Email Automatico</p>
                <p class="text-blue-300 text-sm mt-1">
                  Quando invii, Firestore registra la richiesta e un trigger esterno
                  invierà l'email a Lorenzo.
                </p>
              </div>
            </div>
          </div>

          <!-- Form -->
          <form @submit="handleSubmit" class="space-y-6">
            <!-- Nome / Cognome -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="name" class="block text-sm font-medium text-zinc-300 mb-2">Nome *</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  :disabled="loading"
                  autocomplete="given-name"
                  class="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg 
                         text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 
                         disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label for="surname" class="block text-sm font-medium text-zinc-300 mb-2">Cognome</label>
                <input
                  id="surname"
                  v-model="form.surname"
                  type="text"
                  :disabled="loading"
                  autocomplete="family-name"
                  class="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg
                         text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 
                         disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Il tuo cognome"
                />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-zinc-300 mb-2">Email *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                :disabled="loading"
                autocomplete="email"
                class="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg
                       text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 
                       disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="La tua email"
              />
            </div>

            <!-- Messaggio -->
            <div>
              <label for="message" class="block text-sm font-medium text-zinc-300 mb-2">Messaggio *</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                required
                :disabled="loading"
                class="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg
                       text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 
                       resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Descrivi il tuo progetto o la tua richiesta..."
              ></textarea>
              <div class="flex justify-between mt-2 text-sm text-zinc-400">
                <span>Minimo 10 caratteri</span>
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
                Accetto l'informativa sulla privacy e autorizzo il trattamento dei miei dati personali
                per rispondere alla mia richiesta. *
              </label>
            </div>

            <!-- Bottone -->
            <button
              type="submit"
              :disabled="loading || !form.privacy_accepted"
              class="w-full bg-gradient-to-r from-red-600 to-red-700 
                     hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-6 
                     rounded-lg transition-all duration-200 transform hover:scale-[1.02] 
                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                     focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                Invio in corso...
              </span>
              <span v-else>📧 Invia Richiesta</span>
            </button>
          </form>

          <!-- Contatti alternativi -->
          <div class="mt-8 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
            <h4 class="text-green-200 font-medium mb-2">📞 Contatto Diretto</h4>
            <p class="text-green-300 text-sm">Se preferisci, contatta Lorenzo direttamente:</p>
            <div class="mt-2 space-y-1 text-green-200 text-sm">
              <p>📧 <a href="mailto:ilsorpassodilorenzobasile@gmail.com" class="hover:underline">
                ilsorpassodilorenzobasile@gmail.com
              </a></p>
              <p>📱 <a href="tel:+393473952838" class="hover:underline">+39 347 395 2838</a></p>
            </div>
          </div>
        </div>

        <!-- Info di contatto -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="400">
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
            <h3 class="text-lg font-semibold mb-2">Telefono</h3>
            <p class="text-zinc-400">+39 347 395 2838</p>
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
            <h3 class="text-lg font-semibold mb-2">Email</h3>
            <p class="text-zinc-400">ilsorpassodilorenzobasile@gmail.com</p>
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
            <h3 class="text-lg font-semibold mb-2">Indirizzo</h3>
            <p class="text-zinc-400">Via Suor Celestina Donati 90<br>00167 Roma, Italia</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
