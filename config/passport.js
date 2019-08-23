var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Flower = require('../models/flower');

var GoogleStrategy = require('passport-google-oauth20').Strategy;
// new code below
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in with OAuth...
  }
));

passport.serializeUser(function(flower, done) {

});
  
passport.deserializeUser(function(id, done) {

});