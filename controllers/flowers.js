var Flower = require('../models/flower');

module.exports = {
  index,
  new: newFlower,
};

function index(req, res) {
    Flower.find({}, function(err, flowers) {
        res.render('flowers/index', { flowers });
    });
  }  

function newFlower(req, res) {
    res.render('flowers/new');
}