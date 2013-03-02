var PORT = 9000;

var express = require("express");
var app = express();
app.configure(function() {
    app.use(express.logger());
    app.use(express.static(__dirname + '/public'));
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs'); //extension of views
});

// special handling of the root folder
app.get("/", function(req, res) {
    res.render('index.ejs', {
        layout: false
    });
});
// startup this server
app.listen(PORT);
