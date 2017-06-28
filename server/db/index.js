var Sequelize = require('sequelize');

var host = process.env.DATABASE_URL || 'localhost';
var db = new Sequelize('postgresql-vertical-97135', 'jbzmosqdkhkdex', 'bc831a5f7c5de8bbf5fbd46a104b6de497845f940fa3f139e70ebbf268b72597', {
  // ^database name and user name from heroku for production deployment
  // for local development, use whatever you name your database and 'root' for user
  host: host,
  // host: 'localhost',
  // for local development: host: 'localhost'
  // for heroku deployment/production: host: process.env.DATABASE_URL
  dialect: 'postgres'
});

db.authenticate()
.then(() => {
    console.log('successfully connected!');
})
.catch((err) => {
    console.log('Error connection: ', err);
});

// Sequelize creates the primary key, createdAt, and updatedAt
// values automatically.
var User = db.define('User', {
  'first_name': Sequelize.STRING,
  'last_name': Sequelize.STRING,
  'username': Sequelize.STRING,
  'email': Sequelize.STRING,
  'password': Sequelize.STRING,
  'home_city': Sequelize.STRING,
  // ^could also be current location (by IP address)
  // 'target_city': Sequelize.STRING,

  // interests
  'interest_1': Sequelize.STRING,
  'interest_2': Sequelize.STRING,
  'interest_3': Sequelize.STRING
});

// We initially created a separate table for Interests, but the
// Google Maps API is currently unable to search for multiple
// queries (can only render a single search term at a time).

// var Interests = db.define('Interests', {
//   'interest': Sequelize.STRING
// });

// var User_Interests = db.define('User_Interests', {
//   // foreign key
//   'user_id': Sequelize.INTEGER,
//   'interest_id': Sequelize.INTEGER
// });

// currently drops table if one already exists (for dev
// purposes)
User.sync({force: true});
// Interests.sync({force: true});
// User_Interests.sync({force: true});

exports.User = User;
