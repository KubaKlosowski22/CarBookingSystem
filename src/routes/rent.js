const express = require('express');
const router = express.Router();
const Rent = require('../models/rent');
const Car = require('../models/Car');

router.get('/',  async (req, res) => {
    try {
        const rents = await Rent.query();
        res.json(rents);
    } catch (err) {
        res.status(404);
        res.send({message : err});
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const rent = await User.query().findById(id);
        res.json(rent);
    } catch(err) {
        res.status(404);
        res.send({message : err})
    }
})

router.post('/', async (req, res) => {
    try {
        const rent = await Rent.query().insert({
            user_id : req.body.userId,
            car_id : req.body.carId,
            start_date : req.body.startDate,
            end_date : req.body.endDate,
        })
        const car = await Car.query().patch({is_available : false}).findById(req.body.carId);
        res.status(201);
        res.json(rent);
    } catch (err) {
        res.status(400);
        res.send({message : err.stack});
    }
})

router.patch('/cancel-rent/:id', async (req, res) => {
    console.log(req.params.id);
    try {
       const rent = await Rent.query().patch({end_date : req.body.endDate}).findById(req.params.id);
       const car = await Car.query().patch({is_available : true}).findById(req.body.carId);
       res.status(200)
       res.json(rent);
    } catch (err) {
        res.status(404);
        res.send({message : err.stack})
    }
})
module.exports = router;