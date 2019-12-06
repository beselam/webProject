'use strict';

const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require('bcryptjs');
const db = require('./database/db');
const passport = require('passport');
const promisePool = db.promise();
const userModel = require('./models/userModel');



module.exports =   function  (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email', passwordField: 'passwd' }, async (email, password, done) => {

            const params = [email];
            console.log('from passporttttttttttttttttttttt'+ params);
            
            try {
              const [user] = await userModel.getUserLogin(params);
              console.log('Local strategy', user); // result is binary row
              if (user === undefined) {
                return done(null, false, {message: 'Incorrect credentials.'});
              }
              if (!bcrypt.compareSync(password, user.password)) {
                return done({message: 'Incorrect credentials.'}, false,null);
              }
              delete user.password; // delete password from user object
              const mm = user.user_email;
              console.log('binary removed'+mm);
              
              return done(null, {...user}, {message:'Logged In Successfully'}); // use spread syntax to create shallow copy to get rid of binary row type
            } catch (err) {
              return done(err);
            }
        }));
    };

   passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'ilenWksp2019',
      },
      async (jwtPayload, done) => {
        console.log('payload', jwtPayload);
        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        try {
          const [user] = await userModel.getUser(jwtPayload.user_id);
          if (user === undefined)
            return done(null, false);
  
          return done(null, {...user});
        } catch (err) {
          return done(err);
        }
      },
  ));
    


