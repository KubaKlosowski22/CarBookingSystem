const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.get('/token', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.query().findOne({email : email});
    const validPassword = await bcrypt.compare(password, user.password);

    if(validPassword){
        const token = jwt.sign({id : user.id}, process.env.TOKEN_SECRET, {expiresIn : 3600})
        const refreshToken = jwt.sign({id : user.id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: 54600})
        res.status(200);
        res.send({token, refreshToken})
    } else {
        res.status(403);
        res.send({ message: "Password is invalid"});
    }
})

module.exports = router;