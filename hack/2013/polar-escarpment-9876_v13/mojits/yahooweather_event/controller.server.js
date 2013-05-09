/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('yahooweather_event', function(Y, NAME) {

    /**
     * The yahooweather_event module.
     *
     * @module yahooweather_event
     */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.models.get('yahooweather_eventModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                test = function(body) {
                    console.log("start!!!");
                    console.log(body);
                    console.log("end");
                    ac.done({
                        data: body
                    });
                }
                Y.namespace('YahooLib').YahooLib.get_weather(test);
            });
        }

    };

}, '0.0.1', {
    requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'yahooweather_eventModelFoo', 'YahooLib']
});
