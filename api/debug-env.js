/**
 * TEMPORARY DEBUG ENDPOINT
 * Shows which environment variables are available
 * ⚠️ DELETE THIS FILE AFTER USE FOR SECURITY
 */

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const envVars = {
    hasPostgresUrl: !!process.env.POSTGRES_URL,
    hasPostgresPrismaUrl: !!process.env.POSTGRES_PRISMA_URL,
    hasPostgresUrlNonPooling: !!process.env.POSTGRES_URL_NON_POOLING,
    hasPostgresUser: !!process.env.POSTGRES_USER,
    hasPostgresHost: !!process.env.POSTGRES_HOST,
    hasPostgresPassword: !!process.env.POSTGRES_PASSWORD,
    hasPostgresDatabase: !!process.env.POSTGRES_DATABASE,
    hasGmailEmail: !!process.env.GMAIL_EMAIL,
    hasGmailPass: !!process.env.GMAIL_PASS,

    // Show partial values (masked for security)
    postgresUrlPrefix: process.env.POSTGRES_URL ? process.env.POSTGRES_URL.substring(0, 20) + '...' : 'NOT SET',
    postgresHost: process.env.POSTGRES_HOST || 'NOT SET',
    postgresDatabase: process.env.POSTGRES_DATABASE || 'NOT SET',
  };

  return res.status(200).json({
    message: 'Environment variables check',
    environment: envVars,
    warning: '⚠️ DELETE /api/debug-env.js AFTER USE'
  });
}
