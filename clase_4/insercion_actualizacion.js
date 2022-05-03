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

sequelize.sync()
    .then( () => Empleados.create({
        nombre: 'Juan',
        apellido: 'Perez',
        dni: 23334567
    }))
    .then( emp => console.log(emp.toJSON()));

Empleados.update( { apellido: 'paez'},{
    where: {
        dni: 23334567
    }
}).then( () => console.log('registro actualizado correctamente'))
