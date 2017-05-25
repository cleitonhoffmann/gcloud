'use strict';

const express = require('express');
const config = require('./config.environment');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(config.appPort, () => {
    console.log(`${config.appName} listening on port: ${config.appPort}.`);
});