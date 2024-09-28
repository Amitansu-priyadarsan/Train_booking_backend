

class Train {
    constructor(id, source, destination, totalSeats, availableSeats) {
      this.id = id;
      this.source = source;
      this.destination = destination;
      this.totalSeats = totalSeats;
      this.availableSeats = availableSeats;
    }
  
    static createTrain(source, destination, totalSeats, db, callback) {
      const query = 'INSERT INTO trains (source, destination, totalSeats, availableSeats) VALUES (?, ?, ?, ?)';
      db.query(query, [source, destination, totalSeats, totalSeats], (err, result) => {
        if (err) return callback(err);
        return callback(null, result);
      });
    }
  
    static getAvailableTrains(source, destination, db, callback) {
      const query = 'SELECT * FROM trains WHERE source = ? AND destination = ?';
      db.query(query, [source, destination], (err, results) => {
        if (err) return callback(err);
        return callback(null, results);
      });
    }
  
    static findTrainById(id, db, callback) {
      const query = 'SELECT * FROM trains WHERE id = ?';
      db.query(query, [id], (err, results) => {
        if (err) return callback(err);
        if (results.length === 0) return callback(null, null);
        const train = new Train(results[0].id, results[0].source, results[0].destination, results[0].totalSeats, results[0].availableSeats);
        return callback(null, train);
      });
    }
  
    static bookSeat(trainId, db, callback) {
      const query = 'UPDATE trains SET availableSeats = availableSeats - 1 WHERE id = ? AND availableSeats > 0';
      db.query(query, [trainId], (err, result) => {
        if (err) return callback(err);
        return callback(null, result.affectedRows > 0);
      });
    }
  }
  
  module.exports = Train;
  