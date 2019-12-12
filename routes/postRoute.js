const express = require('express');
const postRoute = express.Router();
const {body, sanitizeBody} = require('express-validator');
const {validationResult} = require('express-validator');
const postController = require('../controllers/postController');
const passport = require('passport');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});




postRoute.get('/getAllPost',postController.getAllPost);
postRoute.get('/createPost',postController.createPost);
postRoute.get('/getItemCatagory',postController.getItemCatagory);
postRoute.get('/getUserId',postController.getUserId);
postRoute.post('/getUserPost',postController.getUserPost);
postRoute.post('/search',postController.search);
postRoute.delete('/deletePost',postController.deletePost);



postRoute.post('/makePost', upload.single('image'), (req, res,next) => {
    console.log(' post file', req.file);
    if (req.file === undefined) {
        console.log('here');
        
      res.json({
        error: 'No file',
      });
    } else if(!req.file.mimetype.includes('image')){
      res.json({
        error: 'Not an image',
      });
    } else {
        next();      
    } 
  });

  postRoute.post('/makePost',postController.createPost);























module.exports = postRoute;
