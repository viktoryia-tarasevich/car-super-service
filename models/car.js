const Sequelize = require('sequelize');

const sequelize = require('../database');


const Car = sequelize.define('car', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true
    },
    vin: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    registrationNumber: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    brand: Sequelize.STRING,
    model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    productionDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING(100).BINARY,
        defaultValue: "free",
        allowNull: false
    },
    fuelLevel: {
        type: Sequelize.INTEGER,
        defaultValue: 100
    },
    mileage: Sequelize.INTEGER,
    geoLatitude: {
        type: Sequelize.DOUBLE,
        defaultValue: 53.8882836
    },
    geoLongitude: {
        type: Sequelize.DOUBLE,
        defaultValue: 27.5442615
    },
});

module.exports = Car;