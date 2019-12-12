'use strict';
const postModel = require('../models/postModel');
const userModel = require('../models/userModel');
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
const getUserId = async (req, res) => {
    const params =[
        req.body.userId
    ];
    const user = await userModel.getUser(params);
    await res.json(User);
};
const search = async (req, res) => {
    const params =[
        req.body.searchItem
    ];
    const posts = await postModel.search(params);
    await res.json(posts);
};
const getUserPost = async (req, res) => {
    console.log(req);
    
    const params =[
        req.body.user_id
    ];
    
    const posts = await postModel.getUserPost(params);
    await res.json(posts);

};
const deletePost = async (req, res) => {
    console.log(req);
    
    const params =[
        req.body.postID
    ];
    
    const posts = await postModel.deletePost(params);
    await res.json(posts); 

};




module.exports = {
  getAllPost,
  getItemCatagory,
  createPost,
  getUserId,
  search,
  getUserPost,
  deletePost



};
