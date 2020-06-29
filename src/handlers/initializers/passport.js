'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('./dbClient');

passport.use(
    'local',
    new LocalStrategy(
        {
            usernameField: 'login',
            passwordField: 'password',
        },
        async (login, password, done) => {
            db.one('SELECT "firstName", "lastName", "email" FROM users where login = $1 AND "passwordHash" = crypt($2, "salt") LIMIT 1', login, password)
                .then(user => {
                    if (!user) {
                        done(null, false, { message: 'User does not exist' });
                        return null;
                    }

                    done(null, user);
                    return null;
                })
                .catch(err => {
                    return done(err);
                });
        }
    )
);

module.exports = passport;
