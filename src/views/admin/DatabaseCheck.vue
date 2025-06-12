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

// reactive state
const latestRequests = ref<any[]>([])
const emailLogs       = ref<any[]>([])
const loading         = ref(true)
const statusFilter    = ref('all')
const searchQuery     = ref('')

// riepilogo stato
const systemStatus = ref({
  totalRequests: 0,
  todayRequests: 0,
  emailsSent: 0,
  emailsFailed: 0,
  lastRequest: null as any
})

async function checkDatabaseStatus() {
  loading.value = true
  try {
    // 1) Preleva ultime 10 richieste
    const reqSnap = await getDocs(
      query(
        collection(db, 'contact_requests'),
        orderBy('created_at', 'desc'),
        limit(10)
      )
    )
    let requests = reqSnap.docs.map(d => {
      const data = d.data()
      return {
        id: d.id,
        name: data.name,
        surname: data.surname,
        email: data.email,
        message: data.message,
        status: data.status,
        privacy_accepted: data.privacy_accepted,
        created_at: data.created_at,
      }
    })

    // Filtri client-side
    if (statusFilter.value !== 'all') {
      requests = requests.filter(r => r.status === statusFilter.value)
    }
    if (searchQuery.value) {
      const term = searchQuery.value.toLowerCase()
      requests = requests.filter(r =>
        r.name.toLowerCase().includes(term) ||
        r.email.toLowerCase().includes(term)
      )
    }
    latestRequests.value = requests

    // 2) Preleva ultimi 20 log email
    const logSnap = await getDocs(
      query(
        collection(db, 'email_logs'),
        orderBy('sent_at', 'desc'),
        limit(20)
      )
    )
    const logs = logSnap.docs.map(d => ({ id: d.id, ...(d.data() as any) }))
    emailLogs.value = logs

    // 3) Calcola le statistiche
    const todayStr = new Date().toDateString()
    const total    = requests.length
    const todayCnt = requests.filter(r =>
      new Date(r.created_at?.toDate?.()?.toDateString() || r.created_at).toDateString() === todayStr
    ).length
    const sent     = logs.filter(l => l.email_sent).length
    const failed   = logs.filter(l => !l.email_sent).length

    systemStatus.value = {
      totalRequests: total,
      todayRequests: todayCnt,
      emailsSent:    sent,
      emailsFailed:  failed,
      lastRequest:   requests[0] || null
    }
  } catch (err: any) {
    console.error('Errore nel check del database:', err)
  } finally {
    loading.value = false
  }
}

async function testEmailSystem() {
  loading.value = true
  try {
    const docRef = await addDoc(
      collection(db, 'contact_requests'),
      {
        name:             'Test Sistema',
        surname:          'Database',
        email:            'test@ilsorpasso.it',
        message:          `Test del sistema email automatico — ${new Date().toLocaleString('it-IT')}`,
        status:           'new',
        privacy_accepted: true,
        created_at:       serverTimestamp()
      }
    )
    alert(
      `✅ Test inserito nel database!\nID: ${docRef.id}\n` +
      `Se il trigger SQL funziona, Lorenzo riceverà un'email entro 1 minuto.`
    )
    await checkDatabaseStatus()
  } catch (err: any) {
    console.error('Errore nel test email:', err)
    alert(`❌ Errore nel test: ${err.message}`)
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

onMounted(checkDatabaseStatus)
</script>

<template>
  <div class="min-h-screen bg-black text-white p-4">
    <!-- Top Bar -->
    <div class="flex justify-between items-center mb-8">
      <div class="flex items-center space-x-4">
        <router-link to="/" class="btn-primary">
          <i class="fas fa-home mr-2"></i> Home
        </router-link>
        <button @click="goToDashboard"
                class="btn border border-accent text-accent hover:bg-accent hover:text-white">
          <i class="fas fa-list mr-2"></i> Dashboard
        </button>
      </div>
      <button @click="logout"
              class="btn border border-accent text-accent hover:bg-accent hover:text-white">
        Logout
      </button>
    </div>

    <div class="container mx-auto max-w-6xl">
      <h1 class="text-3xl font-bold mb-8">🔍 Verifica Database e Sistema Email</h1>

      <!-- Stato Sistema -->
      <div class="bg-green-900/30 border border-green-500/50 rounded-lg p-6 mb-8">
        <h2 class="text-xl font-bold mb-4 text-green-200">📊 Stato del Sistema</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-zinc-800 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-blue-400">{{ systemStatus.totalRequests }}</div>
            <div class="text-sm text-zinc-400">Richieste Totali</div>
          </div>
          <div class="bg-zinc-800 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-green-400">{{ systemStatus.todayRequests }}</div>
            <div class="text-sm text-zinc-400">Oggi</div>
          </div>
          <div class="bg-zinc-800 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-green-400">{{ systemStatus.emailsSent }}</div>
            <div class="text-sm text-zinc-400">Email Inviate</div>
          </div>
          <div class="bg-zinc-800 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-red-400">{{ systemStatus.emailsFailed }}</div>
            <div class="text-sm text-zinc-400">Email Fallite</div>
          </div>
        </div>
      </div>

      <!-- Test Sistema -->
      <div class="bg-blue-900/30 border border-blue-500/50 rounded-lg p-6 mb-8">
        <h2 class="text-xl font-bold mb-4 text-blue-200">🧪 Test Sistema Email</h2>
        <p class="text-blue-300 mb-4">
          Clicca per inserire una richiesta di test e verificare che Lorenzo riceva l'email.
        </p>
        <button
          @click="testEmailSystem"
          :disabled="loading"
          class="btn border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
        >
          <i class="fas fa-flask mr-2"></i>
          {{ loading ? 'Testing...' : 'Test Sistema Email' }}
        </button>
      </div>

      <!-- Ultime Richieste -->
      <div class="bg-zinc-900 rounded-lg p-6 mb-8">
        <h2 class="text-xl font-bold mb-4">📋 Ultime 10 Richieste di Contatto</h2>
        <div v-if="loading" class="text-center py-4">Caricamento...</div>
        <div v-else-if="latestRequests.length === 0"
             class="text-center py-4 text-zinc-400">
          Nessuna richiesta trovata nel database
        </div>
        <div v-else class="space-y-4">
          <div v-for="r in latestRequests" :key="r.id"
               class="bg-zinc-800 p-4 rounded-lg border border-zinc-700">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="font-bold text-lg">{{ r.name }} {{ r.surname || '' }}</h3>
                <p class="text-zinc-400">{{ r.email }}</p>
              </div>
              <div class="text-right">
                <span
                  class="px-2 py-1 rounded text-xs font-medium"
                  :class="{
                    'bg-green-900 text-green-300':  r.status === 'new',
                    'bg-yellow-900 text-yellow-300': r.status === 'in-progress',
                    'bg-purple-900 text-purple-300': r.status === 'completed'
                  }"
                >
                  {{ r.status.toUpperCase() }}
                </span>
                <p class="text-xs text-zinc-500 mt-1">
                  {{ new Date(r.created_at.toDate?.() || r.created_at).toLocaleString('it-IT') }}
                </p>
              </div>
            </div>
            <p class="text-zinc-300 text-sm">{{ r.message }}</p>
            <div class="mt-2 text-xs text-zinc-500">ID: {{ r.id }}</div>
          </div>
        </div>
      </div>

      <!-- Log Email -->
      <div class="bg-zinc-900 rounded-lg p-6">
        <h2 class="text-xl font-bold mb-4">📧 Log Sistema Email (Ultimi 20)</h2>
        <div v-if="emailLogs.length === 0" class="text-center py-4">
          <div class="text-zinc-400 mb-2">Nessun log email trovato</div>
          <div class="text-sm text-zinc-500">
            La tabella email_logs potrebbe non esistere o non ci sono tentativi
          </div>
        </div>
        <div v-else class="space-y-3">
          <div v-for="log in emailLogs" :key="log.id"
               class="bg-zinc-800 p-3 rounded border border-zinc-700">
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <span class="w-3 h-3 rounded-full"
                      :class="log.email_sent ? 'bg-green-500' : 'bg-red-500'"></span>
                <span class="font-medium">
                  {{ log.email_sent ? '✅ Inviata' : '❌ Fallita' }}
                </span>
                <span class="text-sm text-zinc-400">
                  via {{ log.email_provider || 'Unknown' }}
                </span>
              </div>
              <span class="text-xs text-zinc-500">
                {{ new Date(log.sent_at.toDate?.() || log.sent_at).toLocaleString('it-IT') }}
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
