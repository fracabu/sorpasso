<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebaseConfig'
import { 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from 'firebase/auth'

// dati reactive
const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const isDev = import.meta.env.DEV


// pulisce token corrotti all'avvio
onMounted(() => {
  const unsubscribe = onAuthStateChanged(auth, user => {
    unsubscribe()
    // se c'è un errore di token, forziamo il logout
    // (Firebase non espone esplicitamente messaggi su refresh token, 
    // ma in DEV possiamo sempre pulire lo stato)
  })
})

// handler per il login
const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    // tentativo di login con Firebase
    const cred = await signInWithEmailAndPassword(auth, email.value, password.value)

    // controllo email admin
    if (cred.user.email !== 'fracabu@gmail.com') {
      // non autorizzato: logout e messaggio
      await signOut(auth)
      error.value = 'Accesso non autorizzato'
      return
    }

    // tutto ok, redirigo
    await router.push('/admin/dashboard')
  } catch (err: any) {
    // mapping degli errori
    console.error('Errore login Firebase:', err)
    switch (err.code) {
      case 'auth/network-request-failed':
        error.value = 'Errore di connessione. Riprova più tardi.'
        break
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        error.value = 'Email o password non corretti'
        break
      case 'auth/too-many-requests':
        error.value = 'Troppi tentativi. Riprova tra qualche minuto.'
        break
      default:
        error.value = 'Errore durante l\'accesso. Riprova.'
    }
  } finally {
    loading.value = false
  }
}

// funzione di debug per pulire lo stato auth
const clearAuthState = async () => {
  try {
    await signOut(auth)
    window.location.reload()
  } catch (e) {
    console.error('Errore pulizia auth:', e)
  }
}
</script>

<template>
  <div class="flex-1 flex items-center justify-center px-4 py-20">
    <div class="max-w-md w-full">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-white">
          Area Admin
        </h2>
        <p class="mt-2 text-zinc-400">
          Accedi per gestire le richieste di contatto
        </p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6 bg-zinc-900/50 p-8 rounded-lg border border-zinc-800">
        <div class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-zinc-300 mb-1">Email</label>
            <input
              v-model="email"
              id="email"
              name="email"
              type="email"
              required
              class="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-accent focus:outline-none"
              placeholder="Inserisci la tua email"
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-zinc-300 mb-1">Password</label>
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              required
              class="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-accent focus:outline-none"
              placeholder="Inserisci la tua password"
            />
          </div>
        </div>

        <div v-if="error" class="text-red-500 text-sm text-center">
          {{ error }}
        </div>

        <button
          type="submit"
          class="btn-primary w-full"
          :disabled="loading"
        >
          {{ loading ? 'Accesso in corso...' : 'Accedi' }}
        </button>

        <div class="text-center mt-4">
          <router-link 
            to="/" 
            class="text-sm text-zinc-400 hover:text-accent"
          >
            Torna alla home
          </router-link>
        </div>

        <div class="text-center mt-4" v-if="isDev">
          <button
            type="button"
            @click="clearAuthState"
            class="text-xs text-zinc-500 hover:text-zinc-400"
          >
            🧹 Pulisci stato Auth (debug)
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
