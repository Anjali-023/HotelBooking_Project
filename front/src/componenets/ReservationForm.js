// components/ReservationForm/ReservationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './ReservationForm.css';

function ReservationForm() {
  const [roomId, setRoomId] = useState('');
  const [userId, setUserId] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [message, setMessage] = useState('');

  const handleReservation = async () => {
    try {
      await axios.post('http://localhost:5000/reservation/create', {
        roomId,
        userId,
        checkInDate,
        checkOutDate,
      });
      setMessage('✅ Reservation created successfully');
    } catch (err) {
      setMessage('❌ Error: ' + err.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Create Reservation</h2>
      <div className="form-group">
        <label>Room ID</label>
        <input
          type="number"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>User ID</label>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Check-In Date</label>
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Check-Out Date</label>
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>
      <button onClick={handleReservation}>Reserve</button>
      {message && <p className="status-msg">{message}</p>}
    </div>
  );
}

export default ReservationForm;
