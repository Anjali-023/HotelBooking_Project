// components/LoginForm/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [status, setStatus] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/auth/login', {
        username,
        passwordHash,
      });
      if (res.data.success) {
        setStatus(`✅ Welcome ${res.data.user.FullName}`);
      } else {
        setStatus('❌ Invalid Credentials');
      }
    } catch (err) {
      setStatus('❌ Error: ' + err.message);
    }
  };

  return (
    <div className="form-container">
      <h2>User Login</h2>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password Hash</label>
        <input
          type="password"
          value={passwordHash}
          onChange={(e) => setPasswordHash(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {status && <p className="status-msg">{status}</p>}
    </div>
  );
}

export default LoginForm;
