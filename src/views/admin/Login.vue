<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// dati reactive
const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const isDev = import.meta.env.DEV

// API endpoint
const API_URL = import.meta.env.VITE_API_URL || '/api'

// handler per il login
const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    // Chiamata API
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Errore durante l\'accesso')
    }

    // Salva il token JWT
    localStorage.setItem('admin_token', data.token)
    localStorage.setItem('admin_email', data.user.email)

    // tutto ok, redirigo
    await router.push('/admin/dashboard')
  } catch (err: any) {
    // mapping degli errori
    console.error('Errore login:', err)
    if (err.message?.includes('fetch') || err.message?.includes('network')) {
      error.value = 'Errore di connessione. Riprova più tardi.'
    } else {
      error.value = err.message || 'Email o password non corretti'
    }
  } finally {
    loading.value = false
  }
}

// funzione di debug per pulire lo stato auth
const clearAuthState = async () => {
  try {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_email')
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
