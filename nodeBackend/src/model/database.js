var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'golang-test', //database
    'postgres', //username
    'root', //password
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

module.exports = sequelize;