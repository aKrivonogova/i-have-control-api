const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const userRouters = require('./routes/user')


const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', userRouters); 

mongoose.connect('mongodb://127.0.0.1/iHaveControlDb');

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})