'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');

const config = require('../../config/default.json');
const pgp = require("pg-promise")();

const db = require('./dbClient');

passport.use(
    'local',
    new LocalStrategy(
        {
            usernameField: 'login',
            passwordField: 'password',
        },
        async (login, password, done) => {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            db.one('SELECT "firstName", "lastName", "email" FROM users where login = $1 AND "passwordHash" = $2', login, hash)
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
