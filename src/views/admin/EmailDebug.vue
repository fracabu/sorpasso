<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// API endpoint
const API_URL = import.meta.env.VITE_API_URL || '/api'
const loading = ref(false)
const testResult = ref('')
const emailLogs = ref<any[]>([])
const recentRequests = ref<any[]>([])
const systemStatus = ref({
  totalRequests: 0,
  emailsSent: 0,
  emailsFailed: 0,
  logCount: 0
})

async function checkSystemStatus() {
  loading.value = true
  try {
    const token = localStorage.getItem('admin_token')
    if (!token) {
      router.push('/admin/login')
      return
    }

    // Recupera richieste da API
    const response = await fetch(`${API_URL}/contacts`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('admin_token')
        localStorage.removeItem('admin_email')
        router.push('/admin/login')
        return
      }
      throw new Error('Errore nel caricamento delle richieste')
    }

    const data = await response.json()
    const contacts = data.contacts || []

    // Ultime 10 richieste
    recentRequests.value = contacts.slice(0, 10)
    systemStatus.value.totalRequests = recentRequests.value.length

    // Email logs non più disponibili (migrati da Firebase)
    emailLogs.value = []
    systemStatus.value.logCount = 0
    systemStatus.value.emailsSent = 0
    systemStatus.value.emailsFailed = 0

  } catch (err: any) {
    console.error('Errore nel recupero dati:', err)
  } finally {
    loading.value = false
  }
}

async function testEmailSystem() {
  loading.value = true
  testResult.value = 'Invio test in corso...'
  try {
    const token = localStorage.getItem('admin_token')
    if (!token) {
      router.push('/admin/login')
      return
    }

    // Invia richiesta di test tramite API
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Test Sistema Email',
        surname: 'Debug',
        email: 'test@ilsorpasso.debug',
        message: `Test del sistema email automatico — ${new Date().toLocaleString('it-IT')}`
      })
    })

    if (!response.ok) {
      throw new Error('Errore nel test del sistema')
    }

    testResult.value = `✅ Test inviato!
Se il sistema funziona, Lorenzo riceverà un'email entro 1 minuto.
Controlla SPAM e tutte le tab di Gmail.`

    // Ricarica lo stato dopo un paio di secondi
    setTimeout(checkSystemStatus, 2000)
  } catch (err: any) {
    console.error('Errore test email:', err)
    testResult.value = `❌ Errore durante il test: ${err.message}`
  } finally {
    loading.value = false
  }
}

function goToDashboard() {
  router.push('/admin/dashboard')
}

async function logout() {
  try {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_email')
    router.push('/admin/login')
  } catch (err) {
    console.error('Errore logout:', err)
  }
}

onMounted(checkSystemStatus)
</script>

<template>
  <div class="min-h-screen bg-black text-white p-4">
    <!-- Top Bar -->
    <div class="flex justify-between items-center mb-8">
      <div class="flex items-center space-x-4">
        <router-link to="/" class="btn-primary">
          <i class="fas fa-home mr-2"></i> Home
        </router-link>
        <button @click="goToDashboard" class="btn border border-accent text-accent hover:bg-accent hover:text-white">
          <i class="fas fa-list mr-2"></i> Dashboard
        </button>
      </div>
      <button @click="logout" class="btn border border-accent text-accent hover:bg-accent hover:text-white">
        Logout
      </button>
    </div>

    <div class="container mx-auto max-w-6xl">
      <h1 class="text-3xl font-bold mb-8">🔍 Debug Sistema Email - Il Sorpasso</h1>

      <!-- Stato Sistema -->
      <div class="bg-blue-900/30 border border-blue-500/50 rounded-lg p-6 mb-8">
        <h2 class="text-xl font-bold mb-4 text-blue-200">📊 Stato del Sistema</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-zinc-800 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-blue-400">{{ systemStatus.totalRequests }}</div>
            <div class="text-sm text-zinc-400">Richieste Totali</div>
          </div>
          <div class="bg-zinc-800 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-green-400">{{ systemStatus.emailsSent }}</div>
            <div class="text-sm text-zinc-400">Email Inviate</div>
          </div>
          <div class="bg-zinc-800 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-red-400">{{ systemStatus.emailsFailed }}</div>
            <div class="text-sm text-zinc-400">Email Fallite</div>
          </div>
          <div class="bg-zinc-800 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-yellow-400">{{ systemStatus.logCount }}</div>
            <div class="text-sm text-zinc-400">Log Totali</div>
          </div>
        </div>
      </div>

      <!-- Test Sistema -->
      <div class="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-6 mb-8">
        <h2 class="text-xl font-bold mb-4 text-yellow-200">🧪 Test Sistema Email</h2>
        <p class="text-yellow-300 mb-4">
          Clicca per inserire una richiesta di test e verificare che Lorenzo riceva l'email.
        </p>
        <button
          @click="testEmailSystem"
          :disabled="loading"
          class="btn border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black mb-4"
        >
          <i class="fas fa-flask mr-2"></i>
          {{ loading ? 'Testing...' : 'Test Sistema Email' }}
        </button>
        
        <div v-if="testResult" class="bg-zinc-800 p-4 rounded-lg">
          <pre class="text-sm whitespace-pre-wrap">{{ testResult }}</pre>
        </div>
      </div>

      <!-- Ultime Richieste -->
      <div class="bg-zinc-900 rounded-lg p-6 mb-8">
        <h2 class="text-xl font-bold mb-4">📋 Ultime 10 Richieste di Contatto</h2>
        
        <div v-if="loading" class="text-center py-4">
          Caricamento...
        </div>
        
        <div v-else-if="recentRequests.length === 0" class="text-center py-4 text-zinc-400">
          Nessuna richiesta trovata nel database
        </div>
        
        <div v-else class="space-y-4">
          <div
            v-for="request in recentRequests"
            :key="request.id"
            class="bg-zinc-800 p-4 rounded-lg border border-zinc-700"
          >
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="font-bold text-lg">{{ request.name }} {{ request.surname || '' }}</h3>
                <p class="text-zinc-400">{{ request.email }}</p>
              </div>
              <div class="text-right">
                <span 
                  class="px-2 py-1 rounded text-xs font-medium"
                  :class="{
                    'bg-green-900 text-green-300': request.status === 'new',
                    'bg-yellow-900 text-yellow-300': request.status === 'in-progress',
                    'bg-purple-900 text-purple-300': request.status === 'completed'
                  }"
                >
                  {{ request.status.toUpperCase() }}
                </span>
                <p class="text-xs text-zinc-500 mt-1">
                  {{ new Date(request.created_at).toLocaleString('it-IT') }}
                </p>
              </div>
            </div>
            <p class="text-zinc-300 text-sm">{{ request.message }}</p>
            <div class="mt-2 text-xs text-zinc-500">
              ID: {{ request.id }}
            </div>
          </div>
        </div>
      </div>

      <!-- Log Email -->
      <div class="bg-zinc-900 rounded-lg p-6">
        <h2 class="text-xl font-bold mb-4">📧 Log Sistema Email (Ultimi 20)</h2>
        
        <div v-if="emailLogs.length === 0" class="text-center py-4">
          <div class="text-zinc-400 mb-2">Nessun log email trovato</div>
          <div class="text-sm text-zinc-500">
            La tabella email_logs potrebbe non esistere ancora o non ci sono stati tentativi di invio
          </div>
        </div>
        
        <div v-else class="space-y-3">
          <div
            v-for="log in emailLogs"
            :key="log.id"
            class="bg-zinc-800 p-3 rounded border border-zinc-700"
          >
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <span 
                  class="w-3 h-3 rounded-full"
                  :class="log.email_sent ? 'bg-green-500' : 'bg-red-500'"
                ></span>
                <span class="font-medium">
                  {{ log.email_sent ? '✅ Inviata' : '❌ Fallita' }}
                </span>
                <span class="text-sm text-zinc-400">
                  via {{ log.email_provider || 'Unknown' }}
                </span>
              </div>
              <span class="text-xs text-zinc-500">
                {{ new Date(log.sent_at).toLocaleString('it-IT') }}
              </span>
            </div>
            <div v-if="log.error_message" class="mt-2 text-sm text-zinc-400">
              {{ log.error_message }}
            </div>
            <div class="mt-1 text-xs text-zinc-600">
              Request ID: {{ log.contact_request_id }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
