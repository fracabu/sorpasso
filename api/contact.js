import pkg from 'pg';
const { Client } = pkg;
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('[API Contact] Inizio richiesta di contatto');

  try {
    const { name, surname, email, message } = req.body;
    console.log('[API Contact] Dati ricevuti:', { name, surname, email, messageLength: message?.length });

    // Validazione
    if (!name || !email || !message) {
      console.log('[API Contact] Validazione fallita: campi mancanti');
      return res.status(400).json({ error: 'Nome, email e messaggio sono obbligatori' });
    }

    if (message.length < 10) {
      console.log('[API Contact] Validazione fallita: messaggio troppo corto');
      return res.status(400).json({ error: 'Il messaggio deve essere di almeno 10 caratteri' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('[API Contact] Validazione fallita: email non valida');
      return res.status(400).json({ error: 'Email non valida' });
    }

    console.log('[API Contact] Validazione completata con successo');

    // Verifica variabili d'ambiente
    if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_PASS) {
      console.error('[API Contact] ERRORE: Variabili d\'ambiente email mancanti!');
      return res.status(500).json({
        error: 'Configurazione server non valida',
        details: 'Credenziali email non configurate'
      });
    }

    console.log('[API Contact] Tentativo di salvataggio nel database...');

    // Salva nel database
    const client = new Client({
      connectionString: process.env.POSTGRES_URL,
      ssl: {
        rejectUnauthorized: false
      }
    });

    try {
      await client.connect();
      await client.query(
        'INSERT INTO contact_requests (name, surname, email, message, created_at, status) VALUES ($1, $2, $3, $4, NOW(), $5)',
        [name, surname || '', email, message, 'new']
      );
      await client.end();
      console.log('[API Contact] Salvataggio nel database completato');
    } catch (dbError) {
      console.error('[API Contact] ERRORE database:', dbError);
      try { await client.end(); } catch (e) {}
      throw new Error(`Errore database: ${dbError.message}`);
    }

    console.log('[API Contact] Configurazione Nodemailer...');

    // Configura Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS
      }
    });

    console.log('[API Contact] Tentativo di invio email...');

    // Invia email
    const mailOptions = {
      from: `"Il Sorpasso" <${process.env.GMAIL_EMAIL}>`,
      to: process.env.GMAIL_EMAIL, // Invia a se stesso
      replyTo: email,
      subject: `Richiesta da ${name} ${surname || ''}`,
      html: `
        <h2>Nuova Richiesta di Contatto</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Cognome:</strong> ${surname || 'Non fornito'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message}</p>
      `
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('[API Contact] Email inviata con successo:', info.messageId);
    } catch (emailError) {
      console.error('[API Contact] ERRORE invio email:', emailError);
      // L'email non è stata inviata ma il contatto è salvato nel database
      // Possiamo comunque considerarlo un successo parziale
      return res.status(200).json({
        success: true,
        warning: 'Richiesta salvata ma email non inviata',
        message: 'La tua richiesta è stata registrata correttamente',
        emailError: emailError.message
      });
    }

    console.log('[API Contact] Processo completato con successo');

    res.status(200).json({
      success: true,
      message: 'Richiesta inviata con successo'
    });

  } catch (error) {
    console.error('[API Contact] ERRORE GENERALE:', error);
    console.error('[API Contact] Stack trace:', error.stack);

    // Assicurati sempre di restituire JSON valido
    return res.status(500).json({
      error: 'Errore durante l\'invio della richiesta',
      details: error.message || 'Errore sconosciuto',
      type: error.name || 'Error'
    });
  }
}
