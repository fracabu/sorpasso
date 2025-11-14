import { createClient } from '@vercel/postgres';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const client = createClient({
    connectionString: process.env.POSTGRES_URL
  });

  try {
    // Verifica autenticazione
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Non autenticato' });
    }

    const token = authHeader.substring(7);

    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ error: 'Token non valido' });
    }

    // Recupera i contatti dal database
    await client.connect();
    const { rows } = await client.query(
      'SELECT id, name, surname, email, message, created_at, status FROM contact_requests ORDER BY created_at DESC'
    );
    await client.end();

    res.status(200).json({
      success: true,
      contacts: rows
    });

  } catch (error) {
    console.error('Errore:', error);
    await client.end();
    res.status(500).json({
      error: 'Errore durante il recupero dei contatti',
      details: error.message
    });
  }
}
