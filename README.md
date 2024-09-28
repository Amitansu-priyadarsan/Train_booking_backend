
# Train Booking Backend System (IRCTC)

![Node.js](https://img.shields.io/badge/node.js-v14.17.0-green)
![Express](https://img.shields.io/badge/express-v4.17.1-lightgrey)
![MySQL](https://img.shields.io/badge/MySQL-v8.0-orange)
![JWT](https://img.shields.io/badge/JWT-secure-yellowgreen)

## Project Structure

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

## Table of Contents

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

## Introduction

This project is a backend system for a railway management platform similar to IRCTC. Users can search for available trains between stations, check seat availability, and book seats. Admins can manage trains and seats. The system is designed to handle high traffic and prevent race conditions during simultaneous bookings.

## Features

1. **User Registration and Login**: Users can register and log into the system.
2. **Train Management**: Admins can add new trains with routes and seat availability.
3. **Seat Availability Check**: Users can check available seats on any train between selected stations.
4. **Seat Booking**: Users can book available seats in real-time.
5. **Race Condition Handling**: Simultaneous bookings are handled to prevent conflicts.
6. **Role-based Access**: Admins and regular users have different permissions.
7. **API Security**: Admin API endpoints are protected by an API key, and user actions are secured using tokens.

## Technologies Used

- **Backend Framework**: Node.js with Express 
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Token) for user login and session management
- **Security**: API key protection for admin routes

## Setup and Installation

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
   - For Python (Flask/Django):
     ```bash
     pip install -r requirements.txt
     ```

3. Set up the database:
   - Create a MySQL/PostgreSQL database.
   - Run the database migration scripts located in the `migrations/` folder.

4. Start the server:
   - For Node.js:
     ```bash
     npm start
     ```
   - For Python:
     ```bash
     python app.py
     ```

## Environment Variables

Ensure the following environment variables are set in your `.env` file:

- `DB_HOST`: The hostname of the database server
- `DB_USER`: The database username
- `DB_PASSWORD`: The database password
- `DB_NAME`: The database name
- `API_KEY`: The secret key for accessing admin endpoints
- `JWT_SECRET`: Secret key for JWT token generation

## API Endpoints

### User Endpoints

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

### Admin Endpoints

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

## Database Schema

- **Users**: Stores user information (ID, username, password, role).
- **Trains**: Stores train information (ID, name, source, destination, total seats).
- **Bookings**: Stores booking details (ID, train ID, user ID, number of seats booked).

## Handling Race Conditions

To prevent race conditions during simultaneous seat bookings, a locking mechanism is used on the database rows representing seat availability. This ensures that when one user books a seat, other users attempting to book at the same time must wait until the transaction is completed.

## Tests

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

## Conclusion

This system provides a reliable backend for a train booking platform, handling both user and admin functionalities with secure and optimized API endpoints. The solution ensures real-time seat availability and race condition management to handle multiple users booking seats simultaneously.
```

This version applies `bash` formatting only to the file structure section and other command line examples. Let me know if you'd like any further adjustments!
