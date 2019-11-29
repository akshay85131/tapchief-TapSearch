const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const homeRouter = require('./api/routes/home');
const Paragraph = require('./api/models/paragraph');



app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    next();
});

 const PORT = process.env.PORT || 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/home', homeRouter);

app.use((resquest, response, next) => {
    var error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, resquest, response, next) => {
    response.status(error.status || 500);
    response.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;