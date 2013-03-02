
///< get url
YUI.add('cwnga', function (Y) {
    Y.namespace('CWNGA').getUrlContent = function (url) {
        Y.YQLRESTClient.request({
            method: 'get',
            //url: 'http://tw.serviceplus.yahoo.com'
            //url: 'http://tw.serviceplus.yahoo.com/rss/ws_rss'
            url: url
        }, function(result) {
                alert(result.response);
            });
        };
}, '0.0.1', {requires: ['node', 'gallery-yql-rest-client']});