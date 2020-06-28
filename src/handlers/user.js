'use strict';

const User = require('../data/user');

module.exports = {
    login: async (req, res, next) => {
        try {
            await User.login()(req, res);
            res.status(200).send({status: 'success'});
        } catch (err) {
            next(err);
        }
    }
};
