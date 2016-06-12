var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');

var app  = express();

app.use(bodyParser.urlencoded({
	extended: true
}));
 
app.use(bodyParser.json({
}));

var router = express.Router();

app.use(express.static(path.join(__dirname, '../client')));

var server = http.createServer(app);

app.set('server', server);

console.log('Listening on port 80');

app.get('server').listen(process.env.PORT || 80);