const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticate(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token === null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET, (err, payload) => {
        if (err) return res.sendStatus(403)

        req.payload = payload
        next();
    })
}

module.exports = authenticate;