'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const port = 40000;
const passport = require('passport');

require('./passport')(passport);

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use(passport.initialize());


const authRouter = require('./routes/authRoute');
const postRouter = require('./routes/postRoute');

app.use(express.static('uploads'));
app.use(express.static('public'));

app.use('/post/makePost',passport.authenticate('jwt', {session: false}), postRouter);
app.use('/post',postRouter);
app.use('/auth',authRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
