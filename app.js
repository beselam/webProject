'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

require('./passport')(passport);



app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
   // cookie: { secure: true }
  }));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

const userRoute = require('./routes/userRoute');
app.use(express.static('public'));


app.use('/', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
