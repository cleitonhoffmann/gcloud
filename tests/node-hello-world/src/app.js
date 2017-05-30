'use strict';

const express = require('express');
const config = require('config');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(config.appPort, () => {
    console.log(`${config.get('appName')} listening on port: ${config.get('appPort')}`);
});