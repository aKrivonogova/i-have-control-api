const User = require('../models/user');
const bcrypt = require("bcrypt");

// Регистрация пользователя в системе 
const createUserHandler =  async (req, res, next) => {
    try {
        const user = new User({
            username: req.body.username, 
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8), 
            phoneNumber: req.body.phoneNumber, 
        })
        await user.save(); 
        res.status(200).send('Пользователь успешно создан!')
     }
    catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).send('Ошибка валидации данных'); 
        } 
        if(error.code === 11000) {
            res.status(400).send({ message: 'Пользователь с таким email уже существует' });
        };
    }
}

module.exports = createUserHandler; 