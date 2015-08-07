Yaks = new Mongo.Collection('yaks');

Router.route('/', {name: 'yaksList'});
Router.route('/submit', {name: 'yaksSubmit'});