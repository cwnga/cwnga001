  var express = require("express");
    var app = express();
port = 1337;

app.listen(port);

app.get('/', function(req, res) {
	res.send('hello world<script>alert(\'hihi\')</script>');
});

console.log('start express server\n');

