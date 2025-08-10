<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Privacy Policy - Il Sorpasso',
  meta: [
    { name: 'description', content: 'Informativa sulla privacy di Il Sorpasso - Noleggio auto d\'epoca' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <div class="container mx-auto px-4 py-20">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p class="text-xl text-zinc-400">Informativa sul trattamento dei dati personali</p>
        </div>

        <div class="bg-zinc-900/50 rounded-2xl p-8 space-y-4">
          <section>
            <h2 class="text-2xl font-bold text-red-500 mb-4">1. Titolare del trattamento</h2>
            <div class="text-zinc-300 space-y-2">
              <p><strong>Il Sorpasso di Lorenzo Basile</strong></p>
              <p>Via Suor Celestina Donati 90, 00167 Roma (RM)</p>
              <p>Email: ilsorpassodilorenzobasile@gmail.com</p>
              <p>Telefono: +39 347 395 2838</p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-red-500 mb-4">2. Tipologie di dati raccolti</h2>
            <div class="text-zinc-300 space-y-3">
              <p>I dati personali raccolti tramite questo sito includono:</p>
              <ul class="list-disc list-inside ml-4 space-y-1">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Messaggio di contatto</li>
                <li>Data e ora di invio della richiesta</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-red-500 mb-4">3. Finalità del trattamento</h2>
            <div class="text-zinc-300 space-y-3">
              <p>I dati vengono trattati per le seguenti finalità:</p>
              <ul class="list-disc list-inside ml-4 space-y-1">
                <li>Rispondere alle richieste di informazioni e preventivi</li>
                <li>Fornire assistenza clienti</li>
                <li>Gestire i rapporti commerciali</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-red-500 mb-4">4. Base giuridica</h2>
            <div class="text-zinc-300">
              <p>Il trattamento è basato sul consenso dell'interessato (art. 6, par. 1, lett. a) del GDPR) rilasciato attraverso la compilazione del modulo di contatto.</p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-red-500 mb-4">5. Modalità di trattamento</h2>
            <div class="text-zinc-300 space-y-3">
              <p>I dati personali sono trattati con strumenti automatizzati per il tempo necessario a conseguire gli scopi per cui sono stati raccolti.</p>
              <p>I dati sono archiviati su server sicuri gestiti da Firebase (Google LLC) con sede negli Stati Uniti, che garantisce adeguate misure di sicurezza secondo gli standard internazionali.</p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-red-500 mb-4">6. Comunicazione e diffusione</h2>
            <div class="text-zinc-300">
              <p>I dati personali non sono diffusi e sono comunicati esclusivamente per le finalità sopra indicate. I dati possono essere trattati da collaboratori del titolare opportunamente istruiti.</p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-red-500 mb-4">7. Periodo di conservazione</h2>
            <div class="text-zinc-300">
              <p>I dati saranno conservati per il tempo necessario alla gestione della richiesta e per eventuali successive comunicazioni commerciali, salvo revoca del consenso.</p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-red-500 mb-4">8. Diritti dell'interessato</h2>
            <div class="text-zinc-300 space-y-3">
              <p>L'interessato ha il diritto di:</p>
              <ul class="list-disc list-inside ml-4 space-y-1">
                <li>Accedere ai propri dati personali</li>
                <li>Chiedere la rettifica o la cancellazione</li>
                <li>Limitare il trattamento</li>
                <li>Opporsi al trattamento</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Proporre reclamo al Garante per la protezione dei dati personali</li>
              </ul>
              <p class="mt-4">Per esercitare i diritti, contattare: ilsorpassodilorenzobasile@gmail.com</p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-red-500 mb-4">9. Modifiche alla Privacy Policy</h2>
            <div class="text-zinc-300">
              <p>La presente informativa può essere aggiornata periodicamente. Si consiglia di consultarla regolarmente. L'ultima modifica è del: <strong>Gennaio 2025</strong></p>
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