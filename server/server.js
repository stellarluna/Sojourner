var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var db = require('./db');

app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, '../')));
app.use(express.session({ secret: 'pondFinder' }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('/login', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {
    // check in postgres database through Sequelize if a user
    // with username exists or not
    db.User.findOne({ username: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, req.flash('message', 'User Not Found'));
      }
      if (!user.validPassword(user, password)) {
        return done(null, false, req.flash('message', 'Incorrect Password'));
      }
      return done(null, user);
    });
}));

passport.user('/signup', new LocalStrategy({
  passReqToCallback: true
  },
  function(req, username, password, done) {
    findOrCreateUser = function() {
      User.findOne({ username: username }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, false, req.flash('message', 'User Already Exists'));
        } else {
          var newUser = new User();

          newUser.update({
            username = username;
            password = createHash(password);
            email = req.body.email;
            first_name = req.body.first_name;
            last_name = req.body.last_name;
          });
        }
      })
    }
  }
))

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

app.post('/signup', function(req, res) {
  db.User.Create({
    first_name = req.body.first_name,
    last_name = req.body.last_name,
    username = req.body.username,
    email = req.body.email,
    password = req.body.password,
    home_city = req.body.home_city
  });
  res.send('User created');
  res.redirect('/');

});

app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
}));

app.post('/user', function(req, res) {
  // request for a user profile page
  res.render('/user');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("listening on process.environment.port or listening on 3000");
});
