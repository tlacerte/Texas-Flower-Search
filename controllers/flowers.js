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
    myFlowers: []
  });
}

function create(req, res) {
  let newFlower = new Flower(req.body);
  console.log('LINE 37 IS A PARTY ::::\n', newFlower)
  newFlower.save(function(err, flower){
    if (err) {
      console.error(err)
      return res.render('flowers/new'); 
    }
    console.log(flower);
    res.redirect('/flowers')
  })
}