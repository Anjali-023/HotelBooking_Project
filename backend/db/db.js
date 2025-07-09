const sql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: 'localhost', // or 127.0.0.1
  port: 1433,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

sql.connect(config)
  .then(() => console.log('✅ Connected to SQL Server'))
  .catch((err) => console.error('❌ DB Connection Error:', err));

module.exports = sql;
