
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json()); 


const userRoutes = require('./routes/userRoutes');
const trainRoutes = require('./routes/trainRoutes');



app.get('/', (req, res) => {
  res.send('Welcome to the Railway Management API! Please use /api/users or /api/trains for respective actions.');
});


app.use('/api/users', userRoutes);
app.use('/api/trains', (req, res, next) => {
  console.log("Request received at /api/trains");
  next();
}, trainRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
