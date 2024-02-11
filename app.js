const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const defaultErrorHandler = require('./middlewares/defaultErrorHandler');
const corsControl = require('./middlewares/cors')
const routes = require('./routes/index');
const PORT = 3000;
const DB_URL = 'mongodb://127.0.0.1/iHaveControlDb';

const app = express();
mongoose.connect(DB_URL);

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes); 
app.use(corsControl);

app.use(defaultErrorHandler);

 
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

// todo Добавить константы для базы, порта и secret в env файл 
// todo Написать комментарии 
// Оформить readme.md 