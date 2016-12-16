var express = require('express');
var mongoose = require("mongoose");

// Initialize Express
var app = express();

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://heroku_bbjr6crw:8nr9iaq3m4ebjtl5i5nvuqj3m5@ds133378.mlab.com:33378/heroku_bbjr6crw  ");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//======================================================================
// Server listening
//======================================================================
var port = process.env.PORT || 3000;
app.listen(port);
console.log('listening on ' + port);
