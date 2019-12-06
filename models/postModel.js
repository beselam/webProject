'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();



const getAll = async () => {
    try {
      const [rows] = await promisePool.execute(
      'SELECT post.*, user.userName as ownername FROM post JOIN user ON user.user_id = post.user_id');
      return rows;
    } catch (e) {
      console.log('error', e.message);
    }
  };
  const getItemCatagory = async () => {
    try {
      const [rows] = await promisePool.execute('SELECT * FROM catagory;');
      return rows;
    } catch (e) {
      console.log('error', e.message);
    }
  };

  const addPost  = async (params) => {
      console.log('from model'+params);
      
    try {
      const [result] = await promisePool.execute(
        'INSERT INTO post  (user_id,description,category_id,file_path) VALUES (?,?,?,?);',
        params,
      );
      console.log('from model ',result);
      
      return result;
    } catch (e) {
      console.log(e);
      throw('db error');  
    }
  
  };


  
  module.exports = {
    getAll,
    getItemCatagory,
    addPost
    
  };
  