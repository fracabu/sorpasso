import { sql } from '@vercel/postgres';
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

  try {
    const { name, surname, email, message } = req.body;

    // Validazione
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nome, email e messaggio sono obbligatori' });
    }

    if (message.length < 10) {
      return res.status(400).json({ error: 'Il messaggio deve essere di almeno 10 caratteri' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Email non valida' });
    }

    // Salva nel database
    await sql`
      INSERT INTO contact_requests (name, surname, email, message, created_at, status)
      VALUES (${name}, ${surname || ''}, ${email}, ${message}, NOW(), 'new')
    `;

    // Configura Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS
      }
    });

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

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Richiesta inviata con successo'
    });

  } catch (error) {
    console.error('Errore:', error);
    res.status(500).json({
      error: 'Errore durante l\'invio della richiesta',
      details: error.message
    });
  }
}
