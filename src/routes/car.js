const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

router.get('/', async (req, res) => {
    try {
        const cars =  await Car.query().withGraphFetched('rent');
        res.status(200);
        res.send(cars);
    } catch (err) {
        res.status(404);
        res.send({message : err.stack});
    }
})

router.get('/:id', async (req, res) => {
    try {
        const car =  await Car.query().findById(req.params.id);
        res.status(200);
        res.send(car);
    } catch (err) {
        res.status(404);
        res.send({message : err.stack});
    }
})

router.post('/', async (req, res) => {

    try {
        const car = await Car.query().insert({
            brand : req.body.brand,
            model : req.body.model,
            horse_power : req.body.horsePower,
            production_year : req.body.productionYear,
            is_available : req.body.isAvailable,
        })
        res.status(201);
        res.send(car);
    } catch (err) {
        res.status(400);
        res.send({message : err.stack});
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const car =  await Car.query().deleteById(req.params.id);
        res.status(200);
        res.send({message : 'Car deleted succesfully'});
    } catch (error) {
        res.status(404);
        res.send({message : err.stack});
    }    
})

module.exports = router;