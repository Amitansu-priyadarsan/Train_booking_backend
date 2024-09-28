
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const User = require('../models/User');


exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  User.create(username, hashedPassword, db, (err, newUser) => {
    if (err) return res.status(500).send(err);
    res.send('User registered successfully!');
  });
};


exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  User.findByUsername(username, db, async (err, user) => {
    if (err || !user) return res.status(400).send('User not found');
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid credentials');
    
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.header('Authorization', token).send({ token });
  });
};
