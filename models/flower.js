var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flowerSchema = new Schema({
    name: String,
    season: String,
    light: String,
    image: String,
    googleId: String
});


module.exports = mongoose.model('Flower', flowerSchema);