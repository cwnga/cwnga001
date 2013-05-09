/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('facebook_html_frameModelFoo', function(Y, NAME) {

/**
 * The facebook_html_frameModelFoo module.
 *
 * @module facebook_html_frame
 */

    /**
     * Constructor for the facebook_html_frameModelFoo class.
     *
     * @class facebook_html_frameModelFoo
     * @constructor
     */
    Y.namespace('mojito.models')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(callback) {
            callback(null, { some: 'data' });
        }

    };

}, '0.0.1', {requires: []});
