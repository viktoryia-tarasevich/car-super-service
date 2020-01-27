const router = require('express').Router();

const {Op} = require("sequelize");

const Car = require('../models/car');
const Driver = require('../models/driver');
const Run = require('../models/run');

router.get('/drivers', async (req, res) => {

    try {
        const drivers = await Driver.findAll({
            where: {
                ["credit card"]: {
                    [Op.eq]: null
                }
            },
            attributes: ["id", "firstName", "lastName", "licenseNumber"]
        });
        const driverId = drivers.map(id => {
            return id.dataValues.id;
        });


        const runs = await Run.findAll({
            where: {
                driver: {
                    [Op.in]: driverId
                },
            },
            attributes: ["id"]
        });

        const runId = runs.map(id => {
            return id.dataValues.id;
        });
        const cars = await Car.findAll({
            where: {
                ["current run"]: {
                    [Op.in]: runId
                }
            },
            attributes: ["id", "vin", "geoLatitude", "geoLongitude"]
        });

        const newCars = cars.map((car, index) => {
            return [`car №${index + 1}`, car.dataValues.vin, `${car.dataValues.geoLatitude} -- ${car.dataValues.geoLongitude}`];
        });

        const newDrivers = drivers.map((driver, index) => {
            return [`driver №${index + 1}`, `${driver.dataValues.firstName} -- ${driver.dataValues.lastName}`, driver.dataValues.licenseNumber]
        });


        const test = [...newDrivers, ...newCars];
        res.status(200).send(test);
    } catch (e) {
        return res.sendStatus(400);
    }
});


module.exports = router;

