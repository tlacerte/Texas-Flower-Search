var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/flowers');
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/flowers',
    failureRedirect : '/flowers'
  }
));
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/flowers');
});

module.exports = router;
