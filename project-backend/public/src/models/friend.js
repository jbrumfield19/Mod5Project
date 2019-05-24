const Sequelize = require('sequelize');
const { STRING, INTEGER, BOOLEAN } = Sequelize;
const sequelize = require('./sequelize')
const Model = Sequelize.Model;
class Friend extends Sequelize.Model {}


Friend.init({
  name: Sequelize.STRING,
  status: Sequelize.STRING
}, { sequelize, modelName: 'friend' });


/*
class User extends Sequelize.Model {}
User.init({
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
}, { sequelize, modelName: 'user' });
*/

thingFunc = async () => {
    await Friend.sync()
 }
 thingFunc()
module.exports= Friend