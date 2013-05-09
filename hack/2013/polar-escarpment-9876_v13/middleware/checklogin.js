///<   var Facebook = require('facebook-node-sdk');
///<   Facebook.middleware({
///<       appId: '131312693729634',
///<       secret: '6f4f0d49fc9e7481d661215eeb4742ef'
///<   });
///<
///<
///<   module.exports = Facebook.loginRequired();
test = function() {

    var express = require("express");

    var Facebook = require('facebook-node-sdk');



    var app = express();

    app.configure(function() {
        app.use(express.bodyParser());
        app.use(express.cookieParser());
        app.use(express.session({
            secret: 'test'
        }));
        app.use(Facebook.middleware({
            appId: '131312693729634',
            secret: '6f4f0d49fc9e7481d661215eeb4742ef',
            // scope: 'create_event,rsvp_event,user_events'
            scope: 'create_event,email,friends_about_me,friends_actions.books,friends_actions.music,friends_actions.news,friends_actions.video,friends_activities,friends_birthday,friends_education_history,friends_events,friends_games_activity,friends_groups,friends_hometown,friends_interests,friends_likes,friends_location,friends_notes,friends_photo_video_tags,friends_photos,friends_questions,friends_relationship_details,friends_relationships,friends_religion_politics,friends_status,friends_subscriptions,friends_videos,friends_website,friends_work_history,publish_actions,rsvp_event,user_about_me,user_actions.books,user_actions.music,user_actions.news,user_actions.video,user_activities,user_birthday,user_education_history,user_events,user_games_activity,user_groups,user_hometown,user_interests,user_likes,user_location,user_notes,user_photo_video_tags,user_photos,user_questions,user_relationship_details,user_relationships,user_religion_politics,user_status,user_subscriptions,user_videos,user_website,user_work_history'
        }));
    });

    app.get('/', Facebook.loginRequired(), function(req, res) {
        req.facebook.api('/me', function(err, user) {
            console.log(user);
        });
    });

    return Facebook.loginRequired();

}

var Facebook = require('facebook-node-sdk');
module.exports = Facebook.loginRequired({
    appId: '131312693729634',
    secret: '6f4f0d49fc9e7481d661215eeb4742ef',
    scope: 'create_event,email,friends_about_me,friends_actions.books,friends_actions.music,friends_actions.news,friends_actions.video,friends_activities,friends_birthday,friends_education_history,friends_events,friends_games_activity,friends_groups,friends_hometown,friends_interests,friends_likes,friends_location,friends_notes,friends_photo_video_tags,friends_photos,friends_questions,friends_relationship_details,friends_relationships,friends_religion_politics,friends_status,friends_subscriptions,friends_videos,friends_website,friends_work_history,publish_actions,rsvp_event,user_about_me,user_actions.books,user_actions.music,user_actions.news,user_actions.video,user_activities,user_birthday,user_education_history,user_events,user_games_activity,user_groups,user_hometown,user_interests,user_likes,user_location,user_notes,user_photo_video_tags,user_photos,user_questions,user_relationship_details,user_relationships,user_religion_politics,user_status,user_subscriptions,user_videos,user_website,user_work_history'
});
