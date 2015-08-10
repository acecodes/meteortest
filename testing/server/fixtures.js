if (Posts.find().count() === 0) {

    Posts.insert({
        title: 'This is a test post',
        author: 'Ace Eddleman',
        url: 'http://www.testing123.com'
    });

    Posts.insert({
        title: 'Another test post',
        author: 'Joe Blow',
        url: 'http://www.testing456.com'
    });

    Posts.insert({
        title: 'Yep, another test',
        author: 'Jane Blow',
        url: 'http://www.testing789.com'
    });
}