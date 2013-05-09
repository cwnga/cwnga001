YUI.add('FacebookLib', function(Y, NAME) {
    Y.namespace('FacebookLib').FacebookLib = {
        get_profile: function(facebook, callback) {
            //req.facebook.api('/me', function(err, user) {
            facebook.api('/me', function(err, user) {
                callback(user);
            });
        },
        get_event: function(facebook, until_time, limit, callback) {
            facebook.api("/me/events?until=" + until_time + "&limit=" + limit, function(err, data) {
                callback(data);
            });
        },
        cancel_event: function(facebook, id, callback) {
            facebook.api("/"+id, 'delete', function(err, data) {
                console.log(data);
                callback(data);
            });
        }




    }
}, '0.0.1', {
    requires: []
});
