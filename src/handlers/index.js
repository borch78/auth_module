'use strict';

const express = require('express');

const orders = require('./orders');
const user = require('./user');

const security = require('../security');

const router = express.Router();

router.get('/api/orders', security, orders.getList);
router.post('/api/user/login', user.login);

module.exports = router;
