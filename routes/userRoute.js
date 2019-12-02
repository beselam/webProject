'use strict';
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check, validationResult } = require('express-validator');
const passport = require('passport');
const path = require('path');


router.get('/ll', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'main.html'));
  
});
router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'main.html'));
  
});
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  
});


router.post('/register', [
    check('matchPasswd', 'Passwords do not match').custom((value, { req }) => (value === req.body.passwd)),
    check('name').exists().isLength({ min: 5 }).trim().escape().withMessage('Name must have more than 5 characters'),
    check('email', 'Your email is not valid').not().isEmpty().isEmail().normalizeEmail(),
    check('passwd', 'Your password must be at least 5 characters').not().isEmpty().isLength({ min: 5 }),

],
    async (req, res) => {

        const error = await validationResult(req);
        if (error.isEmpty()) {
            userController.user_register(req, res);
        }
        else {
            //const errors = JSON.stringify(error);
            console.log(error);
            res.json(error);
        }

    });

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});



module.exports = router;
