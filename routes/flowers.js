var express = require('express');
var router = express.Router();
var flowersCtrl = require('../controllers/flowers');
var passport = require('passport');

router.get('/', isLoggedIn, flowersCtrl.index);
router.get('/new', isLoggedIn, flowersCtrl.new);
router.get('/user', isLoggedIn, flowersCtrl.user);
router.get('/:id', isLoggedIn, flowersCtrl.show);
router.post('/', isLoggedIn, flowersCtrl.create);
router.post('/user', isLoggedIn, flowersCtrl.addFavorite);
router.delete('/user/:id', isLoggedIn, flowersCtrl.delete);

function isLoggedIn(req, res, next) {
   if ( req.isAuthenticated() ) return next();
   res.redirect('/auth/google');
 }
 
module.exports = router;