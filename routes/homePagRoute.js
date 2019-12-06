'use strict';
const express = require('express');
const homeRoute = express.Router();
const {body, sanitizeBody} = require('express-validator');
const {validationResult} = require('express-validator');
const userController = require('../controllers/userController');
const passport = require('passport');

homeRoute.get('/',userController.get_all_feeds)




















module.exports=homeRoute;