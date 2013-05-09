var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
    user_id: String,
    content: String,
    updated_at: Date
});

mongoose.model('Todo', Todo);

var mongoUri = 'mongodb://heroku_app15541971:s0gvn8oidj1n3dv9t8p4vpd43a@ds061747.mongolab.com:61747/heroku_app15541971';
mongoose.connect(mongoUri);

var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

Todo({
    user_id: "user_id001",
    content: "test",
    updated_at: Date.now()
}).save(function(err, todo, count) {
    console.log("insert");
    Todo.find(function(err, todos, count) {
        console.log(todos);
        return;
    });

});




//Todo.find(function(err, todos, count) {
//    console.log(todos);
//});
