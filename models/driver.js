const Sequelize = require('sequelize');

const sequelize = require('../database');


const Driver = sequelize.define('driver', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    licenseNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Driver;
