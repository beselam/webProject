'use strict';
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config();


const login = (req, res) => {
  // TODO: add passport authenticate
  console.log(req.body);
  
  passport.authenticate('local', {session: false}, (err, user, info) => {
  //  console.log('controller ' , user);
    

    if (err || !user) {
     const message= err.message;
      console.log('login error', err, user);
      return res.status(400).json({
        message,
        user: user,
      });
    }
    req.login(user, {session: false}, (err) => {
      if (err) {
        res.send(err);
      }
      // generate a signed son web token with the contents of user object and return it in the response
      const token = jwt.sign(user, process.env.TOKEN_SECRET);
      return res.json({user, token});
    });
  })(req, res); 
  
};

const user_register = async (req, res) => {
 
  bcrypt.genSalt(10, async (err, salt) =>{
    bcrypt.hash(req.body.passwd, salt, async (err, hash)=> {
   const   params = [
        req.body.name,
        req.body.email,
        hash
      ];
       console.log(params);
       const response = await userModel.addUser(params);
       const user = await response;
       console.log('the user is ', user);
       
       res.json(user);

    });

  });

  
};

const get_all_feeds = async (req,res)=>{
  
}


module.exports = {
  user_register,
  login


};
