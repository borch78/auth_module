'use strict';

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config/default.json');
const swagger = require('./config/swagger.json');
const router = require('./handlers');
const passport = require('./handlers/initializers/passport');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swagger);
});

app.use(passport.initialize());
app.use(passport.session());
app.use(router);

server.listen(config.app.port, function () {});
