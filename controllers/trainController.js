
const db = require('../config/db');
const Train = require('../models/Train');


exports.addTrain = (req, res) => {
  const { source, destination, totalSeats } = req.body;
  
  Train.createTrain(source, destination, totalSeats, db, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Train added successfully');
  });
};


exports.getSeatAvailability = (req, res) => {
  const { source, destination } = req.query;
  
  Train.getAvailableTrains(source, destination, db, (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
};


exports.bookSeat = (req, res) => {
  const { trainId } = req.body;


  console.log("Booking request for Train ID:", trainId);

  if (!trainId) return res.status(400).send({ message: "Train ID is required" });

  Train.bookSeat(trainId, db, (err, success) => {
    if (err) {
      console.log("Error during booking:", err);
      return res.status(500).send('Error booking seat');
    }
    if (!success) return res.status(400).send('No seats available');
    res.send('Seat booked successfully');
  });
};


exports.getBookingDetails = (req, res) => {
  const { trainId } = req.params;

  Train.findTrainById(trainId, db, (err, train) => {
    if (err) return res.status(500).send('Error retrieving booking details');
    if (!train) return res.status(404).send('Train not found');
    res.send(train);
  });
};


