Template.yaksSubmit.events({
    'submit.yakSubmitForm': function(event) {
        event.preventDefault();

        var yak = event.target.yak.value;

        if (yak === '') {
            alert('You cannot insert an empty Yak.');
        } else {
            Meteor.call('yakInsert', yak);
            Router.go('yaksList');
        }
    }
});