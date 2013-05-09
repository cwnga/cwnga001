var fbsdk = require('facebook-sdk');

var facebook = new fbsdk.Facebook({
    appId: '131312693729634',
      secret: '6f4f0d49fc9e7481d661215eeb4742ef'

});

facebook.api('/131312693729634', function(data) {
      console.log(data);
});
