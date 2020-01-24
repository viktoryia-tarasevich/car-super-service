const router = require('express').Router();

const Car = require('../models/car');

router.post('/add-car', async (req, res) => {
    try {
        const car = await Car.create({
            vin: "1XP9D29X2EN162096",
            registrationNumber: "N9609K",
            brand: "Honda",
            model: "Civic",
            productionDate: "2014-05-06",
            status: "free",
            mileage: "12321",
        });
        res.status(200).send(car);
    } catch (e) {
        return res.sendStatus(400);
    }

});

module.exports = router;