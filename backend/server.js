require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const sql = require('./db/db');

const roomRoutes = require('./routes/room');
const authRoutes = require('./routes/auth');
const reservationRoutes = require('./routes/reservation');

app.use(cors());
app.use(express.json());

app.use('/rooms', roomRoutes);
app.use('/auth', authRoutes);
app.use('/reservation', reservationRoutes);

app.get('/', (req, res) => {
  res.send('API Running...');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});