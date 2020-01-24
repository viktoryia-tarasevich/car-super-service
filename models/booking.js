const Sequelize = require('sequelize');

const sequelize = require('../database');

const Booking = sequelize.define('booking', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    finishFuelLevel: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    finishMileage: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Booking;
