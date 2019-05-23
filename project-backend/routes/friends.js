var express = require('express');
var router = express.Router();
/* GET friends listing. */
router.get('/friends', function(req, res, next) {
  res.render(Friend.findAll);
});
router.post('/friends', function(req,res){
  const friend = new Friend(req.body)
  res.send(friend)
});