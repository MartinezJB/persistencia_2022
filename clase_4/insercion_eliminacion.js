const Sequelize = require('sequelize');

const sequelize = new Sequelize('empresa', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then( () => {
        console.log('conexión a la base de datos exitosa')
    })
    .catch( err => {
        console.log('no se pudo conectar a la base de datos:', err)
    })

class Empleados extends Sequelize.Model {};

Empleados.init({
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING,
    dni: Sequelize.INTEGER
}, { sequelize, modelName: 'empleados' })

Empleados.destroy({
    where: {
        dni: 53533535
    }
}).then( () => {
    console.log('Empleado eliminado correactamente')
})