// import express library
const express = require('express');
const app = express();
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');



// Set up middleware with use();
// Anything starting with the first argument '/products', will be handled by 'productRoutes' and forwarded to the product page:

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


// app.use((req, res, next) => {
//   res.status(200).json({
//     message: 'OMG, it STILL works!'
//   });
// });

module.exports = app;


