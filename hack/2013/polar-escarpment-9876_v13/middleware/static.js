///<   var Facebook = require('facebook-node-sdk');
///<   Facebook.middleware({
///<       appId: '131312693729634',
///<       secret: '6f4f0d49fc9e7481d661215eeb4742ef'
///<   });
///<
///<
///<   module.exports = Facebook.loginRequired();
test = function() {

    var express = require("express");

    var Facebook = require('facebook-node-sdk');



    var app = express();

    app.configure(function() {
        ap.euse(express.bodyParser());
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
            console.log(user);
        });
    });

    return Facebook.loginRequired();

}

var Facebook = require('facebook-node-sdk');
module.exports =
     Facebook.middleware({
        appId: '131312693729634',
        secret: '6f4f0d49fc9e7481d661215eeb4742ef'
    });
