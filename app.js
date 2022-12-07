// import express library
const express = require('express');
const app = express();

// Set up middleware with use();
app.use((req, res, next) => {
  res.status(200).json({
    message: 'iT works!'
  });
})

module.exports = app;