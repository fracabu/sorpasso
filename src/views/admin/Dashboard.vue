<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { db, auth } from '@/firebaseConfig'
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp
} from 'firebase/firestore'
import { signOut } from 'firebase/auth'

const router = useRouter()

// reactive state
const requests = ref<any[]>([])
const loading = ref(true)
const statusFilter = ref('all')
const searchQuery = ref('')

// statistiche
const stats = ref({
  total: 0,
  new: 0,
  inProgress: 0,
  completed: 0,
  todayCount: 0
})

async function fetchRequests() {
  loading.value = true
  try {
    // prendo tutte le richieste, ordinate per data
    const q = query(
      collection(db, 'contact_requests'),
      orderBy('created_at', 'desc')
    )
    const snap = await getDocs(q)
    let data = snap.docs.map(d => {
      const item = d.data() as any
      return { id: d.id, ...item }
    })

    // filtro per stato
    if (statusFilter.value !== 'all') {
      data = data.filter(r => r.status === statusFilter.value)
    }
    // filtro per ricerca (nome o email)
    if (searchQuery.value) {
      const term = searchQuery.value.toLowerCase()
      data = data.filter(r =>
        r.name.toLowerCase().includes(term) ||
        r.email.toLowerCase().includes(term)
      )
    }

    requests.value = data

    // calcolo statistiche
    const todayStr = new Date().toDateString()
    stats.value.total = data.length
    stats.value.new = data.filter(r => r.status === 'new').length
    stats.value.inProgress = data.filter(r => r.status === 'in-progress').length
    stats.value.completed = data.filter(r => r.status === 'completed').length
    stats.value.todayCount = data.filter(r => {
      const created = r.created_at?.toDate
        ? r.created_at.toDate().toDateString()
        : new Date(r.created_at).toDateString()
      return created === todayStr
    }).length

  } catch (err) {
    console.error('Errore nel recupero richieste:', err)
  } finally {
    loading.value = false
  }
}

async function updateStatus(id: string, status: string) {
  try {
    const refDoc = doc(db, 'contact_requests', id)
    await updateDoc(refDoc, {
      status,
      updated_at: serverTimestamp()
    })
    await fetchRequests()
  } catch (err) {
    console.error('Errore aggiornamento status:', err)
  }
}

async function deleteRequest(id: string) {
  if (!confirm('Sei sicuro di voler eliminare questa richiesta?')) return
  try {
    await deleteDoc(doc(db, 'contact_requests', id))
    await fetchRequests()
  } catch (err) {
    console.error('Errore eliminazione richiesta:', err)
  }
}

function goToDatabaseCheck() {
  router.push('/admin/database-check')
}
function goToEmailDebug() {
  router.push('/admin/email-debug')
}

async function logout() {
  try {
    await signOut(auth)
    router.push('/admin/login')
  } catch (err) {
    console.error('Errore logout Firebase:', err)
  }
}

// inizializzo al montaggio
onMounted(fetchRequests)
</script>

<template>
  <div class="min-h-screen bg-black text-white p-4">
    <!-- Top Bar -->
    <div class="flex justify-between items-center mb-8">
      <div class="flex items-center space-x-4">
        <router-link to="/" class="btn-primary">
          <i class="fas fa-home mr-2"></i> Home
        </router-link>
        <button @click="goToDatabaseCheck" class="btn border border-green-500 text-green-400 hover:bg-green-500 hover:text-black">
          <i class="fas fa-database mr-2"></i> Verifica DB
        </button>
        <button @click="goToEmailDebug" class="btn border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black">
          <i class="fas fa-bug mr-2"></i> Debug Email
        </button>
      </div>
      <button @click="logout" class="btn border border-accent text-accent hover:bg-accent hover:text-white">
        Logout
      </button>
    </div>

    <div class="container mx-auto max-w-6xl">
      <h1 class="text-2xl font-bold mb-8">Gestione Richieste di Contatto</h1>

      <!-- Info Sistema Email -->
      <div class="bg-green-900/30 border border-green-500/50 rounded-lg p-6 mb-8">
        <h2 class="text-xl font-bold mb-4 text-green-200"><i class="fas fa-envelope mr-2"></i> Sistema Email Automatico</h2>
        <div class="text-green-300 space-y-2">
          <p><strong>✅ Configurazione:</strong> Email a <strong>ilsorpassodilorenzobasile@gmail.com</strong> ad ogni richiesta.</p>
          <p><strong>🔧 Funzionamento:</strong> Trigger SQL + pg_net + Resend API.</p>
          <p><strong>📧 Cosa ricevi:</strong> Dettagli contatto e pulsante per rispondere.</p>
        </div>
      </div>

      <!-- Statistiche -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div class="bg-zinc-900 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-blue-400">{{ stats.total }}</div>
          <div class="text-sm text-zinc-400">Totali</div>
        </div>
        <div class="bg-zinc-900 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-green-400">{{ stats.new }}</div>
          <div class="text-sm text-zinc-400">Nuove</div>
        </div>
        <div class="bg-zinc-900 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-yellow-400">{{ stats.inProgress }}</div>
          <div class="text-sm text-zinc-400">In Corso</div>
        </div>
        <div class="bg-zinc-900 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-purple-400">{{ stats.completed }}</div>
          <div class="text-sm text-zinc-400">Completate</div>
        </div>
        <div class="bg-zinc-900 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-accent">{{ stats.todayCount }}</div>
          <div class="text-sm text-zinc-400">Oggi</div>
        </div>
      </div>

      <!-- Filtri -->
      <div class="mb-8 flex flex-col sm:flex-row gap-4">
        <input
          v-model="searchQuery"
          @input="fetchRequests"
          type="text"
          placeholder="Cerca per nome o email..."
          class="flex-1 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-accent focus:outline-none"
        />
        <select
          v-model="statusFilter"
          @change="fetchRequests"
          class="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-accent focus:outline-none"
        >
          <option value="all">Tutti gli stati</option>
          <option value="new">Nuovo</option>
          <option value="in-progress">In Lavorazione</option>
          <option value="completed">Completato</option>
        </select>
      </div>

      <!-- Lista Richieste -->
      <div v-if="loading" class="text-center py-8">Caricamento...</div>
      <div v-else-if="requests.length === 0" class="text-center py-8">Nessuna richiesta trovata.</div>
      <div v-else class="grid gap-6">
        <div
          v-for="r in requests"
          :key="r.id"
          class="bg-zinc-900 border border-zinc-800 rounded-lg p-6"
        >
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-bold">{{ r.name }} {{ r.surname || '' }}</h3>
              <div class="flex items-center gap-2 mt-1">
                <p class="text-zinc-400">{{ r.email }}</p>
                <a
                  :href="`mailto:${r.email}?subject=Re: Richiesta di contatto - Il Sorpasso`"
                  class="text-blue-400 hover:text-blue-300 text-sm"
                >
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
              <div class="mt-2">
                <span
                  class="px-2 py-1 rounded text-xs font-medium"
                  :class="{
                    'bg-green-900 text-green-300': r.status === 'new',
                    'bg-yellow-900 text-yellow-300': r.status === 'in-progress',
                    'bg-purple-900 text-purple-300': r.status === 'completed'
                  }"
                >
                  {{ r.status === 'new' ? 'NUOVO' : r.status === 'in-progress' ? 'IN CORSO' : 'COMPLETATO' }}
                </span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <select
                v-model="r.status"
                @change="updateStatus(r.id, r.status)"
                class="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-accent focus:outline-none"
              >
                <option value="new">Nuovo</option>
                <option value="in-progress">In Lavorazione</option>
                <option value="completed">Completato</option>
              </select>
              <button
                @click="deleteRequest(r.id)"
                class="text-red-500 hover:text-red-400 p-1"
                title="Elimina"
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
          <p class="text-zinc-300 mb-4">{{ r.message }}</p>
          <div class="text-sm text-zinc-500">
            Creato il: {{ new Date(r.created_at?.toDate?.().getTime() || r.created_at).toLocaleString('it-IT') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
