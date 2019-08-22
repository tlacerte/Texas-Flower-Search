var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flowerSchema = new Schema({
    name: {
        type: String
    },
    season: {
        type: String,
        enum: ['Winter', 'Spring', 'Summer', 'Fall']
    },
    light: {
        type: String,
        enum: ['Full Sun', 'Partial Shade', 'Full Shade']
    },
    //reviews: [reviewSchema]
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
