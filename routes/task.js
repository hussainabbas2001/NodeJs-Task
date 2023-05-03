var mongoose = require('mongoose');

var task = mongoose.Schema({
    user : String,
    taskname: String,
    tasktype: String
})

module.exports = mongoose.model('task', task)

