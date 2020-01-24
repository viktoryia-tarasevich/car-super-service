const Sequelize = require('sequelize');

const sequelize = require('../database');


const Run = sequelize.define('run', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    startDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    startFuelLevel: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
    },
    startMileage: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

module.exports = Run;
