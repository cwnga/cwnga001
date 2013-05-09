YUI.add('YahooLib', function(Y, NAME) {
    Y.namespace('YahooLib').YahooLib = {
        get_weather: function(callback) {
            url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fxml.weather.yahoo.com%2Fforecastrss%2FTWXX0021_f.xml'&format=json&diagnostics=true&callback=";
            var request = require('request');
            request(url, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    //            console.log(body) // Print the google web page.
                    body = JSON.parse(body);
                    callback(body);
                }
            })
        }
    }
}, '0.0.1', {
    requires: []
});

///<  YUI.add('YahooLib', function(Y, NAME) {
///<      Y.namespace('YahooLib').YahooLib = {
///<          get_weather: function(cb) {
///<              url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fxml.weather.yahoo.com%2Fforecastrss%2FTWXX0021_f.xml'&format=json&diagnostics=true&callback=";
///<              var params = {
///<                  //i:"onions,garlic",
///<                  //q:"omelet",
///<                  //p:1
///<              };
///<              var config = {
///<                  timeout: 5000,
///<                  headers: {
///<                      'Cache-Control': 'max-age=0'
///<                  }
///<              };
///<              Y.mojito.lib.REST.GET(url, params, config, function(err, response) {
///<                  if (err) {
///<                      return cb(err);
///<                  }
///<                  cb(response._resp.responseText);
///<              });
///<          }
///<      };
///<  }, '0.0.1', {
///<      requires: ['mojito', 'mojito-rest-lib']
///<  });
