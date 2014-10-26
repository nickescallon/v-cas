var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', 3000); //change to process.ENV
app.use(express.static(path.join(__dirname, 'public')));

//routes

//catchAll
app.get('*', function (req, res) {
  res.sendFile('/public/index.html');
});

var server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log('app listenting on port: ' + app.get('port'));
});