const Sequelize = require('sequelize');
const { STRING, INTEGER, BOOLEAN } = Sequelize;
const sequelize = require('./sequelize')
const Friend = require('./friend')




const User = sequelize.define('User', 
{name:Sequelize.STRING,
 status:Sequelize.STRING
});

User.hasMany(Friend)
Friend.belongsTo(User)

thingFunc = async () => {
   await User.sync()
}

thingFunc()
sequelize.sync({force:true})
module.exports = User