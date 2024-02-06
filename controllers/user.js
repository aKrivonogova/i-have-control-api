const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const DuplicateError = require('../errors/DuplicateError');
const ValidationError = require('../errors/ValidationError');

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
            return next(new ValidationError('Некорректные данные'));
        } 
        if(error.code === 11000) {
            return next(new DuplicateError('Пользователь с таким email уже существует'));
        }
        else {
            console.log(req)
        }
    }
}


// авторизация пользователя в системе 
const loginUserHandler = async (req, res, next) => {
    try{
        const {email, password} = req.body; 
        const user = await User.findUserByCredentials(email,password);
        if(user){
            const token = jwt.sign({ _id: user._id }, 'secret-key', { expiresIn: '1h' });
            res.send(token);
        }
    }
    catch(error){
         next(error);
    }
}

const getCurrentUser =  (req, res, next) => {
    User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь не найден');
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      next(err);
    });
}


module.exports = { createUserHandler, loginUserHandler, getCurrentUser}; 