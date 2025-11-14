# Guida Troubleshooting Email Firebase

## Problema
Le email dal form di contatto non vengono più inviate. Possibili cause:
- Credenziali Firebase CLI scadute
- App Password Gmail scaduta o revocata
- Configurazione Firebase Functions mancante

## 🔐 Passo 1: Riautenticazione Firebase CLI

Le credenziali Firebase sono scadute. Devi riautenticarti manualmente.

Apri un terminale nel progetto e esegui:

```bash
firebase login --reauth
```

Questo aprirà il browser per il login Google. Accedi con l'account che ha accesso al progetto Firebase.

## 📧 Passo 2: Verifica Configurazione Gmail

Una volta loggato, controlla se la configurazione Gmail è presente nelle Firebase Functions:

```bash
cd functions
firebase functions:config:get
```

### Risultato atteso:

Dovresti vedere qualcosa come:
```json
{
  "gmail": {
    "email": "ilsorpassodilorenzobasile@gmail.com",
    "pass": "xxxx xxxx xxxx xxxx"
  }
}
```

### Se la configurazione è vuota o mancante:

Procedi al Passo 2.1

## 2.1 Crea una nuova App Password Gmail

Google richiede una App Password per le applicazioni che inviano email via SMTP.

### Passaggi:

1. Vai su **https://myaccount.google.com/apppasswords**
2. Accedi con l'account **ilsorpassodilorenzobasile@gmail.com**
3. Seleziona:
   - **App**: Seleziona "Mail"
   - **Dispositivo**: Seleziona "Windows Computer" o "Altro"
4. Clicca su **Genera**
5. **Copia la password generata** (formato: `xxxx xxxx xxxx xxxx`)

⚠️ **Importante**: Salva questa password in un posto sicuro, non potrai visualizzarla di nuovo!

## 2.2 Imposta la configurazione nelle Firebase Functions

Una volta ottenuta la App Password, configurala nelle Firebase Functions:

```bash
firebase functions:config:set gmail.email="ilsorpassodilorenzobasile@gmail.com" gmail.pass="LA-TUA-APP-PASSWORD-QUI"
```

**Esempio:**
```bash
firebase functions:config:set gmail.email="ilsorpassodilorenzobasile@gmail.com" gmail.pass="abcd efgh ijkl mnop"
```

## 2.3 Verifica la configurazione

Controlla che sia stata salvata correttamente:

```bash
firebase functions:config:get
```

## 🚀 Passo 3: Rideploy delle Firebase Functions

Ora che la configurazione è corretta, devi fare il rideploy delle Functions:

```bash
cd functions
npm run deploy
```

Oppure:

```bash
cd functions
firebase deploy --only functions
```

Attendi che il deploy sia completato (potrebbe richiedere 2-3 minuti).

## 🧪 Passo 4: Test del Form di Contatto

### Test in locale:

1. Avvia il dev server:
   ```bash
   npm run dev
   ```

2. Vai su: **http://localhost:5173/contatti**

3. Compila il form con dati di test:
   - Nome: Test
   - Cognome: Email
   - Email: tua-email@gmail.com
   - Messaggio: Test email Firebase

4. Invia il form

### Test in produzione:

Se hai deployato anche il frontend, testa su:
**https://sorpasso-edc98.web.app/contatti**

## ✅ Verifica che l'email sia arrivata

Controlla la casella email: **ilsorpassodilorenzobasile@gmail.com**

Dovresti ricevere un'email con:
- **Oggetto**: Richiesta da Test Email
- **Contenuto**: I dati del form

## 🔍 Troubleshooting Aggiuntivo

### Controllare i logs delle Functions

Per vedere eventuali errori nelle Functions:

```bash
cd functions
npm run logs
```

Oppure:

```bash
firebase functions:log
```

### Verificare che la Function sia attiva

Vai su Firebase Console:
1. https://console.firebase.google.com/
2. Seleziona il progetto "sorpasso-edc98"
3. Vai su **Functions** nel menu laterale
4. Verifica che `sendContactEmail` sia presente e attiva

### Verificare Firestore

Le richieste di contatto vengono salvate in Firestore prima dell'invio email.

1. Vai su Firebase Console > **Firestore Database**
2. Cerca la collezione **contact_requests**
3. Verifica che ci siano documenti recenti

Se ci sono documenti ma non arrivano email:
- Problema con la configurazione Gmail
- Problema con la App Password

Se non ci sono documenti:
- Problema lato frontend (form non invia dati)
- Controllare regole Firestore

## 📝 Configurazione Attuale

### Email destinatario:
**ilsorpassodilorenzobasile@gmail.com**

### Function configurata:
- **Nome**: `sendContactEmail`
- **Region**: `europe-west1`
- **Trigger**: Firestore onCreate su `contact_requests/{docId}`

### Service usato:
- **Gmail SMTP** con autenticazione App Password

## 🆘 Se nulla funziona

1. Verifica che l'account Gmail abbia l'autenticazione a 2 fattori attiva (richiesto per App Password)
2. Verifica che la App Password non sia stata revocata
3. Prova a generare una nuova App Password e riconfigurare
4. Controlla i logs di Firebase per errori specifici
5. Verifica che il piano Firebase sia attivo (Blaze Plan richiesto per Functions)

## 📞 Contatti Utili

- **Firebase Console**: https://console.firebase.google.com/
- **Google Account - App Passwords**: https://myaccount.google.com/apppasswords
- **Firebase Docs**: https://firebase.google.com/docs/functions

---

**Creato**: 2025-10-31
**Ultima modifica**: 2025-10-31
