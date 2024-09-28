
const verifyAdmin = (req, res, next) => {
  const apiKey = req.header('x-api-key');
  if (apiKey === process.env.ADMIN_API_KEY) {
    next();
  } else {
    res.status(403).send('Forbidden');
  }
};

module.exports = verifyAdmin;
