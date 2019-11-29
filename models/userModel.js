'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();


const addUser = async (params) => {
  try {
    const [rows] = await promisePool.execute(
      'INSERT INTO userinfo  (user_name,user_email,password) VALUES (?,?,?);',
      params, );
    return rows;
  } catch (e) {
    console.log('error rom database ', e.message);
    return {error : 'error in database query'};
  }
};

module.exports = {
  addUser
};
