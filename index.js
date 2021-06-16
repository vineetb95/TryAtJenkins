//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('<h1>Server is up and running</h1><h2>Change 1: dev branch</h2> <h2>Change 2: Changed right now!!</h2>');
});
//listen to port 3000 by default
app.listen(process.env.PORT ||  3000);
 
module.exports = app;
