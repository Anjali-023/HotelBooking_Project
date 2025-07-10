# HotelBooking_Project
Setup Instructions

### 1.  Backend Setup

**Pre-requisites**: Node.js, MS SQL Server

```bash
cd back
npm install
```

- **Environment file (.env):**

```
DB_USER=myuser
DB_PASSWORD=MyStrongPass123!
DB_SERVER=localhost\SQLEXPRESS
DB_DATABASE=HotelBooking
```

- **Run the server:**

```bash
node server.js
```

Ensure SQL Server is running, port 1433 is open, and SQL authentication is enabled.

### 2.  Frontend Setup

```bash
cd front
npm install
npm start
```

This will launch the React app at `http://localhost:3000`

---

##  SQL Server Setup (SSMS)

Use the provided schema in `database.sql` to create the following tables:

- Hotels
- Rooms
- Users
- Reservations
- Bills

And the stored procedures:
- `sp_check_room_availability`
- `sp_login_user`
- `sp_create_reservation`
- `sp_generate_bill`

Also insert some test data to begin with.

```sql
INSERT INTO Hotels VALUES ('Taj Hotel', 'Delhi');
INSERT INTO Rooms VALUES (1, '101', 'Deluxe', 5000, 2, 1);
INSERT INTO Users VALUES ('anjali', 'HASHED_PASS', 'Anjali Aggarwal', 'anjali@email.com');
```

---

##  Features

- 🔐 User login via stored procedure
- 📅 Check room availability
- ✅ Create reservation
- 💳 Generate bills

---

##  UI Components

Each form is modern and responsive:
- `LoginForm` → login with username/password
- `AvailabilityForm` → checks available rooms by hotel & date
- `ReservationForm` → book a room
- `BillForm` → generate bill for reservation

All styles are maintained with modular CSS for clarity.

---

## ❓Troubleshooting

- `ETIMEOUT` or `ESOCKET` errors → ensure SQL Server is running and reachable at `127.0.0.1:1433`
- Login not working? → Ensure correct user/password hash in DB
- CORS issues? → Check backend `cors()` middleware is enabled

---

