///< var port = process.env.PORT || 3000;
///< var connect = require('connect'),
///<     fbsdk = require('facebook-sdk');
///<
///< connect().use(connect.cookieParser()).use(connect.bodyParser()).use(fbsdk.facebook({
///<     appId: '131312693729634',
///<     secret: '6f4f0d49fc9e7481d661215eeb4742ef'
///< })).use(function(req, res, next) {
///<
///<     if (req.facebook.getSession()) {
///<         res.end('<a href="' + req.facebook.getLogoutUrl() + '">Logout</a>');
///<
///<         // get my graph api information
///<         req.facebook.api('/me', function(me) {
///<
///<             console.log(me);
///<         });
///<
///<     } else {
///<         res.end('<a href="' + req.facebook.getLoginUrl() + '">Login</a>');
///<     }
///<
///< }).listen(port);
//
var express = require("express");

var Facebook = require('facebook-node-sdk');




var app = express();

app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({
        secret: 'test'
    }));
    app.use(Facebook.middleware({
        appId: '131312693729634',
        secret: '6f4f0d49fc9e7481d661215eeb4742ef'
    }));
});

app.get('/', Facebook.loginRequired(), function(req, res) {
    req.facebook.api('/me', function(err, user) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Hello, ' + user.name + '!');
    });
});
app.use('/', express.static(__dirname + '/public'));
var port = process.env.PORT || 3000;
app.listen(port);
