var express = require('express');
var router = express.Router();
var flowersCtrl = require('../controllers/flowers');
var passport = require('passport');

router.get('/', flowersCtrl.index);
router.get('/new', isLoggedIn, flowersCtrl.new);
router.get('/user', isLoggedIn, flowersCtrl.user);

function isLoggedIn(req, res, next) {
   if ( req.isAuthenticated() ) return next();
   res.redirect('/auth/google');
 }
 
module.exports = router;