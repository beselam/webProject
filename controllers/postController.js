'use strict';
const postModel = require('../models/postModel');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config();


const getAllPost = async (req, res) => {
    const posts = await postModel.getAll();
    await res.json(posts);
};
const createPost = async (req, res) => {
   console.log('from controller',req);
   
  const params =[
    req.body.userId,
    req.body.description,
    req.body.catagoryId,
    req.file.filename,
   
    ];
    console.log(params[0]);
    
    const posts = await postModel.addPost(params);

    
    await res.json(posts);
};
const getItemCatagory = async (req, res) => {
    const posts = await postModel.getItemCatagory();
    await res.json(posts);
};


module.exports = {
  getAllPost,
  getItemCatagory,
  createPost



};
