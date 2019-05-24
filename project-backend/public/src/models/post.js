const Sequelize = require('sequelize');
const { STRING, INTEGER, BOOLEAN } = Sequelize;
const User = require('./user')
const sequelize = new Sequelize({
   dialect: 'sqlite',
   storage:'../db.sqlite'

});
const Post = sequelize.define('Post', 
{content:Sequelize.STRING,
});
thingfunc = async ()=>{
   await Post.sync()
}
thingfunc()
sequelize.sync({force:true})
module.exports = Post