var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.use('/dist',  express.static(__dirname + '/dist'));

//add routes - catch-all to return index.html

//server
var server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log('app listenting on port: ' + app.get('port'));
});
