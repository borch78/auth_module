'use strict';

const passport = require('passport');

class User {
    static async login() {
        return passport.authenticate('local', (err, user, info) => {
            if (err) {
                throw new Error('error auth');
            }
            if (!user) {
                throw new Error('user login attemt error');
            }
        });
    }
}

module.exports = User;
