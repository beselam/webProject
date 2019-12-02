const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User model
const db = require('./database/db');

module.exports =  function  (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email', passwordField: 'passwd' }, (email, password, done) => {
            const params = [email];
            const rows =  db.execute(
                'SELECT * FROM userinfo WHERE user_email = ?;',
                params, (error, result) => {
                 
                    console.log('from top' + result);

                    if(error){
                        done(error);
                    }

                    if(result.length){
                        done(null,false);
                    }
                    const user = result[0];
                    const userId = user.user_id;
                    const hash = user.password;

                    bcrypt.compare(password,hash, (err, isMatch) => {
                        console.log('from bic' + password);
                        console.log('from bic' + hash);
                      
                      if(err){console.log(err+'fromm by');
                      }
                        if (isMatch) {
                            console.log('pass match');

                            return done(null, user);
                        } else {
                            console.log('pass no match');

                            return done(null, false);
                        }
                    });

            
                 });


        })
    );

    passport.serializeUser(function (userId, done) {
        done(null, userId);
    });

    passport.deserializeUser(function (userId, done) {
        
         done(null, userId);
        
    });  
};  


