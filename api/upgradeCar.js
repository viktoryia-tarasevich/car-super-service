const router = require('express').Router();

const Car = require('../models/car');

router.put('/upgrade/:id', async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        const carDate = new Date(car.productionDate.toString());
        if (carDate < new Date("01-01-2017") || car.mileage > 100000) {
            car.update({
                status: 'In service'
            });
            res.status(200).send(car);
        } else res.status(200).send('this car don\'t need an upgrade');

    } catch (e) {
        return res.sendStatus(400);
    }
});


module.exports = router;