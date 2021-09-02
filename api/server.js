const express = require('express');
const { logger } = require('./middleware/middleware')

const server = express();
const usersRouter = require('user')

// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h1>Let's write some middleware! Boom!!</h1>`);
});

module.exports = server;
