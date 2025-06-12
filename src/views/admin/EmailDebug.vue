<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { db, auth } from '@/firebaseConfig'
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp
} from 'firebase/firestore'
import { signOut } from 'firebase/auth'

const router = useRouter()
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
    // Ultime 10 richieste
    const reqQ = query(
      collection(db, 'contact_requests'),
      orderBy('created_at', 'desc'),
      limit(10)
    )
    const reqSnap = await getDocs(reqQ)
    recentRequests.value = reqSnap.docs.map(d => ({ id: d.id, ...d.data() }))
    systemStatus.value.totalRequests = recentRequests.value.length

    // Ultimi 20 log email
    const logQ = query(
      collection(db, 'email_logs'),
      orderBy('sent_at', 'desc'),
      limit(20)
    )
    const logSnap = await getDocs(logQ)
    emailLogs.value = logSnap.docs.map(d => ({ id: d.id, ...d.data() }))
    systemStatus.value.logCount = emailLogs.value.length
    systemStatus.value.emailsSent = emailLogs.value.filter(l => l.email_sent).length
    systemStatus.value.emailsFailed = emailLogs.value.filter(l => !l.email_sent).length
  } catch (err: any) {
    console.error('Errore nel recupero dati Firestore:', err)
  } finally {
    loading.value = false
  }
}

async function testEmailSystem() {
  loading.value = true
  testResult.value = 'Invio test in corso...'
  try {
    // Prepara dati di test
    const testData = {
      name: 'Test Sistema Email',
      surname: 'Debug',
      email: 'test@ilsorpasso.debug',
      message: `Test del sistema email automatico — ${new Date().toLocaleString('it-IT')}`,
      status: 'new',
      privacy_accepted: true,
      created_at: serverTimestamp()
    }
    // Inserisci in Firestore
    const docRef = await addDoc(collection(db, 'contact_requests'), testData)
    testResult.value = `✅ Test inserito con ID: ${docRef.id}
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
    await signOut(auth)
    router.push('/admin/login')
  } catch (err) {
    console.error('Errore logout Firebase:', err)
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
                  {{ new Date(request.created_at.seconds * 1000).toLocaleString('it-IT') }}
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
                {{ new Date(log.sent_at.seconds * 1000).toLocaleString('it-IT') }}
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
