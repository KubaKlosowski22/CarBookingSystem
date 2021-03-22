const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const authenticate  = require('../utils/authenticate');

router.get('/', authenticate, async (req, res) => {
    try {
        const users = await User.query().withGraphFetched('rent');
        res.json(users);
    } catch (err) {
        res.status(404);
        res.send({message : err.stack});
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.query().findById(id);
        res.json(user);
    } catch(err) {
        res.status(404);
        res.send({message : err.stack})
    }
})

router.post('/', async (req, res) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    
    try {
        const user = await User.query().insert({
            first_name: req.body.firstName,
            second_name: req.body.secondName,
            email: req.body.email,
            password: hashedPassword,
        })
        res.status(200);
        res.json(user);
    } catch (err) {
        res.status(400);
        res.send({message : err.stack})
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const user = await User.query().deleteById(req.params.id);
        res.status(200);
        res.send({message : 'User deleted succesfully'});
    } catch (err) {
        res.send({message : err.stack});
    }
})

module.exports = router;