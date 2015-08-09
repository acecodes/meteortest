Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
    // Code that only runs on client
    Template.body.helpers({
        tasks: function() {
            return Tasks.find({}, {sort: {createdAt: -1}});
        }
    });

    Template.body.events({
        'submit .new-task': function(event) {
            // Prevents default browser form submit
            event.preventDefault();

            var text = event.target.text.value;

            Tasks.insert({
                text: text,
                createdAt: new Date()
            });

            // Clear form
            event.target.text.value = '';
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
