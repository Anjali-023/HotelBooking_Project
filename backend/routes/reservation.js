const express = require('express');
const router = express.Router();
const sql = require('../db/db');

router.post('/create', async (req, res) => {
  const { roomId, userId, checkInDate, checkOutDate } = req.body;
  try {
    await sql.query(`
      EXEC sp_create_reservation 
      @RoomID = ${roomId}, 
      @UserID = ${userId}, 
      @CheckInDate = '${checkInDate}', 
      @CheckOutDate = '${checkOutDate}'
    `);
    res.json({ success: true, message: 'Reservation created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/bill', async (req, res) => {
  const { reservationId, amount } = req.body;
  try {
    await sql.query(`
      EXEC sp_generate_bill 
      @ReservationID = ${reservationId}, 
      @Amount = ${amount}
    `);
    res.json({ success: true, message: 'Bill generated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;