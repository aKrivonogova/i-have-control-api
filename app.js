const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const defaultErrorHandler = require('./middlewares/defaultErrorHandler');
const routes = require('./routes/index');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || 'mongodb://127.0.0.1/iHaveControlDb';

const app = express();
mongoose.connect(DB_URL);

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes); 

app.use(defaultErrorHandler);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})