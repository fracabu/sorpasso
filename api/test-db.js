/**
 * SIMPLE DATABASE CONNECTION TEST
 * ⚠️ DELETE AFTER USE
 */

export default async function handler(req, res) {
  console.log('[TEST] Starting database connection test...');

  try {
    // Check environment variables
    const hasUrl = !!process.env.POSTGRES_URL;
    console.log('[TEST] Has POSTGRES_URL:', hasUrl);

    if (!hasUrl) {
      return res.status(500).json({
        error: 'POSTGRES_URL not set',
        env: Object.keys(process.env).filter(k => k.includes('POSTGRES'))
      });
    }

    // Try using node-postgres directly
    const { Client } = await import('pg');

    console.log('[TEST] Creating PostgreSQL client...');
    const client = new Client({
      connectionString: process.env.POSTGRES_URL,
      ssl: {
        rejectUnauthorized: false
      }
    });

    console.log('[TEST] Connecting to database...');
    await client.connect();

    console.log('[TEST] Running simple query...');
    const result = await client.query('SELECT NOW() as current_time');

    console.log('[TEST] Query successful');
    await client.end();

    return res.status(200).json({
      success: true,
      message: 'Database connection successful',
      serverTime: result.rows[0].current_time
    });

  } catch (error) {
    console.error('[TEST] Error:', error);
    return res.status(500).json({
      success: false,
      error: error.message,
      stack: error.stack,
      code: error.code
    });
  }
}
