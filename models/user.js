var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    name: String,
    email: String,
    googleId: String,
    myFlowers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flower'
    }]
});

module.exports = mongoose.model('User', userSchema);