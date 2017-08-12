var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.post("/api/blogpost", createPost);

function createPost(req, res){
  console.log("hello from server createPost9");
}

console.log("listening on port 3000");
app.listen(3000);
