const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const dbSetup = require('../src/config/database');


dbSetup();
dotEnv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Import routes
const userRoute = require('../src/routes/User');

app.use('/api/users', userRoute);

app.get("/", (req, res) => {
    res.send('hi');
})


app.listen(3000);