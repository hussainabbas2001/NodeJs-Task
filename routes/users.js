var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/N-task");

var user = mongoose.Schema({
  name: String,
  email: String,
  Mobile : Number
})

module.exports = mongoose.model("user", user)