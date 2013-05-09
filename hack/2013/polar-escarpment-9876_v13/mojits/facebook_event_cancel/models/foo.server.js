/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('facebook_event_cancelModelFoo', function(Y, NAME) {

/**
 * The facebook_event_cancelModelFoo module.
 *
 * @module facebook_event_cancel
 */

    /**
     * Constructor for the facebook_event_cancelModelFoo class.
     *
     * @class facebook_event_cancelModelFoo
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
