
const router = require('express').Router();

const {Op} = require("sequelize");

const Car = require('../models/car');
const Booking = require('../models/booking');
const compressArray = require('../helpers');

router.put('/location/:id', async (req, res) => {
    try {

        const counts = await Booking.findAll({
            where: {
                car: {
                    [Op.ne]: null
                }
            },
            attributes: ["car"]
        });


        const test = compressArray(counts.map(count => {
            return count.dataValues.car;
        }));

        const test2 = test.filter(elem => {
            return elem.count > 2
        });

        const test3 = test2.map(elem => {
            return elem.value;
        });


        const car = await Car.findByPk(req.params.id);

        const carStatus = (car.status !== 'in use' && car.status !== 'reserved');

        if (+req.params.id === test3[0] && carStatus) {
            car.geoLatitude = '53.8882836';
            car.geoLongitude = '27.5442615';
            await car.save;
            res.status(200).send(car);
        } else {
            res.status(200).send('Can\t change location of a car');
        }

        res.status(200).send(test3);
    } catch (e) {
        res.sendStatus(400);
    }
});


module.exports = router;