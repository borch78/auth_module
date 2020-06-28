'use strict';

const { Client } = require('pg');
const consfig = require('../../config/default.json');

const client = new Client({...consfig.db})

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  })

module.exports = client;
