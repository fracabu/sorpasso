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
    <div class="container mx-auto px-4 py-20">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p class="text-xl text-zinc-400">Informativa sull'utilizzo dei cookie</p>
        </div>

        <div class="bg-zinc-900/50 rounded-2xl p-8 space-y-4">
          <section class="border border-blue-500/30 p-4 rounded">
            <h2 class="text-2xl font-bold text-red-500 mb-4">1. Cosa sono i cookie</h2>
            <div class="text-zinc-300">
              <p>I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente quando visita un sito web. Permettono al sito di ricordare le azioni e preferenze dell'utente per un certo periodo di tempo.</p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-red-500 mb-4">2. Tipologie di cookie utilizzati</h2>
            <div class="text-zinc-300 space-y-3">
              
              <div>
                <h3 class="text-lg font-semibold text-red-400 mb-2">Cookie Tecnici Necessari</h3>
                <p>Essenziali per il funzionamento del sito web:</p>
                <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><strong>preferred-locale:</strong> Memorizza la lingua selezionata (IT/EN)</li>
                  <li><strong>Firebase Session:</strong> Gestisce l'autenticazione dell'area admin</li>
                </ul>
                <p class="text-sm text-zinc-400 mt-2">Questi cookie non richiedono consenso secondo la normativa.</p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-red-400 mb-2">Cookie di Terze Parti</h3>
                <div class="space-y-3">
                  <div>
                    <h4 class="font-medium text-zinc-200">Firebase (Google)</h4>
                    <p>Per l'archiviazione dei dati di contatto e l'autenticazione:</p>
                    <ul class="list-disc list-inside ml-4 mt-1 text-sm">
                      <li>Durata: Sessione/persistenti</li>
                      <li>Finalità: Funzionalità del sito e sicurezza</li>
                      <li>Privacy Policy: <a href="https://policies.google.com/privacy" class="text-red-400 hover:underline" target="_blank">Google Privacy Policy</a></li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="font-medium text-zinc-200">Vercel (Hosting)</h4>
                    <p>Cookie tecnici per l'hosting e le prestazioni del sito:</p>
                    <ul class="list-disc list-inside ml-4 mt-1 text-sm">
                      <li>Durata: Sessione</li>
                      <li>Finalità: Ottimizzazione e sicurezza</li>
                      <li>Privacy Policy: <a href="https://vercel.com/legal/privacy-policy" class="text-red-400 hover:underline" target="_blank">Vercel Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-red-500 mb-4">3. Cookie non utilizzati</h2>
            <div class="text-zinc-300">
              <p>Questo sito <strong>NON</strong> utilizza:</p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Cookie di profilazione o marketing</li>
                <li>Cookie di tracciamento per pubblicità</li>
                <li>Google Analytics o simili strumenti di analisi</li>
                <li>Social media plugin che tracciano gli utenti</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-red-500 mb-4">4. Gestione dei cookie</h2>
            <div class="text-zinc-300 space-y-3">
              <p>Puoi controllare e/o verificare i cookie come vuoi – per maggiori dettagli, consulta <a href="https://www.aboutcookies.org" class="text-red-400 hover:underline" target="_blank">aboutcookies.org</a>.</p>
              
              <p><strong>Disabilitazione dei cookie:</strong></p>
              <ul class="list-disc list-inside ml-4 space-y-1">
                <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
                <li><strong>Firefox:</strong> Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web</li>
                <li><strong>Safari:</strong> Preferenze → Privacy → Gestione dati dei siti web</li>
                <li><strong>Edge:</strong> Impostazioni → Cookie e autorizzazioni sito</li>
              </ul>
              
              <p class="text-amber-300 text-sm mt-3">⚠️ <strong>Nota:</strong> La disabilitazione di alcuni cookie potrebbe limitare la funzionalità del sito, come la selezione della lingua o l'accesso all'area admin.</p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-red-500 mb-4">5. Aggiornamenti</h2>
            <div class="text-zinc-300">
              <p>La presente Cookie Policy può essere aggiornata periodicamente per riflettere eventuali modifiche nel nostro utilizzo dei cookie. Ti consigliamo di consultarla regolarmente.</p>
              <p class="mt-2"><strong>Ultimo aggiornamento:</strong> Gennaio 2025</p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-red-500 mb-4">6. Contatti</h2>
            <div class="text-zinc-300">
              <p>Per qualsiasi domanda riguardo questa Cookie Policy, contatta:</p>
              <p class="mt-2">
                <strong>Il Sorpasso di Lorenzo Basile</strong><br>
                Email: ilsorpassodilorenzobasile@gmail.com<br>
                Telefono: +39 347 395 2838
              </p>
            </div>
          </section>
        </div>

        <div class="text-center mt-8">
          <router-link 
            to="/" 
            class="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Torna alla Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>