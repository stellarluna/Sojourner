var express = require("express");
var app = express();
var path = require('path')


app.use(express.static(__dirname + '/../compiled'));

app.get('/', function(req,res){
///Users/seanbrock/greenfieldproject/server
  //res.sendFile('../client/index.html')
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
})




app.listen(process.env.PORT || 3000, function(){
  console.log("listening on process.environment.port or listening on 3000")
})


