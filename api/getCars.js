const router = require('express').Router();

const Car = require('../models/car');

router.get('/fuel', async (req, res) => {
    try {
        const cars = await Car.findAll();
        const refuelCars = cars.filter(car => {
            return (car.status === 'in use' && car.fuelLevel < 25);
        });
        if (refuelCars.length !== 0) res.status(200).send(refuelCars);
        else res.send('fetched successfully but there are no cars');
    } catch (e) {
        return res.sendStatus(400);
    }
});


module.exports = router;