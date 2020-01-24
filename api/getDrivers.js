const router = require('express').Router();

const {Op} = require("sequelize");

const Car = require('../models/car');
const Driver = require('../models/driver');
const Run = require('../models/run');

router.get('/drivers', async (req, res) => {

    // TODO: improve logic

    try {

        const drivers = await Driver.findAll({
            where: {
                ["credit card"]: {
                    [Op.eq]: null
                }
            }
        });
        const driverId = drivers.map(driver => {
            return driver.id;
        });
        const runs = await Run.findAll({
            where: {
                driver: {
                    [Op.in]: driverId
                }
            }
        });
        const runId = runs.map(run => {
            return run.id;
        });
        const cars = await Car.findAll({
            where: {
                ["current run"]: {
                    [Op.in]: runId
                }
            }
        });

        const newCars = cars.map((car, index) => {
            return [`car №${index + 1}`, car.vin, `${car.geoLatitude} -- ${car.geoLongitude}`];
        });

        const newDrivers = drivers.map((driver, index) => {
            return [`driver №${index + 1}`, `${driver.firstName} -- ${driver.lastName}`, driver.licenseNumber]
        });

        const test = [...newDrivers, ...newCars];

        res.status(200).send(test);
    } catch (e) {
        return res.sendStatus(400);
    }
});



module.exports = router;

