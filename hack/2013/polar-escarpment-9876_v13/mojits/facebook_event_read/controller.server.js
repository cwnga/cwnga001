/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('facebook_event_read', function(Y, NAME) {

    /**
     * The facebook_event_read module.
     *
     * @module facebook_event_read
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
            ac.models.get('facebook_event_readModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                callback_weather = function(weather_result) {
                    combine_weather_event = {};
                    weather_data = {};
                    tmp_day_weather = {};

                    for (i in weather_result.query.results.item.forecast) {
                        if (weather_result.query.results.item.forecast[i] != undefined) {
                            date_data = weather_result.query.results.item.forecast[i].date;
                            d = new Date(date_data);
                            month = d.getMonth() + 1;
                            month = Y.namespace('CommonLib').CommonLib.getMonthDigit(month);
                            day = d.getDate();
                            day = Y.namespace('CommonLib').CommonLib.getDayDigit(day);
                            year = d.getFullYear();
                            code = weather_result.query.results.item.forecast[i].code;
                            weather_result.query.results.item.forecast[i].weather_img = "http://l.yimg.com/a/i/us/we/52/" + code + ".gif";
                            tmp_day_weather["y-" + year + "-" + month + "-" + day] = weather_result.query.results.item.forecast[i];
                        }
                    }
                    /*{
                        y_2013_5_9: {
                            code: '47',
                            date: '9 May 2013',
                            day: 'Thu',
                            high: '84',
                            low: '74',
                            text: 'Isolated Thunderstorms'
                        },
                        }*/
                    //console.log(tmp_day_weather);
                    /*
"facebook_event_data":
{ name: '登高一呼',
       start_time: '2012-07-28T08:00:00+0800',
       timezone: 'Asia/Taipei',
       location: '新光三越 台北站前店',
       id: '441485705872744',
       rsvp_status: 'attending'
},

*/
                    default_weather_img = "http://www.appcob.com/upload/20130204/date%20status%20bar_www.appcob.com_.jpg";

                    Y.namespace('FacebookLib').FacebookLib.get_event(req.facebook, five_date_after_time, limit, function(data) {
                        tmp_facebook_data = {};
                        event_data = data.data;
                        for (i in event_data) {
                            if (event_data[i] != undefined) {
                                key = "y-" + event_data[i].start_time;
                                key = Y.namespace('CommonLib').CommonLib.getFacebookNormalDateFormat(key);
                                tmp_facebook_data[key] = event_data[i];
                            }
                        }

                        //console.log(tmp_facebook_data);
                        /*
                         *
  'y-2009-03-15':
   { name: '澳門大學畢業生拍攝畢業相',
     start_time: '2009-03-15T09:00:00',
     end_time: '2009-03-15T18:00:00',
     location: 'University of Macau',
     id: '56620865950',
     rsvp_status: 'unsure' }*/
                        aid = 1;
                        for (i in tmp_day_weather) {
                            tmp_day_weather[i].aid = aid;
                            aid++;
                            tmp_day_weather[i].low = Y.namespace('CommonLib').CommonLib.convertFtoC(tmp_day_weather[i].low);
                            tmp_day_weather[i].high = Y.namespace('CommonLib').CommonLib.convertFtoC(tmp_day_weather[i].high);
                            if (tmp_facebook_data[i] != undefined) {
                                for (j in tmp_facebook_data[i]) {
                                    tmp_day_weather[i][j] = tmp_facebook_data[i][j];
                                }
                            } else {
                                tmp_day_weather[i].name = '';
                                tmp_day_weather[i].start_time = '';
                                tmp_day_weather[i].end_time = '';
                                tmp_day_weather[i].location = '';
                                tmp_day_weather[i].id = '';
                                tmp_day_weather[i].rsvp_status = '';

                            }
                        }

                        result = {
                            data: tmp_day_weather
                        };
                        console.log(data);
                        console.log(result);
                        ac.done(result);
                    });
                }
                Y.namespace('YahooLib').YahooLib.get_weather(callback_weather);
                var req = ac.http.getRequest();
                var d = new Date();
                d.setDate(d.getDate() + 5);
                var five_date_after_time = Math.round(d / 1000);
                limit = 25;
            });
        }

    };

}, '0.0.1', {
    requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'facebook_event_readModelFoo', 'FacebookLib', 'mojito-http-addon', 'YahooLib', 'CommonLib']
});
