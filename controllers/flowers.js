var Flower = require('../models/flower');

module.exports = {
  index,
  new: newFlower,
  user: userPage
};

function index(req, res) {
    Flower.find({}, function(err, flowers) {
        res.render('flowers/index', { 
          flowers,
          user: req.user,
          name: req.query.name,
          //sortKey
        });
    });
  }  

function newFlower(req, res) {
    res.render('flowers/new');
}

function userPage(req, res) {
  res.render('flowers/user');
}