var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
    user_id: String,
    content: String,
    updated_at: Date
});

mongoose.model('Todo', Todo);
var Todo = mongoose.model('Todo');
var mongoUri = 'mongodb://heroku_app15541971:s0gvn8oidj1n3dv9t8p4vpd43a@ds061747.mongolab.com:61747/heroku_app15541971';
mongoose.connect(mongoUri);

exports.index = function(user_id, res, callback) {
    Todo.
    find({
        user_id: user_id
    }).
    sort('-updated_at').
    exec(function(err, todos, count) {
        if (err) return callback(err);
        callback(todos);
    });
};

exports.create = function(user_id, content, next) {
    new Todo({
        user_id: user_id,
        content: content,
        updated_at: Date.now()
    }).save(function(err, todo, count) {
        if (err) return next(err);
        next(todo);
    });
};

exports.destroy = function(id, next) {
    Todo.findById(id, function(err, todo) {

        todo.remove(function(err, todo) {
            if (err) return next(err);
            next(todo);
        });
    });
};

exports.get = function(user_id, next) {
    Todo.
    find({
        user_id: user_id
    }).
    sort('-updated_at').
    exec(function(err, todos) {
        if (err) return next(err);
        next(todos);
    });
};

exports.update = function(content, next) {
    Todo.findById(req.params.id, function(err, todo) {
        todo.content = content;
        todo.updated_at = Date.now();
        todo.save(function(err, todo, count) {
            if (err) return next(err);
            next(todos);
        });
    });
};
