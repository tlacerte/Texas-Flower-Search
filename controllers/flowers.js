var Flower = require('../models/flower');
var User = require('../models/user')

module.exports = {
  index,
  new: newFlower,
  user: userPage,
  create,
  addFavorite
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

async function userPage(req, res) {
  let user = await User.findOne({googleId: req.user.googleId}).populate('myFlowers')
  let flower = await Flower.find({})
  console.log(user.myFlowers)
  res.render('flowers/user', {
    user: req.user,
    name: req.user.name,
    flower,
    user
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

function addFavorite(req, res){
  console.log(req.body)
  let newFlower = req.body._id;
  let user = req.user;
  user.myFlowers.push(newFlower);
  user.save(function(err, flower){
    console.log(req.user);
    res.redirect('/flowers/user')
  });
}