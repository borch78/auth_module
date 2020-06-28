'use strict';

module.exports = function authorize(req, res, next) {
    if (!req.user) {
        res.redirect('/login');
    }
    next();
};
