//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('<h1>Welcome to freshest and plum dev environment yet again!!</h1><br><h2>Some changes made!!</h2>');
});
//listen to port 3000 by default
app.listen(process.env.PORT ||  3000);
 
module.exports = app;
