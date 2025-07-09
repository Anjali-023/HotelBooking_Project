const express = require('express');
const router = express.Router();
const sql = require('../db/db');

router.post('/login', async (req, res) => {
  const { username, passwordHash } = req.body;
  try {
    const result = await sql.query(`
      EXEC sp_login_user 
      @Username = '${username}', 
      @PasswordHash = '${passwordHash}'
    `);
    if (result.recordset.length > 0) {
      res.json({ success: true, user: result.recordset[0] });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;