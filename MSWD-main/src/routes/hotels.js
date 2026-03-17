const express = require('express');
const router = express.Router();
const hotelsController = require('../controllers/hotelsController');

router.get('/', hotelsController.getAllHotels);

module.exports = router;
// routes/hotels.js

const express = require('express');
const Router = express.Router();
const Hotel = require('../models/Hotel');

router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ... other routes like POST, PUT, DELETE

module.exports = router;
