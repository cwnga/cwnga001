/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('facebook_user', function(Y, NAME) {

    /**
     * The facebook_user module.
     *
     * @module facebook_user
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
            ac.models.get('facebook_userModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                var req = ac.http.getRequest();
                Y.namespace('FacebookLib').FacebookLib.get_profile(req.facebook, function(data) {
                    /*
                     *  id: '1188801045',
                     *    name: 'Ngchiwa Ng',
                     *      first_name: 'Ngchiwa',
                     *        last_name: 'Ng',
                     *          link: 'http://www.facebook.com/ngchiwa.1105',
                     */
                    ac.done({
                        data: data
                    });

                });
                //req.facebook.api('/me', function(err, user) {
                //    user = JSON.stringify(user);
                //    ac.done({
                //        status: 'Mojito is working.',
                //        data: user
                //    });
                //});
            });
        }

    };

}, '0.0.1', {
    requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'facebookModelFoo', 'mojito-cookie-addon', 'mojito-http-addon', 'FacebookLib']
});
