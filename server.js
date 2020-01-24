const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router');

const sequelize = require('./database');
const Car = require('./models/car');
const Booking = require('./models/booking');
const CreditCard = require('./models/creditCard');
const Driver = require('./models/driver');
const Run = require('./models/run');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);


Run.hasOne(Car, {
    foreignKey: 'current run'
});

CreditCard.hasOne(Driver, {
    foreignKey: "credit card"
});

Driver.hasMany(Run, {
    foreignKey: 'driver'
});

Car.hasMany(Booking, {
    foreignKey: 'car'
});

Run.hasOne(Booking, {
    foreignKey: 'run'
});

sequelize.sync()
    .then(() => app.listen(3000));