'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();



const addUser = async (params) => {
  try {
    const [rows] = await promisePool.execute(
      'INSERT INTO user (userName,email,password) VALUES (?,?,?);',
      params, );
      console.log(rows);
      
    return rows;
  } catch (e) {
    console.log('error rom database ', e.message);
    return {error : 'error in database query'};
  }
};
const getUserLogin = async (params) => {
  
  
  try {
  
    const [rows] = await promisePool.execute(
        'SELECT * FROM user WHERE email = ?;',
        params);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};


const login_user = async (req,done,params) => {
  
   const rows = await promisePool.execute(
      'SELECT password FROM user WHERE email = ?;',
      params,   (error ,result)=>{
        if(error){
         return done(error)
        };
         if(!result.length){
        return  done(null,false);
        };
      return  done(null,result[0]);
      });
   
};




module.exports = {
  addUser,
  login_user,
  getUserLogin
};
