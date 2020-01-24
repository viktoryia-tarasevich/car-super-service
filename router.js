const router = require('express').Router();

router.use(require('./api/getCars'));
router.use(require('./api/addCar'));
router.use(require('./api/deleteCar'));
router.use(require('./api/upgradeCar'));
router.use(require('./api/getDrivers'));

module.exports = router;
