const router = require('express').Router();

const Car = require('../models/car');

router.delete('/cars/:id', async (req, res) => {
    try {
        const ids = await Car.findAll({
            attributes: ['id']
        });
       await Car.destroy({where: {id: req.params.id}});
       const check = ids.filter(id =>{
           return id.dataValues.id === +req.params.id
       });
       if(check.length > 0){
           return res.status(200).send('deleted successful');
       }else{
           return res.status(200).send('no such id in list ');
       }
    } catch (e) {
        return res.sendStatus(400);
    }
});

module.exports = router;