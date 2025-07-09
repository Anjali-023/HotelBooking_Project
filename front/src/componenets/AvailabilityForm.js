// import React, { useState } from 'react';
// import axios from 'axios';

// function AvailabilityForm() {
//   const [hotelId, setHotelId] = useState('');
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');
//   const [rooms, setRooms] = useState([]);

//   const checkAvailability = async () => {
//     try{
//     const res = await axios.post('http://localhost:5000/rooms/availability', {
//       hotelId, checkIn, checkOut
//     });
//     setRooms(res.data);
//   }
//   catch(err){
//     alert("e"+err.message);
//   }
// };

//   return (
//     <div>
//       <h2>Check Availability</h2>
//       <input placeholder="Hotel ID" onChange={(e) => setHotelId(e.target.value)} />
//       <input type="date" onChange={(e) => setCheckIn(e.target.value)} />
//       <input type="date" onChange={(e) => setCheckOut(e.target.value)} />
//       <button onClick={checkAvailability}>Check</button>
//       <ul>
//         {rooms.map(r => (
//           <li key={r.RoomID}>
//             Room {r.RoomNumber} - ₹{r.PricePerNight}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AvailabilityForm;


import React, { useState } from 'react';
import axios from 'axios';
import './AvailabilityForm.css'; // add this

function AvailabilityForm() {
  const [hotelId, setHotelId] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const checkAvailability = async () => {
    try {
      setLoading(true);
      const res = await axios.post('http://localhost:5000/rooms/availability', {
        hotelId,
        checkIn,
        checkOut,
      });
      setRooms(res.data);
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Check Room Availability</h2>

      <div className="form-group">
        <label>Hotel ID</label>
        <input
          type="text"
          value={hotelId}
          onChange={(e) => setHotelId(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Check-In Date</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Check-Out Date</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <button onClick={checkAvailability} disabled={loading}>
        {loading ? 'Checking...' : 'Check Availability'}
      </button>

      <div className="result">
        <h3>Available Rooms:</h3>
        {rooms.length === 0 ? (
          <p>No rooms available</p>
        ) : (
          <ul>
            {rooms.map((room) => (
              <li key={room.RoomID}>
                <strong>Room:</strong> {room.RoomNumber}, <strong>Type:</strong>{' '}
                {room.RoomType}, <strong>₹{room.PricePerNight}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AvailabilityForm;
