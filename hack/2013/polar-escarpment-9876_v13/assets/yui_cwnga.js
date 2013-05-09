YUI.add('ws', function(Y) {
    Y.namespace('ws').send = function(callback) {
        url = Y.namespace('ws').url;
        var n = url.indexOf("?");
        console.log("n:" + n);
        if (n != -1) {
            ///if ?
            url = Y.namespace('ws').url + '&callback={callback}';
        } else {
            ///if no ?
            url = Y.namespace('ws').url + '?callback={callback}';
        }
        Y.jsonp(url, callback);
    };
    Y.namespace('ws').setUrl = function($url) {
        Y.namespace('ws').url = $url;
    }
}, '0.0.1', {
    requires: ['node', 'jsonp', 'node-base']
});
YUI().use('ws', 'node', function(Y) {
    node = Y.one("#delete_fb_btn");
    if (node) {
        node.on('click', function(e) {
            id = node.getAttribute('event_id');
            Y.namespace('ws').setUrl('http://wifi-wpa2-139.tpcity.corp.yahoo.com:3000/facebook_event_cancel_ws?id=' + id);
            Y.namespace('ws').send(test);
        });
        test = function(data) {
            console.log(data);
            location.replace('http://wifi-wpa2-139.tpcity.corp.yahoo.com:3000/facebook_event_frame');
        };

    }
    all_list = Y.one("#all_list");
    if (all_list) {
        setEventId = function(e) {
            obj_id = e.target.get('id');
            console.log(obj_id);
            node = Y.one("#" + obj_id);
            d_node = Y.one("#delete_fb_btn");
            if (node) {
                event_id = node.getAttribute('event_id');
                console.log(event_id);
                d_node.setAttribute('event_id', event_id);

            }
            //jsonString = e.target._node.dataset.info;
            //jsonString = jsonString.replace(/'/gi, "\"");
            //console.log(jsonString);
        }
        all_list.delegate('click', setEventId, 'div');
    }

});
