YUI.add('serviceplus', function(Y) {
    //    url = 'http://f0.adp.tw1.yahoo.com/rss/ws_rss?format=jsonp&callback={callback}';
    //    url = 'http://f0.adp.tw1.yahoo.com/rss/ws_rss?format=jsonp&callback={callback}';
    Y.namespace('serviceplus');
    Y.serviceplus.get_data = function(keywords, callback) {
        url = 'http://f0.adp.tw1.yahoo.com/rss/ws_rss?format=jsonp&callback={callback}';
        console.log(url);
        Y.jsonp(url, callback);
    }
}, '0.0.1', {
    requires: ["jsonp", "node"]
});

YUI().use('serviceplus', function(Y) {
    Y.serviceplus.srp_data = '';

    function genDiv(response) {
        test = false;
        if (test == true) {

            section_string = "<section class='slides layout-regular template-default'><article class='biglogo'></article></section>";

            Y.one("#renderdiv").setHTML(section_string);
            handleDomLoaded();
            return;
        }


        Y.serviceplus.srp_data = response;
        console.log(Y.serviceplus.srp_data);
        section_string = '';
        for (i in response.result) {
            imageJson = JSON.parse(response.result[i].images);
            imgsrc = JSON.stringify(imageJson.large.url);
            template_string = "<article>" + "<img width=100% src=" + imgsrc + ">" + "</article>\n";
            section_string = section_string + template_string;
        }
        section_string = "<section class='slides layout-regular template-default'>\n" + section_string + "</section>";
        //section_string = "<section class='slides layout-regular template-default'><article class='biglogo'></article></section>";
        Y.one("#renderdiv").setHTML(section_string);
        handleDomLoaded();
        setInterval("nextSlide()", 2000);

    }
    Y.serviceplus.get_data('', genDiv);

});
