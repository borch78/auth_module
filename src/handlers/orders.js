'use strict';

const Order = require('../data/orders');

module.exports = {
    getList: function (req, res, next) {
        try {
            const result = Order.getList();
            res.status(200).send(result);
        } catch (err) {
            next(err);
        }
    }
};
