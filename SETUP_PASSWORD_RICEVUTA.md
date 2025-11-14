# Setup Password Email - Guida Rapida

## 📨 Cosa fare quando ricevi la password dal cliente

Una volta che il cliente ti invia la App Password di Gmail, segui questi passaggi:

---

## 🔐 Passo 1: Fai il login su Firebase

Apri un terminale nel progetto e autenticati:

```bash
firebase login --reauth
```

Questo aprirà il browser per il login Google.

---

## ⚙️ Passo 2: Configura la password nelle Firebase Functions

Una volta loggato, imposta la configurazione con l'email del cliente e la password ricevuta:

```bash
firebase functions:config:set gmail.email="ilsorpassodilorenzobasile@gmail.com" gmail.pass="LA-PASSWORD-RICEVUTA"
```

**Esempio:**
```bash
firebase functions:config:set gmail.email="ilsorpassodilorenzobasile@gmail.com" gmail.pass="abcd efgh ijkl mnop"
```

⚠️ **Attenzione**: Copia la password ESATTAMENTE come la ricevi, con gli spazi se ci sono.

---

## ✅ Passo 3: Verifica la configurazione

Controlla che sia stata salvata correttamente:

```bash
firebase functions:config:get
```

**Output atteso:**
```json
{
  "gmail": {
    "email": "ilsorpassodilorenzobasile@gmail.com",
    "pass": "abcd efgh ijkl mnop"
  }
}
```

---

## 🚀 Passo 4: Deploy delle Functions

Ora fai il deploy delle Firebase Functions con la nuova configurazione:

```bash
cd functions
firebase deploy --only functions
```

Oppure:

```bash
cd functions
npm run deploy
```

Attendi che il deploy sia completato (2-3 minuti).

---

## 🧪 Passo 5: Test del Form

### Test in locale:

1. Avvia il dev server:
   ```bash
   npm run dev
   ```

2. Vai su: http://localhost:5173/contatti

3. Compila e invia il form con dati di test

4. Verifica che l'email arrivi a: **ilsorpassodilorenzobasile@gmail.com**

### Test in produzione:

Se hai anche deployato il frontend su Firebase Hosting:
```bash
firebase deploy --only hosting
```

Poi testa su: https://sorpasso-edc98.web.app/contatti

---

## ✅ Conferma al cliente

Una volta verificato che le email funzionano:

1. Invia un messaggio al cliente:
   ```
   ✅ Password configurata con successo!
   Il form di contatto ora funziona correttamente.
   Puoi cancellare il messaggio con la password.
   ```

2. Chiedi al cliente di **cancellare** il messaggio con la password per sicurezza

---

## 🔍 Troubleshooting

### Se le email non arrivano:

1. **Controlla i logs delle Functions:**
   ```bash
   cd functions
   firebase functions:log
   ```

2. **Verifica che la Function sia attiva:**
   - Vai su https://console.firebase.google.com/
   - Seleziona il progetto
   - Functions > Verifica che `sendContactEmail` sia presente

3. **Verifica Firestore:**
   - Firestore Database > Collezione `contact_requests`
   - Controlla se ci sono nuovi documenti dopo il test

### Se vedi errori di autenticazione:

- La password potrebbe essere stata copiata male (caratteri mancanti o extra)
- Richiedi al cliente di generare una nuova password
- Verifica che non ci siano spazi extra all'inizio o alla fine

### Errore "Invalid login: 535-5.7.8"

Significa che:
- Email o password errate
- Devi rigenerare la App Password
- L'account potrebbe avere la verifica in 2 passaggi disattivata

---

## 📝 Comandi Rapidi di Riferimento

```bash
# Login Firebase
firebase login --reauth

# Configurare email
firebase functions:config:set gmail.email="EMAIL" gmail.pass="PASSWORD"

# Vedere configurazione
firebase functions:config:get

# Deploy functions
cd functions && firebase deploy --only functions

# Vedere logs
cd functions && firebase functions:log

# Deploy tutto
firebase deploy
```

---

## 🎯 Checklist

- [ ] Firebase login effettuato
- [ ] Password configurata con `functions:config:set`
- [ ] Configurazione verificata con `functions:config:get`
- [ ] Deploy completato
- [ ] Test form in locale funziona
- [ ] Email ricevuta dal cliente
- [ ] Confermato al cliente
- [ ] Cliente ha cancellato la password dai messaggi

---

**File correlati:**
- `GUIDA_CLIENTE_APP_PASSWORD.md` - Guida da inviare al cliente
- `EMAIL_TROUBLESHOOTING.md` - Guida completa troubleshooting
- `functions/src/index.ts` - Codice della Function
