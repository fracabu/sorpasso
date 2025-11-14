import { createClient } from '@vercel/postgres';

/**
 * TEMPORARY MIGRATION ENDPOINT
 *
 * This endpoint creates the contact_requests table in Vercel Postgres.
 *
 * Usage:
 * 1. Deploy this file
 * 2. Visit: https://your-domain.vercel.app/api/migrate
 * 3. Delete this file after successful migration
 *
 * ⚠️ DELETE THIS FILE AFTER USE FOR SECURITY
 */

export default async function handler(req, res) {
  // Security: Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('[MIGRATION] Starting database migration...');
  console.log('[MIGRATION] Using POSTGRES_URL for direct connection...');

  const client = createClient({
    connectionString: process.env.POSTGRES_URL
  });

  await client.connect();

  try {
    // Check if table already exists
    const checkTable = await client.query(
      `SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_schema = 'public'
        AND table_name = 'contact_requests'
      )`
    );

    const tableExists = checkTable.rows[0].exists;

    if (tableExists) {
      console.log('[MIGRATION] Table already exists');
      await client.end();
      return res.status(200).json({
        success: true,
        message: 'Table contact_requests already exists',
        alreadyExists: true
      });
    }

    console.log('[MIGRATION] Creating contact_requests table...');

    // Create the table
    await client.query(`
      CREATE TABLE contact_requests (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        surname VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'in-progress', 'completed')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('[MIGRATION] Table created successfully');
    console.log('[MIGRATION] Creating indexes...');

    // Create indexes
    await client.query('CREATE INDEX idx_created_at ON contact_requests(created_at DESC)');
    await client.query('CREATE INDEX idx_status ON contact_requests(status)');
    await client.query('CREATE INDEX idx_email ON contact_requests(email)');

    console.log('[MIGRATION] Indexes created successfully');

    // Verify the table structure
    const columns = await client.query(`
      SELECT
        column_name,
        data_type,
        is_nullable,
        column_default
      FROM information_schema.columns
      WHERE table_name = 'contact_requests'
      ORDER BY ordinal_position
    `);

    const indexes = await client.query(`
      SELECT
        indexname,
        indexdef
      FROM pg_indexes
      WHERE tablename = 'contact_requests'
    `);

    console.log('[MIGRATION] Migration completed successfully');

    await client.end();

    return res.status(200).json({
      success: true,
      message: 'Database migration completed successfully',
      table: {
        name: 'contact_requests',
        columns: columns.rows,
        indexes: indexes.rows
      },
      warning: '⚠️ DELETE /api/migrate.js FOR SECURITY'
    });

  } catch (error) {
    console.error('[MIGRATION] Error:', error);
    await client.end();
    return res.status(500).json({
      success: false,
      error: 'Migration failed',
      details: error.message,
      stack: error.stack
    });
  }
}
