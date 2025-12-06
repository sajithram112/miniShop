// db.js
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  // connectionString: process.env.PG_URI,
  // ssl: {
  //   rejectUnauthorized: false  // Required for Neon
  // }
  user: process.env.PGUSER || 'myuser',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'mydb',
  password: process.env.PGPASSWORD || 'mypassword',
  port: process.env.PGPORT || 5432
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle PostgreSQL client (Neon killed it)', err.message);
});

console.log('PostgreSQL pool created – ready for queries');

module.exports.db = pool;