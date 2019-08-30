var Flower = require('../models/flower');
var User = require('../models/user')

module.exports = {
  index,
  new: newFlower,
  user: userPage,
  create,
  addFavorite,
  delete: deleteFlower,
  show
};

//load main flowers page - ejs loops through all flowers
function index(req, res) {
    Flower.find({}, function(err, flowers) {
        res.render('flowers/index', { 
          flowers,
          user: req.user,
          name: req.query.name,
        });
    });
  }  

//renders the add a new flower page  
function newFlower(req, res) {
    res.render('flowers/new', {
      user: req.user,
      name: req.query.name,
    });
}

//renders the user page with all of the favorite flowers of the user
async function userPage(req, res) {
  let user = await User.findOne({googleId: req.user.googleId}).populate('myFlowers')
  let flower = await Flower.find({})
  //console.log(user.myFlowers)
  res.render('flowers/user', {
    user: req.user,
    name: req.user.name,
    flower,
    user
  });
}

//function to add a flower and return to the main index flower page
function create(req, res) {
  let newFlower = new Flower(req.body);
  newFlower.save(function(err, flower){
    if (err) {
      console.error(err)
      return res.render('flowers/new'); 
    }
    //console.log(flower);
    res.redirect('/flowers')
  })
}

//when button add to my flowers is clicked, redirect to usre page and add that flower
function addFavorite(req, res){
  console.log(req.body)
  let newFlower = req.body._id;
  let user = req.user;
  user.myFlowers.push(newFlower);
  user.save(function(err, flower){
    //console.log(req.user);
    res.redirect('/flowers/user')
  });
}

//delete a flower from the my flowers user page
async function deleteFlower(req, res) {
  let user = await User.findOne({googleId: req.user.googleId});
  let idx = req.params.id;
  //console.log(idx)
  user.myFlowers.splice(idx, 1);
  user.save(function(err){
    res.redirect('/flowers/user')
  });
}

//render show page
function show(req, res){
  Flower.findById(req.params.id, function(err, flower) {
    //console.log(flower);
    res.render('flowers/show', {
      user: req.user,
      name: req.query.name,
      flower
    });
  })
}
