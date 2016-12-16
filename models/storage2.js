// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var StorageSchema = new Schema({
  location: {
    type: String
  },
  date: {
    type: Date
  }
});

var Storage = mongoose.model("Storage", StorageSchema);

module.exports = Storage;
