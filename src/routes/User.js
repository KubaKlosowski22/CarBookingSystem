const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try{
        const Users = await User.query();
        res.send(Users);
    } catch (err)
    {
        res.status(404);
        res.send({'err' : err});
    }
})

module.exports = router;