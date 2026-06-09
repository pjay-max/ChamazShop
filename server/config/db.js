const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: 'aws-0-eu-central-1.pooler.supabase.com',
  port: 6543,
  database: 'postgres',
  user: 'postgres.ziydnmlwaaaqkjdyprty',
  password: 'ChamazShop2024!',
  ssl: { rejectUnauthorized: false }
});

pool.connect()
  .then(() => console.log('✅ Connected to ChamazShop database'))
  .catch((err) => console.error('❌ DB connection error:', err.message));

module.exports = pool;