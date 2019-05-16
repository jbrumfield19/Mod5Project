var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/friends', function(req, res, next) {
  res.json(getFriendsFromDatabase())
  res.render('index', { title: 'Express' });
});

module.exports = router;
