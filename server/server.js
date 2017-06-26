var express = require("express");
var app = express();
var path = require('path');
var db = require('./db');


app.use(express.static(path.join(__dirname, '../')));

app.get('/', function(req,res){
  //console.log(__dirname)//__dirname === /app/server
  //res.send(__dirname)
  //res.sendFile(path.join(__dirname, '../client/index.html'));
});

db.User.create({
  Username: 'testname',
  Email: 'testname@whatever.com'
});

  app.listen(process.env.PORT || 3000, function(){
    console.log("listening on process.environment.port or listening on 3000");
  });
