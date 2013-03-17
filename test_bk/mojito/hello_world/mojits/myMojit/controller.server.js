
YUI.add('myMojit', function(Y, NAME) {

Y.namespace('mojito.controllers')[NAME] = {

index: function(ac) {
ac.done('Hello, world. I have created my first Mojito app at ' + (new Date()) + '.');
}

};
});


