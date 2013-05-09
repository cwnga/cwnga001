/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('facebook_html_frame', function(Y, NAME) {

/**
 * The facebook_html_frame module.
 *
 * @module facebook_html_frame
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
            ac.models.get('facebook_html_frameModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                   ac.composite.done();
                 //ac.done({app_name:'Framed Mojit'});
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'facebook_html_frameModelFoo','mojito-composite-addon']});
