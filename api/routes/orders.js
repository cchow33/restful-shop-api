const express = require('express');
const router = express.Router();

// Implement route for get requests
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched'
  });
});

// Implement route for get requests
router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Order was created'
  });
});

module.exports = router;