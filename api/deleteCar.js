const router = require('express').Router();

const Car = require('../models/car');

router.delete('/cars/:id', async (req, res) => {
    try {
        await Car.destroy({where: {id: req.params.id}});
        return res.status(200).send('deleted successfully');
    } catch (e) {
        return console.log(e);
    }
});

module.exports = router;