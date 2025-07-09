// components/BillForm/BillForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './BillForm.css';

function BillForm() {
  const [reservationId, setReservationId] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleBill = async () => {
    try {
      await axios.post('http://localhost:5000/reservation/bill', {
        reservationId,
        amount,
      });
      setStatus('✅ Bill generated successfully');
    } catch (err) {
      setStatus('❌ Error: ' + err.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Generate Bill</h2>
      <div className="form-group">
        <label>Reservation ID</label>
        <input
          type="number"
          value={reservationId}
          onChange={(e) => setReservationId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleBill}>Generate</button>
      {status && <p className="status-msg">{status}</p>}
    </div>
  );
}

export default BillForm;
