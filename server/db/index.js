var Sequelize = require('sequelize');

var db = new Sequelize('sojourner', 'valt', '', {
    host: 'localhost',
    dialect: 'postgres'
});

db.authenticate()
.then(() => {
    console.log('successfully connected!');
})
.catch((err) => {
    console.log('Error connection: ', err);
});

var User = db.define('User', {
    'Username': Sequelize.STRING,
    'Email': Sequelize.STRING
});

User.sync();