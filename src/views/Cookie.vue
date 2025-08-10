<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Cookie Policy - Il Sorpasso',
  meta: [
    { name: 'description', content: 'Informativa sui cookie di Il Sorpasso - Noleggio auto d\'epoca' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <div class="container mx-auto px-6 py-4">
      <div class="max-w-4xl mx-auto">
        <!-- Header compatto -->
        <div class="text-center mb-4">
          <h1 class="text-3xl md:text-4xl font-bold">Cookie Policy</h1>
          <p class="text-lg text-zinc-400 mt-1">Informativa sull'utilizzo dei cookie</p>
        </div>

        <!-- Contenuto principale compatto -->
        <div class="bg-zinc-900/50 rounded-lg p-5">
          <!-- Sezione 1 -->
          <h2 class="text-xl font-bold text-red-500 mt-0 mb-2">1. Cosa sono i cookie</h2>
          <p class="text-zinc-300 mb-4">I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente quando visita un sito web. Permettono al sito di ricordare le azioni e preferenze dell'utente per un certo periodo di tempo.</p>

          <!-- Sezione 2 -->
          <h2 class="text-xl font-bold text-red-500 mb-2">2. Tipologie di cookie utilizzati</h2>
          
          <h3 class="text-lg font-semibold text-red-400 mb-1">Cookie Tecnici Necessari</h3>
          <p class="text-zinc-300 mb-1">Essenziali per il funzionamento del sito web:</p>
          <ul class="text-zinc-300 mb-2 ml-4 list-disc">
            <li><strong>preferred-locale:</strong> Memorizza la lingua selezionata (IT/EN)</li>
            <li><strong>Firebase Session:</strong> Gestisce l'autenticazione dell'area admin</li>
          </ul>
          <p class="text-sm text-zinc-400 mb-3">Questi cookie non richiedono consenso secondo la normativa.</p>

          <h3 class="text-lg font-semibold text-red-400 mb-1">Cookie di Terze Parti</h3>
          <div class="mb-3">
            <h4 class="font-medium text-zinc-200">Firebase (Google)</h4>
            <p class="text-zinc-300 text-sm mb-1">Per l'archiviazione dei dati di contatto e l'autenticazione:</p>
            <ul class="text-zinc-300 text-sm ml-4 list-disc">
              <li>Durata: Sessione/persistenti</li>
              <li>Finalità: Funzionalità del sito e sicurezza</li>
              <li>Privacy Policy: <a href="https://policies.google.com/privacy" class="text-red-400 hover:underline" target="_blank">Google Privacy Policy</a></li>
            </ul>
          </div>

          <div class="mb-4">
            <h4 class="font-medium text-zinc-200">Vercel (Hosting)</h4>
            <p class="text-zinc-300 text-sm mb-1">Cookie tecnici per l'hosting e le prestazioni del sito:</p>
            <ul class="text-zinc-300 text-sm ml-4 list-disc">
              <li>Durata: Sessione</li>
              <li>Finalità: Ottimizzazione e sicurezza</li>
              <li>Privacy Policy: <a href="https://vercel.com/legal/privacy-policy" class="text-red-400 hover:underline" target="_blank">Vercel Privacy Policy</a></li>
            </ul>
          </div>

          <!-- Sezione 3 -->
          <h2 class="text-xl font-bold text-red-500 mb-2">3. Cookie non utilizzati</h2>
          <p class="text-zinc-300 mb-1">Questo sito <strong>NON</strong> utilizza:</p>
          <ul class="text-zinc-300 mb-4 ml-4 list-disc">
            <li>Cookie di profilazione o marketing</li>
            <li>Cookie di tracciamento per pubblicità</li>
            <li>Google Analytics o simili strumenti di analisi</li>
            <li>Social media plugin che tracciano gli utenti</li>
          </ul>

          <!-- Sezione 4 -->
          <h2 class="text-xl font-bold text-red-500 mb-2">4. Gestione dei cookie</h2>
          <p class="text-zinc-300 mb-2">Puoi controllare e/o verificare i cookie come vuoi – per maggiori dettagli, consulta <a href="https://www.aboutcookies.org" class="text-red-400 hover:underline" target="_blank">aboutcookies.org</a>.</p>
          <p class="text-zinc-300 mb-1"><strong>Disabilitazione dei cookie:</strong></p>
          <ul class="text-zinc-300 mb-2 ml-4 list-disc">
            <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
            <li><strong>Firefox:</strong> Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web</li>
            <li><strong>Safari:</strong> Preferenze → Privacy → Gestione dati dei siti web</li>
            <li><strong>Edge:</strong> Impostazioni → Cookie e autorizzazioni sito</li>
          </ul>
          <p class="text-amber-300 text-sm mb-4">⚠️ <strong>Nota:</strong> La disabilitazione di alcuni cookie potrebbe limitare la funzionalità del sito.</p>

          <!-- Sezione 5 -->
          <h2 class="text-xl font-bold text-red-500 mb-2">5. Aggiornamenti</h2>
          <p class="text-zinc-300 mb-1">La presente Cookie Policy può essere aggiornata periodicamente. Ti consigliamo di consultarla regolarmente.</p>
          <p class="text-zinc-300 mb-4"><strong>Ultimo aggiornamento:</strong> Gennaio 2025</p>

          <!-- Sezione 6 -->
          <h2 class="text-xl font-bold text-red-500 mb-2">6. Contatti</h2>
          <p class="text-zinc-300 mb-1">Per qualsiasi domanda riguardo questa Cookie Policy, contatta:</p>
          <div class="text-zinc-300">
            <strong>Il Sorpasso di Lorenzo Basile</strong><br>
            Email: ilsorpassodilorenzobasile@gmail.com<br>
            Telefono: +39 347 395 2838
          </div>
        </div>

        <!-- Pulsante torna alla home -->
        <div class="text-center mt-4">
          <router-link 
            to="/" 
            class="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors"
          >
            Torna alla Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>