var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    googleId: String,
    content: String,
  }, {
    timestamps: true
  });

var flowerSchema = new Schema({
    name: String,
    season: String,
    light: String,
    image: String,
    googleId: String,
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Flower', flowerSchema);