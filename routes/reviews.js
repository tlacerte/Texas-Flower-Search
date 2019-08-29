var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/flowers/:id/reviews', isLoggedIn, reviewsCtrl.create);
router.get('/reviews/:id/edit/:idx', isLoggedIn, reviewsCtrl.edit);
router.post('/reviews/:id/update/:idx', isLoggedIn, reviewsCtrl.update);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;