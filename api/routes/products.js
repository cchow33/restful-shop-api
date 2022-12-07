const express = require('express');
const router = express.Router();

// 1. Implement a GET route using the get() method to handle GET requests. First argument is the url, second argument is the handler.
router.get('/', (req, res, next) => { 
  res.status(200).json({
    // return an object with the message property:
      message: 'Handling GET requests to /products'
  });
});

// 2. Implement a POST route using the post() method to handle POST requests.
router.post('/', (req, res, next) => { 
  // Data for creating a product
  const product = {
    name: req.body.name,
    price: req.body.price
  };
  res.status(201).json({
    // return an object with the message property:
      message: 'Handling POST requests to /products',
      // Create 'createProduct' object and pass 'product' to it
      createdProduct: product
  });
});

// 3. Implement a GET route for the productID
router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special product id',
      id: id
    });
  } else {
      res.status(200).json({
        message: 'You passed an id'
      });
    }
});

// 4. Implement a PATCH route to modify a resource
router.patch('/:productId', (req, res, next) => {
  // don't need to add 'return' unless there's another response after the response
  res.status(200).json({
    message: 'Updated a product!'
  });
});

// 5. Implement a DELETE route to delete a resource
router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted a product!'
  });
});



module.exports = router;