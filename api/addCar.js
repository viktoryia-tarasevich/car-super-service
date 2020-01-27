const router = require('express').Router();

const Car = require('../models/car');

router.post('/add-car', async (req, res) => {
    try {
        // Auto increment figovo raboet!!!!!
        const ids = await Car.findAll({
            attributes: ['id']
        });
        const car = await Car.create({
            id: ids.length+1,
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