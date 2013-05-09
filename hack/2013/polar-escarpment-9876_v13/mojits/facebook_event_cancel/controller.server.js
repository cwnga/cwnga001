/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('facebook_event_cancel', function(Y, NAME) {

    /**
     * The facebook_event_cancel module.
     *
     * @module facebook_event_cancel
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

        display: function(ac) {
            ac.models.get('facebook_event_cancelModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'Mojito is working. display',
                    data: data
                });
            });
        },
        ws: function(ac) {

            ac.models.get('facebook_event_cancelModelFoo').getData(function(err, data) {

                var rep = ac.http;
                rep.setHeader("Content-type", "application/javascript; charset=utf-8");
                if (err) {
                    ac.error(err);
                    return;
                }
                var req = ac.http.getRequest();

                parameter = Y.namespace('CommonLib').CommonLib.getAllParams(ac);
                console.log(parameter);
end = function(data) {
                    ac.assets.addCss('./index.css');
                    ac.done({
                        data: data
                    });
                };

                id = parameter['id'];
                if (id!= undefined && id != null && id != 'undefined') {
                    Y.namespace('FacebookLib').FacebookLib.cancel_event(req.facebook, id, function(data) {
                        console.log('delete id:' + id);
                        console.log('delete data:' + data);

                        data = {
                            result: data
                        };
                        data = '';
                        if (parameter.callback != undefined) {
                            data = parameter.callback + "(true)";
                        }
                           end(data);
                    });
                } else {
                    data = '';
                    if (parameter.callback != undefined) {
                        data = parameter.callback + "(false)";
                    }
                    end(data);
                }
            });
        },




        index: function(ac) {
            ac.models.get('facebook_event_cancelModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        }

    };

}, '0.0.1', {
    requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'facebook_event_cancelModelFoo', 'FacebookLib', 'mojito-http-addon', 'YahooLib', 'CommonLib', 'mojito-params-addon']
});
