var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    name: String,
    email: String,
    googleId: String
})

module.exports = mongoose.model('User', userSchema);