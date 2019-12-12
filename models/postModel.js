'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();


// make a join and get all the post  
const getAll = async () => {
    try {
      const [rows] = await promisePool.execute(
      'SELECT post.*, user.userName as ownername FROM post JOIN user ON user.user_id = post.user_id  ORDER BY id DESC');
      return rows;
    } catch (e) {
      console.log('error', e.message);
    }
  };
  // get all the catagory from the server 
  const getItemCatagory = async () => {
    try {
      const [rows] = await promisePool.execute('SELECT * FROM catagory;');
      return rows;
    } catch (e) {
      console.log('error', e.message);
    }
  };

  // send the post to the database 
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

  // search for catagory 
  const search = async (params) => {
    try {
      const [rows] = await promisePool.execute(
      'SELECT post.*, user.userName as ownername , catagory.name as catagory_name FROM post JOIN user ON user.user_id = post.user_id JOIN catagory ON catagory.id = post.category_id  WHERE catagory.name=?;',params);
      return rows;
    } catch (e) {
      console.log('error', e.message);
    }
  };

  // delete the post 
  const deletePost = async (params) => {
    try {
      const [rows] = await promisePool.execute(
          'DELETE FROM post WHERE id = ?;',
          params);
      return rows;
    }
    catch (e) {
      console.log('error', e.message);
    }
  };


  const getUserPost = async (params) => {
    try {
      const [rows] = await promisePool.execute(
      'SELECT post.*, user.userName as ownername , catagory.name as catagory_name FROM post JOIN user ON user.user_id = post.user_id JOIN catagory ON catagory.id = post.category_id  WHERE post.user_id=?;',params);
      return rows;
    } catch (e) {
      console.log('error', e.message);
    }
  };


  
  module.exports = {
    getAll,
    getItemCatagory,
    addPost,
    search,
    getUserPost,
    deletePost
    
  };
  