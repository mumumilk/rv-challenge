// server.js
const express = require('express');
const app = express();

const compression = require('compression');
app.use(compression());
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);