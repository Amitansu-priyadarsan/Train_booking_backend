

class User {
    constructor(id, username, password) {
      this.id = id;
      this.username = username;
      this.password = password;
    }
  
    static findByUsername(username, db, callback) {
      const query = 'SELECT * FROM users WHERE username = ?';
      db.query(query, [username], (err, results) => {
        if (err) return callback(err, null);
        if (results.length === 0) return callback(null, null);
        const user = new User(results[0].id, results[0].username, results[0].password);
        return callback(null, user);
      });
    }
  
    static create(username, hashedPassword, db, callback) {
      const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
      db.query(query, [username, hashedPassword], (err, result) => {
        if (err) return callback(err);
        const newUser = new User(result.insertId, username, hashedPassword);
        return callback(null, newUser);
      });
    }
  }
  
  module.exports = User;
  