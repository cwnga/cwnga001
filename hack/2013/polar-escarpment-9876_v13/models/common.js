YUI.add('CommonLib', function(Y, NAME) {
    Y.namespace('CommonLib').CommonLib = {

        getMonthDigit: function(month) {
            var digit_month = ("0" + (month)).slice(-2);
            return digit_month;

        },
        getDayDigit: function(day) {
            var digit_day = ("0" + day).slice(-2);
            return digit_day;
        },
        getDayDigit: function(day) {
            var digit_day = ("0" + day).slice(-2);
            return digit_day;
        },
        getFacebookNormalDateFormat: function(date_str) {
            //"y-2009-03-15"
            var str = date_str.substring(0, 12);
            return str;
        },
        convertFtoC: function(d) {
            d = (d - 32) * (5 / 9);
            return d.toFixed(2);
        },
        getAllParams: function(actionContext) {
            var qs_params = [];
            var allParams = actionContext.params.getFromUrl();
            Y.Object.each(allParams, function(param, key) {
                qs_params[key] = param;
            });
            return qs_params;
        }

    }
}, '0.0.1', {
    requires: ['mojito-params-addon']
});
