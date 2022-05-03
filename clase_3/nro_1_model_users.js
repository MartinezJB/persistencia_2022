const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



class Users extends Sequelize.Model {}
Users.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });


/* crea usuario*/

sequelize.sync()
  .then(() => Users.create({
    firstName: 'Pedro',
    lastName: 'Rodriguez'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });



sequelize.sync()
  .then(() => Users.create({
    firstName: 'juakin',
    lastName: 'Martinez'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });


  sequelize.sync()
  .then(() => Users.create({
    firstName: 'Juan',
    lastName: 'Perez'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });



