var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('./db');

app.use(express.static(path.join(__dirname, '../')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ secret: 'pondFinder' }));

app.get('/', (req, res) => {
  //console.log(__dirname)//__dirname === /app/server
  //res.send(__dirname)
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '/../signup.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/../login.html'));
});

app.get('/logout', (req, res) => {
  req.session.destroy( () => {
    res.sendFile(path.join(__dirname, '/../login.html'));
  });
});
// Four potential views:
// - landing/home page with map (GET, maybe POST)
// - user profile page (enable PUT/POST requests for updates?)
// - login page (GET/POST)
// - signup page (GET/POST)

app.post('/login', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  db.User.findOne({
    where: {
      username: username,
      password: password
    }
  })
  .then((user) => {
    if(user) {
      req.session.regenerate(() => {
        req.session.user_id = user.dataValues.id;
        res.sendFile(path.join(__dirname, '/../index.html'));
      });
    } else {
      res.sendFile(path.join(__dirname, '/../signup.html'));
    }
  });
});

app.post('/signup', (req, res) => {
    db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      home_city: req.body.home_city
    });
    res.sendFile(path.join(__dirname, '/../index.html'));
});

app.post('/user', function(req, res) {
  // request for a user profile page
  res.render('/user');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("listening on process.environment.port or listening on 3000");
});
