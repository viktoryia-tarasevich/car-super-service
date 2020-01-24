const Sequelize = require('sequelize');

const sequelize = require('../database');


const CreditCard = sequelize.define('credit card', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    cardNumber: {
        type: Sequelize.STRING(19).BINARY,
        allowNull: false
    },
    cardHolder: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cardValidDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

module.exports = CreditCard;
