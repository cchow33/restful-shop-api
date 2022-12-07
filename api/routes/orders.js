const express = require('express');
const router = express.Router();

// 1. Implement route for GET requests (localhost:3000/orders/)
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched'
  });
});

// 2. Implement route for POST requests (localhost:3000/orders/)
router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Order was created'
  });
});

// 3. Implement route for ORDERID requests (localhost:3000/orders/123)
router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Order details',
    orderId: req.params.orderId
  });
});

// 4. Implement route for DELETE requests (localhost:3000/orders/123 || /orders/someorderId) 
router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Order deleted',
    orderId: req.params.orderId
  });
});

module.exports = router;