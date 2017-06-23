var express = require("express");
var app = express();

app.use(express.static(__dirname + 'client'));

app.get('/', function(req,res){
  res.send('we are inside app.get')
})




app.listen(process.environment.port || 3000, function(){
  console.log("listening on process.environment.port or listening on 3000")
})


