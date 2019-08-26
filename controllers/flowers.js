var Flower = require('../models/flower');

module.exports = {
  index,
  new: newFlower,
  user: userPage,
  create
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
    res.render('flowers/new', {
      user: req.user,
      name: req.query.name,
    });
}

function userPage(req, res) {
  res.render('flowers/user', {
    user: req.user,
    name: req.query.name,
  });
}

function create(req, res) {
  var flower = new Flower(req.body);
  flower.save(function(err){
    if (err) return res.render('flowers/new');
    console.log(flower);
    res.redirect('/flowers')
  })
}