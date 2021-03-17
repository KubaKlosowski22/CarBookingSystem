const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    try{
        const users = await User.query();
        res.json(users);
    } catch (err){
        res.status(404);
        res.send({message : err});
    }
})

router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await User.query().findById(id);
        res.json(user);
    } catch(err){
        res.status(404);
        res.send({message : err})
    }
})

router.post('/', async (req, res) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    
    try{
        const user = await User.query().insert({
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            email: req.body.email,
            password: hashedPassword,
        })
        res.status(200);
        res.json(user);
    }catch (err){
        res.status(404);
        res.send({message : err.stack})
    }
})


module.exports = router;