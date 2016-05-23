var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "./client")));
app.get('/', function(req, res) {
  res.send("<h1>Hello World!</h1>");
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})