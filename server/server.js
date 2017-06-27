var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var db = require('./db');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));
app.use(passport.initialize());
app.use(session({ secret: 'pondFinder' }));
app.use(passport.session());
app.use(flash());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {
    // check in postgres database through Sequelize if a user
    // with username exists or not
    db.User.findOne({ 'username': username }, function(err, user) {
      if (err) {
        console.error("=== ERROR ===", err);
        return done(err);
      }
      if (!user) {
        console.log('=== User Not Found ===');
        return done(null, false, req.flash('message', 'User Not Found'));
      }
      if (user.password !== password) {
        console.log('=== Incorrect Password ===');
        return done(null, false, req.flash('message', 'Incorrect Password'));
      }
      return done(null, user);
    });
}));

passport.use('signup', new LocalStrategy({
  passReqToCallback: true
  },
  function(req, username, password, done) {
    console.log('req.body', req.body);

    process.nextTick(db.User.findOne({ 'username': username }, function(err, user) {
      if (err) {
        // if error
        console.error("=== ERROR ===", err);
        return done(err, null, req.flash('message', 'Error'));
      }
      if (user) {
        // if user already exists in database
        console.log('=== User Already Exists ===');
        return done(null, false, req.flash('message', 'User Already Exists'));
      } else {
        // successful signup
        var newUser = db.User.Create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        });
        console.log('SUCCESSFUL SIGNUP!!!');
        done(null, newUser, req.flash('message', 'User Created'));
      }
    }));
  }
));

app.get('/', function(req, res){
  //console.log(__dirname)//__dirname === /app/server
  //res.send(__dirname)
  //res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Four potential views:
// - landing/home page with map (GET, maybe POST)
// - user profile page (enable PUT/POST requests for updates?)
// - login page (GET/POST)
// - signup page (GET/POST)

// app.post('/signup', function(req, res) {
//   db.User.Create({
//     first_name = req.body.first_name,
//     last_name = req.body.last_name,
//     username = req.body.username,
//     email = req.body.email,
//     password = req.body.password,
//     home_city = req.body.home_city
//   });
//   res.send('User created');
//   res.redirect('/');
// });

app.post('/login',
  passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);

app.post('/signup',
  passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  })
);

app.post('/user', function(req, res) {
  // request for a user profile page
  res.render('/user');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("listening on process.environment.port or listening on 3000");
});
