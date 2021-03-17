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
const authenticate = require('./utils/authenticate');

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);


app.get("/", (req, res) => {
    res.send('hi');
})


app.listen(3000);