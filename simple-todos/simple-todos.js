Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
    // Code that only runs on client
    Template.body.helpers({
        tasks: function() {
            if (Session.get('hideCompleted')) {
                return Tasks.find({
                    checked: {
                        $ne: true
                    }
                }, {
                    sort: {
                        createdAt: -1
                    }
                });
            } else {
                return Tasks.find({}, {
                    sort: {
                        createdAt: -1
                    }
                });
            }
        },
        hideCompleted: function() {
            return Session.get('hideCompleted');
        },
        incompleteCount: function() {
            return Tasks.find({
                checked: {
                    $ne: true
                }
            }).count();
        }
    });

    Template.body.events({
        'submit .new-task': function(event) {
            // Prevents default browser form submit
            event.preventDefault();

            var text = event.target.text.value;

            Meteor.call('addTask', text);

            // Clear form
            event.target.text.value = '';
        }
    });

    Template.task.events({
        'click .toggle-checked': function() {
            Meteor.call('setChecked', this._id, !this.checked);
        },
        'click .delete': function() {
            Meteor.call('deleteTask', this._id);
        }
    });

    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });
}

Meteor.methods({
    addTask: function(text) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Tasks.insert({
            text: text,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },
    deleteTask: function(taskId) {
        Tasks.remove(taskId);
    },
    setChecked: function(taskId, setChecked) {
        Tasks.update(taskId, {
            $set: {
                checked: setChecked
            }
        });
    }
});

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}