# Il Sorpasso – Landing Page & Contact App

Una landing page promozionale per il servizio di noleggio auto “Il Sorpasso”, con form di contatto integrato che invia automaticamente le richieste alla mail di Lorenzo via Firebase Functions.

---

## 📦 Caratteristiche

- **Frontend Vue 3 + Vite + TailwindCSS**  
  Landing page one-page responsive con sezioni “Hero”, “Servizi”, “Gallery”, “Contatti” e **Floating WhatsApp** per chat immediata.

- **Localizzazione multilingua** (vue-i18n)  
  Gestione testi in italiano e inglese (puoi estendere a nuove lingue).

- **Form di contatto**  
  Scrive i dati in Firestore e, grazie a una Cloud Function `sendContactEmail`, invia subito una mail a Lorenzo con nome, cognome, email e messaggio.

- **Backup section Admin** (facoltativo)  
  Pannello protetto per visualizzare tutte le richieste ricevute (se serve, da riattivare in futuro).

---

## 🚀 Setup locale

1. **Clona il repo**  
   ```bash
   git clone git@github.com:tuoutente/sorpasso.git
   cd sorpasso
