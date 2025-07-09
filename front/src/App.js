// App.js
import React from 'react';
import LoginForm from './components/LoginForm';
import AvailabilityForm from './components/AvailabilityForm';
import ReservationForm from './components/ReservationForm';
import BillForm from './components/BillForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">🏨 Hotel Reservation System</h1>
        <p className="subtitle">Book rooms, manage reservations, and generate bills easily</p>
      </header>

      <section className="form-section">
        <LoginForm />
      </section>

      <section className="form-section">
        <AvailabilityForm />
      </section>

      <section className="form-section">
        <ReservationForm />
      </section>

      <section className="form-section">
        <BillForm />
      </section>

      <footer className="app-footer">
        <p>© 2025 HotelSys Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
