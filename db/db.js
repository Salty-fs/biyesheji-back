const Sequelize = require('sequelize')
// const AppConfig = require('./appConfig')

const sequelize = new Sequelize('biyesheji', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;