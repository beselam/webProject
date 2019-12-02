'use strict';
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const user_login = async (req,email,passwd,done) => {
  const params=[
    email
  ]
  console.log('from controller'+ params);
  
  const response = await userModel.login_user(req,done,params);
  console.log(response);
  
  return response;
  //const result =  await response
  //console.log(result_password);
  
 // return done(null,'kkkkk');
  //res.send("With this endpoint you can add users.");
  //const user = await userModel.getUser([response.insertId]);
  // await res.json(user);

};

const user_register = async (req, res) => {
 
  bcrypt.genSalt(10, async (err, salt) =>{
    bcrypt.hash(req.body.passwd, salt, async (err, hash)=> {
      // Store hash in your password DB.

   const   params = [
        req.body.name,
        req.body.email,
        hash
      ];
       console.log(params);
       const response = await userModel.addUser(params);

    });

  });

  
   
  
  //res.render('main',{title:'register'}); 
  //const user = await userModel.getUser([response.insertId]);
  // await res.json(user);
};



module.exports = {
  user_login,
  user_register


};
