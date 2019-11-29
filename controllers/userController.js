'use strict';
const userModel = require('../models/userModel');



const user_login = async (req, res) => {
  const params = [
    req.body.name,
    req.body.email,
    req.body.passwd,
  ];
  console.log(params);
  
  const response = await userModel.addUser(params);
  res.send("With this endpoint you can add users."); 
  //const user = await userModel.getUser([response.insertId]);
 // await res.json(user);
};


module.exports = {
  user_login
 
};
