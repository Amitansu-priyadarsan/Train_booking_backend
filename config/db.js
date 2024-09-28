
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'anujchess12',
  database: 'railway_db'
});

connection.connect((err) => {
  if (err) {

    console.error('Error connecting to the database:', err.message);

    return;
  }
  console.log('Connected to the database');
  
});

module.exports = connection;
