'use strict';
const express = require('express');
const router = express.Router();
const {body, sanitizeBody} = require('express-validator');
const {validationResult} = require('express-validator');
const userController = require('../controllers/userController');
const passport = require('passport');

const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];
  
    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
  
        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
  }

router.post('/login',userController.login);
router.get('/logout',userController.logout);
router.get('/getUser',checkToken,userController.getUser);


router.post('/register',
    [
         body('matchPasswd', 'Passwords do not match').custom((value, { req }) => (value === req.body.passwd)),
         body('name').exists().isLength({ min: 5 }).trim().escape().withMessage('Name must have more than 5 characters'),
         body('email', 'Your email is not valid').not().isEmpty().isEmail().normalizeEmail(),
         body('passwd', 'Your password must be at least 5 characters').not().isEmpty().isLength({ min: 5 }), 
         sanitizeBody('name').escape()

    ], async (req, res) => {
        const error = await validationResult(req);
        if (error.isEmpty()) {
            userController.user_register(req, res);
        }
        else {
            console.log(error);
            res.json(error);
        }
    }
  
);

module.exports = router;