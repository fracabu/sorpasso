# 🔑 Come Trovare le Credenziali Supabase

## 📍 Dove Trovare le Credenziali

Dalla dashboard di Supabase che hai aperto, segui questi passaggi:

### 1. **Settings (Impostazioni)**
- Nella barra laterale sinistra, clicca su **"Settings"** (icona ingranaggio)
- Oppure vai direttamente su: `https://supabase.com/dashboard/project/hbqrubwqiysombwoxcea/settings/api`

### 2. **API Section**
- Nel menu Settings, clicca su **"API"**
- Qui troverai tutte le credenziali necessarie

### 3. **Credenziali da Copiare**

#### **Project URL:**
```
https://hbqrubwqiysombwoxcea.supabase.co
```

#### **API Keys:**
- **anon/public key** - per il frontend
- **service_role key** - per operazioni admin (NON usare nel frontend)

## 🔧 Come Aggiornare le Credenziali nel Progetto

### 1. **Apri il file `.env`**
Nel tuo progetto, modifica il file `.env` con le credenziali corrette:

```env
VITE_SUPABASE_URL=https://hbqrubwqiysombwoxcea.supabase.co
VITE_SUPABASE_ANON_KEY=la_tua_anon_key_qui
```

### 2. **Verifica la Configurazione**
- Riavvia il server di sviluppo (`npm run dev`)
- Controlla la console del browser per eventuali errori
- Testa il form di contatto

## 🚨 Problemi Comuni

### **"Failed to fetch"**
- Verifica che l'URL del progetto sia corretto
- Controlla che il progetto non sia in pausa
- Verifica la connessione internet

### **"Invalid API key"**
- Assicurati di usare la **anon key** (non la service_role key)
- Controlla che non ci siano spazi extra nella chiave
- Verifica che la chiave sia completa

### **Progetto in Pausa**
Se il progetto è in pausa:
- Vai su **Settings > General**
- Clicca su **"Resume project"** se disponibile
- I progetti gratuiti si mettono in pausa dopo inattività

## 📧 Verifica Sistema Email

Dopo aver aggiornato le credenziali:

1. **Testa il form di contatto** sul sito
2. **Controlla la dashboard admin** (`/admin/dashboard`)
3. **Usa il debug email** (`/admin/email-debug`)
4. **Verifica che Lorenzo riceva le email**

## 🔍 Debug Avanzato

Se i problemi persistono:

1. **Apri la Console del Browser** (F12)
2. **Vai alla tab Network** 
3. **Prova a inviare un contatto**
4. **Controlla le richieste HTTP** per errori specifici

## 📞 Contatti di Emergenza

Se tutto fallisce, Lorenzo può essere contattato direttamente:
- **Email:** ilsorpassodilorenzobasile@gmail.com
- **Telefono:** +39 347 395 2838