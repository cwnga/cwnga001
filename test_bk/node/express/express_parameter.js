/**
 * @overview
 *
 * @author Caesar Chi
 * @blog clonn.blogspot.com
 * @version 2012/02/26
 */

// create server.
var express = require("express");
var app = express();
port = 1337;

app.listen(port);

// normal style
app.get('/', function(req, res) {
	res.send('hello world');
});

app.get('/test', function(req, res) {
	res.send('test render');
});

// parameter style
app.get('/user/:id:id2', function(req, res) {
	res.send('user: ' + req.params);
});

app.get('/:number', function(req, res) {
	res.send('number: ' + req.params);
});

// REGX style
app.get(/^\/ip?(?:\/(\d{2,3})(?:\.(\d{2,3}))(?:\.(\d{2,3})))?/, function(req, res) {
	res.send(req.params);
});

app.get('*', function(req, res) {
	res.send('Page not found!', 404);
});

console.log('start express server\n');

