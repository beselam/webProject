'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use(express.static('uploads'));

const userRoute = require('./routes/userRoute');

app.use('/login', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
