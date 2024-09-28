
const express = require('express');
const router = express.Router();
const { addTrain, getSeatAvailability, bookSeat, getBookingDetails } = require('../controllers/trainController');
const authenticateToken = require('../middlewares/auth');
const verifyAdmin = require('../middlewares/adminAuth');


router.post('/add', verifyAdmin, addTrain);


router.get('/availability', getSeatAvailability);
router.post('/book', authenticateToken, bookSeat);
router.get('/booking/:trainId', authenticateToken, getBookingDetails);

module.exports = router;
