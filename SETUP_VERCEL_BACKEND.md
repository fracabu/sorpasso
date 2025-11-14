# Setup Backend Vercel + PostgreSQL

## ✅ Fatto Finora

Ho creato:
- ✅ `/api/contact.js` - Endpoint per form contatti (POST)
- ✅ `/api/login.js` - Endpoint per login admin (POST)
- ✅ `/api/contacts.js` - Endpoint per lista contatti admin (GET)
- ✅ `.env.local` - File con variabili d'ambiente

---

## 🚀 Passaggi per Completare il Setup

### 1. **Setup Vercel Postgres Database**

#### A. Crea il Database su Vercel

1. Vai su https://vercel.com/dashboard
2. Seleziona il progetto `sorpasso`
3. Vai su **Storage** → **Create Database**
4. Seleziona **Postgres**
5. Scegli **nome**: `sorpasso-db`
6. Region: **Frankfurt** (o la più vicina)
7. Clicca **Create**

#### B. Collega il Database al Progetto

Vercel aggiungerà automaticamente queste variabili d'ambiente al progetto:
```
POSTGRES_URL
POSTGRES_PRISMA_URL
POSTGRES_URL_NON_POOLING
POSTGRES_USER
POSTGRES_HOST
POSTGRES_PASSWORD
POSTGRES_DATABASE
```

#### C. Crea la Tabella nel Database

1. Nella dashboard Vercel, vai su **Storage** → `sorpasso-db`
2. Clicca su **Query** (o **Data**)
3. Esegui questa query SQL:

```sql
CREATE TABLE IF NOT EXISTS contact_requests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  surname VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_created_at ON contact_requests(created_at DESC);
CREATE INDEX idx_status ON contact_requests(status);
```

---

### 2. **Configura Variabili d'Ambiente su Vercel**

Vai su: https://vercel.com/dashboard/[tuo-progetto]/settings/environment-variables

Aggiungi queste variabili:

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `GMAIL_EMAIL` | `ilsorpassodilorenzobasile@gmail.com` | Production, Preview, Development |
| `GMAIL_PASS` | `tzaceofiqreuoajg` | Production, Preview, Development |
| `ADMIN_EMAIL` | `fracabu@gmail.com` | Production, Preview, Development |
| `ADMIN_PASSWORD` | `[Scegli password sicura]` | Production, Preview, Development |
| `JWT_SECRET` | `[Genera stringa random lunga]` | Production, Preview, Development |

**Per generare JWT_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

### 3. **Aggiorna il File .env.local Locale**

Modifica `.env.local` e sostituisci:

```env
# Admin Password (scegli una password sicura)
ADMIN_PASSWORD=TuaPasswordSicura123!

# JWT Secret (genera una chiave random)
JWT_SECRET=[usa il comando sopra per generarla]
```

**⚠️ IMPORTANTE:** NON committare mai questo file! È già in .gitignore.

---

### 4. **Deploy su Vercel**

```bash
# Commit delle modifiche
git add api/ .gitignore
git commit -m "Add Vercel serverless API endpoints"

# Push
git push origin main
```

Vercel farà il deploy automaticamente!

---

### 5. **Testa le API**

Dopo il deploy, testa:

#### Test Contact Endpoint
```bash
curl -X POST https://tuo-dominio.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "surname": "User",
    "email": "test@example.com",
    "message": "Questo è un messaggio di test"
  }'
```

#### Test Login
```bash
curl -X POST https://tuo-dominio.vercel.app/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "fracabu@gmail.com",
    "password": "TuaPasswordSicura123!"
  }'
```

#### Test Get Contacts (con token)
```bash
curl https://tuo-dominio.vercel.app/api/contacts \
  -H "Authorization: Bearer [TOKEN_RICEVUTO_DAL_LOGIN]"
```

---

## 📝 Prossimi Passi

Dopo che il backend funziona:

1. **Aggiornare Frontend** - Modificare `Contact.vue` per chiamare `/api/contact`
2. **Aggiornare Admin Login** - Modificare per usare `/api/login`
3. **Aggiornare Admin Dashboard** - Per usare `/api/contacts`
4. **Rimuovere Firebase** - Eliminare dipendenze Firebase

---

## 🔒 Sicurezza

- ✅ Password admin in variabili d'ambiente
- ✅ JWT per autenticazione
- ✅ Validazione input
- ✅ CORS configurato
- ✅ Variabili sensibili in .env.local (git-ignored)

---

## 🆘 Troubleshooting

**"Cannot find module @vercel/postgres"**
```bash
npm install @vercel/postgres
```

**"Database connection failed"**
- Verifica che Vercel Postgres sia collegato al progetto
- Controlla le variabili d'ambiente su Vercel

**"Email not sent"**
- Verifica `GMAIL_EMAIL` e `GMAIL_PASS`
- Controlla che la App Password Gmail sia corretta

---

## 📞 Note

- Le API sono **serverless** → scaling automatico
- PostgreSQL è **gestito** → niente manutenzione
- **Costo**: Tier gratuito molto generoso

**Limite gratuito Vercel:**
- 100 GB-hours/mese serverless
- 256 MB RAM per function
- 10s timeout
- Più che sufficiente per questo progetto!
