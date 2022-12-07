// Create a server and type 'node server.js' to spin up local server
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);