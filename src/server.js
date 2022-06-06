'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const foodRouter = require('./routes/food');
const clotheRouter = require('./routes/clothes');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

// Global middleware
app.use(express.json());
app.use(logger);
app.use(validator)


// Use Routers
app.use(foodRouter);
app.use(clotheRouter);

// Handle Error
app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port){
    app.listen(port, ()=>{
        console.log(`Server Started on ${port}`);
    })
}

module.exports = {
    server: app,
    start: start
}