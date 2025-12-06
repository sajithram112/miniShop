// db.js
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  // connectionString: process.env.PG_URI,
  // ssl: {
  //   rejectUnauthorized: false  // Required for Neon
  // }
  user: PGUSER,
  PGHOST: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: PGPORT
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle PostgreSQL client (Neon killed it)', err.message);
});

console.log('PostgreSQL pool created – ready for queries');

module.exports.db = pool;