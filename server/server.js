var express = require("express");
var app = express();
var path = require('path')


app.use(express.static(path.join(__dirname, '/client')));


app.listen(process.env.PORT || 3000, function(){
  console.log("listening on process.environment.port or listening on 3000")
});
