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
    <div class="container mx-auto px-6 py-4">
      <div class="max-w-4xl mx-auto">
        <!-- Header compatto -->
        <div class="text-center mb-4">
          <h1 class="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p class="text-lg text-zinc-400 mt-1">Informativa sul trattamento dei dati personali</p>
        </div>

        <!-- Contenuto principale compatto -->
        <div class="bg-zinc-900/50 rounded-lg p-5">
          <!-- Sezione 1 -->
          <h2 class="text-xl font-bold text-red-500 mt-0 mb-2">1. Titolare del trattamento</h2>
          <div class="text-zinc-300 mb-4">
            <p><strong>Il Sorpasso di Lorenzo Basile</strong></p>
            <p>Via Suor Celestina Donati 90, 00167 Roma (RM)</p>
            <p>Email: ilsorpassodilorenzobasile@gmail.com</p>
            <p>Telefono: +39 347 395 2838</p>
          </div>

          <!-- Sezione 2 -->
          <h2 class="text-xl font-bold text-red-500 mb-2">2. Tipologie di dati raccolti</h2>
          <p class="text-zinc-300 mb-1">I dati personali raccolti tramite questo sito includono:</p>
          <ul class="text-zinc-300 mb-4 ml-4 list-disc">
            <li>Nome e cognome</li>
            <li>Indirizzo email</li>
            <li>Messaggio di contatto</li>
            <li>Data e ora di invio della richiesta</li>
          </ul>

          <!-- Sezione 3 -->
          <h2 class="text-xl font-bold text-red-500 mb-2">3. Finalità del trattamento</h2>
          <p class="text-zinc-300 mb-1">I dati vengono trattati per le seguenti finalità:</p>
          <ul class="text-zinc-300 mb-4 ml-4 list-disc">
            <li>Rispondere alle richieste di informazioni e preventivi</li>
            <li>Fornire assistenza clienti</li>
            <li>Gestire i rapporti commerciali</li>
          </ul>

          <!-- Sezione 4 -->
          <h2 class="text-xl font-bold text-red-500 mb-2">4. Base giuridica</h2>
          <p class="text-zinc-300 mb-4">Il trattamento è basato sul consenso dell'interessato (art. 6, par. 1, lett. a) del GDPR) rilasciato attraverso la compilazione del modulo di contatto.</p>

          <!-- Sezione 5 -->
          <h2 class="text-xl font-bold text-red-500 mb-2">5. Modalità di trattamento</h2>
          <p class="text-zinc-300 mb-2">I dati personali sono trattati con strumenti automatizzati per il tempo necessario a conseguire gli scopi per cui sono stati raccolti.</p>
          <p class="text-zinc-300 mb-4">I dati sono archiviati su server sicuri gestiti da Firebase (Google LLC) con sede negli Stati Uniti, che garantisce adeguate misure di sicurezza secondo gli standard internazionali.</p>

          <!-- Sezione 6 -->
          <h2 class="text-xl font-bold text-red-500 mb-2">6. Comunicazione e diffusione</h2>
          <p class="text-zinc-300 mb-4">I dati personali non sono diffusi e sono comunicati esclusivamente per le finalità sopra indicate. I dati possono essere trattati da collaboratori del titolare opportunamente istruiti.</p>

          <!-- Sezione 7 -->
          <h2 class="text-xl font-bold text-red-500 mb-2">7. Periodo di conservazione</h2>
          <p class="text-zinc-300 mb-4">I dati saranno conservati per il tempo necessario alla gestione della richiesta e per eventuali successive comunicazioni commerciali, salvo revoca del consenso.</p>

          <!-- Sezione 8 -->
          <h2 class="text-xl font-bold text-red-500 mb-2">8. Diritti dell'interessato</h2>
          <p class="text-zinc-300 mb-1">L'interessato ha il diritto di:</p>
          <ul class="text-zinc-300 mb-2 ml-4 list-disc">
            <li>Accedere ai propri dati personali</li>
            <li>Chiedere la rettifica o la cancellazione</li>
            <li>Limitare il trattamento</li>
            <li>Opporsi al trattamento</li>
            <li>Revocare il consenso in qualsiasi momento</li>
            <li>Proporre reclamo al Garante per la protezione dei dati personali</li>
          </ul>
          <p class="text-zinc-300 mb-4">Per esercitare i diritti, contattare: ilsorpassodilorenzobasile@gmail.com</p>

          <!-- Sezione 9 -->
          <h2 class="text-xl font-bold text-red-500 mb-2">9. Modifiche alla Privacy Policy</h2>
          <p class="text-zinc-300">La presente informativa può essere aggiornata periodicamente. Si consiglia di consultarla regolarmente. L'ultima modifica è del: <strong>Gennaio 2025</strong></p>
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