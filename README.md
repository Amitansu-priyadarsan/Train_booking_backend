Here's the modified version of your Train Booking Backend System project with added emojis:

# 🚆 Train Booking Backend System (IRCTC)

![Node.js](https://img.shields.io/badge/node.js-v14.17.0-green)
![Express](https://img.shields.io/badge/express-v4.17.1-lightgrey)
![MySQL](https://img.shields.io/badge/MySQL-v8.0-orange)
![JWT](https://img.shields.io/badge/JWT-secure-yellowgreen)

## 🗂 Project Structure

```bash
RAILWAY-MANAGEMENT/
├── config/
│   └── db.js                   # Database configuration file
├── controllers/
│   ├── trainController.js       # Controller for handling train-related logic
│   └── userController.js        # Controller for handling user-related logic
├── middlewares/
│   ├── adminAuth.js             # Middleware for admin authentication
│   └── auth.js                  # Middleware for general user authentication
├── models/
│   ├── Train.js                 # Train model schema
│   └── User.js                  # User model schema
├── routes/
│   ├── trainRoutes.js           # API routes for train-related operations
│   └── userRoutes.js            # API routes for user-related operations
├── node_modules/                # Node.js modules (dependencies)
├── .env                         # Environment variables
├── .gitignore                   # Git ignore file (ignores node_modules, build files, etc.)
├── app.js                       # Main application file
├── package-lock.json            # NPM lock file for installed packages
├── package.json                 # NPM configuration file for dependencies and scripts
```

## 📚 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [User Endpoints](#user-endpoints)
  - [Admin Endpoints](#admin-endpoints)
- [Database Schema](#database-schema)
- [Handling Race Conditions](#handling-race-conditions)
- [Tests](#tests)
- [Conclusion](#conclusion)

## 🚀 Introduction

This project is a backend system for a railway management platform similar to IRCTC. Users can search for available trains, check seat availability, and book seats. Admins can manage trains and seat inventory. The system is designed to handle high traffic and prevent race conditions during simultaneous bookings.

## 🌟 Features

1. **📝 User Registration and Login**: Users can sign up and log in securely.
2. **🚉 Train Management**: Admins can add new trains, routes, and seat availability.
3. **🪑 Seat Availability Check**: Users can check available seats on any train between selected stations.
4. **📅 Seat Booking**: Users can book available seats in real-time.
5. **⏱ Race Condition Handling**: Prevents conflicts during simultaneous seat bookings.
6. **🔒 Role-based Access**: Separate permissions for admins and users.
7. **🛡️ API Security**: JWT-secured user routes and API key-protected admin routes.

## 🛠 Technologies Used

- **Backend Framework**: Node.js with Express 
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Token) for user authentication
- **Security**: API key protection for admin routes

## ⚙️ Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Amitansu-priyadarsan/Train_booking_backend.git
   cd Train_booking_backend
   ```

2. Install dependencies:
   - For Node.js:
     ```bash
     npm install
     ```

3. Set up the database:
   - Create a MySQL database.
   - Run the migration scripts located in the `migrations/` folder.

4. Start the server:
   ```bash
   npm start
   ```

## 🌍 Environment Variables

Ensure the following environment variables are set in your `.env` file:

- `DB_HOST`: The hostname of the database server
- `DB_USER`: The database username
- `DB_PASSWORD`: The database password
- `DB_NAME`: The database name
- `API_KEY`: The secret key for admin access
- `JWT_SECRET`: Secret key for generating JWT tokens

## 🛤️ API Endpoints

### 👥 User Endpoints

1. **Register a User**
   - `POST /api/register`
   - Request Body:
     ```json
     {
       "username": "string",
       "password": "string"
     }
     ```

2. **Login User**
   - `POST /api/login`
   - Request Body:
     ```json
     {
       "username": "string",
       "password": "string"
     }
     ```
   - Response:
     ```json
     {
       "token": "jwt_token"
     }
     ```

3. **Check Seat Availability**
   - `GET /api/seats`
   - Query Parameters: `source`, `destination`

4. **Book a Seat**
   - `POST /api/book`
   - Headers: Authorization `Bearer <jwt_token>`
   - Request Body:
     ```json
     {
       "train_id": "integer",
       "seat_count": "integer"
     }
     ```

5. **Get Booking Details**
   - `GET /api/booking`
   - Headers: Authorization `Bearer <jwt_token>`
   - Query Parameters: `booking_id`

### 🛠️ Admin Endpoints

1. **Add a New Train**
   - `POST /api/admin/train`
   - Headers: `x-api-key: <API_KEY>`
   - Request Body:
     ```json
     {
       "train_name": "string",
       "source": "string",
       "destination": "string",
       "total_seats": "integer"
     }
     ```

2. **Update Train Information**
   - `PUT /api/admin/train/:id`
   - Headers: `x-api-key: <API_KEY>`
   - Request Body:
     ```json
     {
       "train_name": "string",
       "total_seats": "integer"
     }
     ```

## 🗄️ Database Schema

- **Users**: Stores user information (ID, username, password, role).
- **Trains**: Stores train information (ID, name, source, destination, total seats).
- **Bookings**: Stores booking details (ID, train ID, user ID, number of seats booked).

## ⛓️ Handling Race Conditions

To prevent race conditions during simultaneous seat bookings, a locking mechanism is applied to database rows representing seat availability. This ensures that one user's booking transaction completes before others can proceed.

## 🧪 Tests

To run the test suite:

1. Install the testing dependencies:
   ```bash
   npm install --save-dev jest supertest
   ```

2. Run tests:
   ```bash
   npm test
   ```

3. Sample test cases include:
   - User registration and login
   - Train addition and availability checks
   - Seat booking logic with race condition handling

## 🎉 Conclusion

This system provides a robust backend for a train booking platform, efficiently managing user and admin operations with secure API endpoints. It ensures real-time seat availability and race condition handling for a seamless booking experience.

---

With these emojis, the document has a more engaging and visually appealing presentation! Let me know if you'd like further adjustments.
