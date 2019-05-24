const Sequelize = require('sequelize');
const { STRING, INTEGER, BOOLEAN } = Sequelize;
const Friend = require('./friend')



const sequelize = new Sequelize({
   dialect: 'sqlite',
   storage:'../db.sqlite'

});

const friendPost = sequelize.define('friendPost', 
{content:Sequelize.STRING,
});
friendPost.belongsTo(Friend)
async function thing(){
   await friendPost.sync()
}

sequelize.sync({force:true})
module.exports = friendPost