const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const dbSetup = require('../src/config/database');

dotEnv.config();
dbSetup();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
const userRoute = require('./routes/user');
const authRoute = require('./routes/authenticate');
const carRoute = require('./routes/car');
const rentRoute = require('./routes/rent');


app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/car', carRoute);
app.use('/api/rent', rentRoute);

app.get("/", (req, res) => {
    res.send('hi');
})


app.listen(3000);