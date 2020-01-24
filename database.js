const Sequelize = require('sequelize');

const sequelize = new Sequelize('carsharing', 'root', 'strig', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
