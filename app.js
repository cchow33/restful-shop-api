// 1. import express library
const express = require('express');
const app = express();
// import morgan (HTTP request level middleware) to log requests and how long the requests take. It calls the 'next' function 
const morgan = require('morgan');
const bodyParser = require('body-parser');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// 2. Set up middleware with use() on 'app' object to forward requests for /products or /orders.
// Anything starting with the first argument '/products', will be handled by 'productRoutes' and forwarded to the product page:
app.use(morgan('dev'));
// Parse urlencoded bodies (set extended 'rich body' to false (just 'simple body'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // Extract JSON data and make it easy to read

// Setup to prevent CORS errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if(req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// Routes to handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Handle error requests 
app.use((req, res, next) => { 
  // 'Error' object is available by default
  const error = new Error('Not found');
  error.status = 404;
  // Pass the error to the 'next' method which forwards the error request instead of the original request
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


