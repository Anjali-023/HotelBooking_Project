const express = require('express');
const router = express.Router();
const sql = require('../db/db');

router.post('/availability', async (req, res) => {
  const { hotelId, checkIn, checkOut } = req.body;
  try {
    const result = await sql.query(`
      EXEC sp_check_room_availability 
      @HotelID = ${hotelId}, 
      @CheckInDate = '${checkIn}', 
      @CheckOutDate = '${checkOut}'
    `);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;