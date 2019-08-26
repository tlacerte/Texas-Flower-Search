var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flowerSchema = new Schema({
    name: {
        type: String
    },
    season: {
        type: String,
        enum: ['winter', 'spring', 'summer', 'fall']
    },
    light: {
        type: String,
        enum: ['full sun', 'partial shade', 'full shade']
    },
    //reviews: [reviewSchema]
    googleId: String
});

// var reviewSchema = new Schema({
//     content: {
//         type: String
//     },
//     weeksLasted: {
//         type: Number,
//         default: 2
//     }
//     }, {
//     timestamps: true
//   });


module.exports = mongoose.model('Flower', flowerSchema);
