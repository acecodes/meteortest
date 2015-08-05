var postsData = [{
    title: 'This is a test post',
    author: 'Ace Eddleman',
    url: 'http://www.testing123.com'
}, {
    title: 'Another test post',
    author: 'Joe Blow',
    url: 'http://www.testing456.com'
},{
    title: 'Yep, another test',
    author: 'Jane Blow',
    url: 'http://www.testing789.com'
}
];

Template.postsList.helpers({
    posts: postsData
});