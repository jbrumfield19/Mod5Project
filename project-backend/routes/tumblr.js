var express = require('express');
var router = express.Router();
var Friend = require('../public/src/models/friend')
var languageProcessor = require('../public/src/index')
  const tumblr = require('tumblr.js');
  const client = tumblr.createClient({
    consumer_key: 'fMSKqonfriPsME1WQ7mwDi0Qqq1hYXv6I7uXmbcnG8hrixqExd',
    consumer_secret: 'NGt2IifxB33JaCQ7KuaEiYoA3lqXh4mQ4bVeyO5JqWkI59RZec',
    token: 'jb4X76QKFXFDvIPBLeeghZIt24kT0r2bcQdMNmFaTavXI8PG97',
    token_secret: 'YCHA7vYB08CzZPMhyQZ2wvP4UCnUQdJJjQUZSLZEe7epVaSw7n'
  });
  client.userDashboard(function(err, data) {
      data.posts.forEach(post => Friend.create({name:post.blog_name, status:languageProcessor(post.summary)}) )
      
    });
//  console.log(client)


    module.exports = router