# TODO: Aggiornamento Password Gmail per Firebase Functions

## Problema
La password Gmail utilizzata per l'invio delle email tramite Firebase Functions è scaduta e deve essere rigenerata.

---

## ✅ Passaggi da Completare

### [ ] 1. Generare Nuova App Password Gmail

1. Accedi a https://myaccount.google.com/apppasswords
2. Accedi con l'account: `ilsorpassodilorenzobasile@gmail.com`
3. Inserisci la password del tuo account Google se richiesto
4. Seleziona:
   - **App:** Mail
   - **Dispositivo:** Altro (nome personalizzato)
5. Nome da inserire: `Firebase Functions Il Sorpasso`
6. Clicca su **"Genera"**
7. **COPIA** la password di 16 caratteri generata (formato: `xxxx xxxx xxxx xxxx`)
8. **Rimuovi gli spazi** dalla password: `xxxxxxxxxxxxxxxx`

**⚠️ IMPORTANTE:** Salva la password in un posto sicuro, non sarà più visualizzabile!

---

### [ ] 2. Configurare Credenziali in Firebase Functions

Apri il terminale nella directory del progetto ed esegui:

```bash
firebase functions:config:set gmail.email="ilsorpassodilorenzobasile@gmail.com" gmail.pass="LA_TUA_APP_PASSWORD"
```

**Sostituisci** `LA_TUA_APP_PASSWORD` con la password generata al punto 1 (senza spazi).

---

### [ ] 3. Verificare la Configurazione (Opzionale)

Per verificare che la configurazione sia stata salvata correttamente:

```bash
firebase functions:config:get
```

Dovresti vedere:

```json
{
  "gmail": {
    "email": "ilsorpassodilorenzobasile@gmail.com",
    "pass": "****************"
  }
}
```

---

### [ ] 4. Build e Deploy Firebase Functions

Esegui i seguenti comandi:

```bash
cd functions
npm run build
npm run deploy
```

Oppure in un solo comando:

```bash
cd functions && npm run deploy
```

**Tempo stimato:** 2-5 minuti

---

### [ ] 5. Testare l'Invio Email

Dopo il deploy, testa che le email vengano inviate correttamente:

**Opzione A - Form Contatti sul Sito:**
1. Vai sul sito live (Vercel)
2. Compila il form contatti
3. Invia il messaggio
4. Verifica che l'email arrivi a `ilsorpassodilorenzobasile@gmail.com`

**Opzione B - Admin Email Debug:**
1. Vai su `/admin/login`
2. Accedi con `fracabu@gmail.com`
3. Vai su `/admin/email-debug`
4. Usa la funzione di test
5. Verifica che l'email arrivi

**Opzione C - Verifica Log Firebase:**
```bash
cd functions
npm run logs
```

Cerca messaggi come:
- `Email inviata a ilsorpassodilorenzobasile@gmail.com`
- Oppure errori di autenticazione SMTP

---

## 📋 Checklist Finale

- [ ] App Password Gmail generata
- [ ] Configurazione Firebase aggiornata
- [ ] Functions ridepployate con successo
- [ ] Email di test ricevuta correttamente
- [ ] Nessun errore nei log Firebase

---

## 🔗 Risorse Utili

- **Progetto Firebase:** `sorpasso-edc98`
- **Email destinataria:** `ilsorpassodilorenzobasile@gmail.com`
- **Region Functions:** `europe-west1`
- **Guide create:**
  - `GUIDA_CLIENTE_APP_PASSWORD.md`
  - `EMAIL_TROUBLESHOOTING.md`
  - `SETUP_PASSWORD_RICEVUTA.md`

---

## ⚠️ Troubleshooting

**Errore: "Invalid login credentials"**
- La App Password non è corretta
- Rigenerare la App Password dal punto 1

**Errore: "Firebase CLI not authenticated"**
```bash
firebase login
```

**Le email non arrivano dopo il deploy:**
- Controlla i log: `cd functions && npm run logs`
- Verifica che la configurazione sia corretta: `firebase functions:config:get`
- Attendi 5-10 minuti per la propagazione

---

## 📅 Data Creazione
2025-11-13

## 🎯 Completato il
_Da compilare quando tutti i passaggi sono completati_
