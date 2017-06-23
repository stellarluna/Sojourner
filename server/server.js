var express = require("express");
var app = express();
var path = require('path')


app.use(express.static(path.join(__dirname, '../compiled/')));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '../client/index.html'));
})

  app.listen(process.env.PORT || 3000, function(){
    console.log("listening on process.environment.port or listening on 3000");
  });
