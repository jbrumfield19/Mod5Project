var express = require('express');
var router = express.Router();
var Friend = require('../models/friend')
var languageProcessor = require('../index')
var pry = require('pryjs')
const tumblr = require('tumblr.js');
const client = tumblr.createClient({
  consumer_key: 'fMSKqonfriPsME1WQ7mwDi0Qqq1hYXv6I7uXmbcnG8hrixqExd',
  consumer_secret: 'NGt2IifxB33JaCQ7KuaEiYoA3lqXh4mQ4bVeyO5JqWkI59RZec',
  token: 'jb4X76QKFXFDvIPBLeeghZIt24kT0r2bcQdMNmFaTavXI8PG97',
  token_secret: 'YCHA7vYB08CzZPMhyQZ2wvP4UCnUQdJJjQUZSLZEe7epVaSw7n'
});
router.get('/', function(req, res, next) {
    console.log('seven')
    client.userDashboard( async function(err, data) {
      //eval(pry.it)
      const friends = await Promise.all(data.posts.map(post => Friend.create({"name":post.blog_name, status:languageProcessor(post.summary), user_id:1})))
      res.json(friends)
    });
});



  
    client.userInfo(function(err, data) {
      // console.log(data)
        // data.forEach(post => console.log(post) )
        
      });
//  console.log(client)


    module.exports = router