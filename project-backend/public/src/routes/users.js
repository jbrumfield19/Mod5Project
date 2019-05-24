var express = require('express');
var router = express.Router();
var User = require('../models/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll()
  .then(users => res.json(users))

});
router.post('/', function(req,res){
  const user = new User(req.body)
  res.send(user)
});


  

module.exports = router;
