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
    .then( () => {
        Empleados.create({
        nombre: 'Juan',
        apellido: 'Pez',
        dni: 3112212
        });
        Empleados.create({
            nombre: 'Jose',
            apellido: 'Perez',
            dni: 53533535
            });
        Empleados.create({
            nombre: 'Juan',
            apellido: 'posco',
            dni: 6475435
            });

    })

Empleados.update( { apellido: 'Posca' },{
    where: {
        dni: 6475435
    }
}).then( () => console.log('datos actualizados'));

Empleados.update( { apellido: 'Paez' },{
    where: {
        dni: 53533535
    }
}).then( () => console.log('datos actualizados'));