// 1. import express library
const express = require('express');
const app = express();
// import morgan (HTTP request level middleware) to log requests and how long the requests take. It calls the 'next' function 
const morgan = require('morgan');

// 3. Routes to handle requests
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// 2. Set up middleware with use() to forward requests for /products or /orders.
// Anything starting with the first argument '/products', will be handled by 'productRoutes' and forwarded to the product page:
app.use(morgan('dev'));
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


// Handle error requests 
app.use((req, res, next) => { 
  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

module.exports = app;


