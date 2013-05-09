/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('facebook', function(Y, NAME) {

    /**
     * The facebook module.
     *
     * @module facebook
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
            ac.models.get('facebookModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                var req = ac.http.getRequest();
                req.facebook.api('/me', function(err, user) {
                    user = JSON.stringify(user);
                    ac.done({
                        status: 'Mojito is working.',
                        data: user
                    });

                });
            });
        }

    };

}, '0.0.1', {
    requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'facebookModelFoo', 'mojito-cookie-addon', 'mojito-http-addon']
});
