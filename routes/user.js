const router = require('express').Router();
const {createUserHandler, loginUserHandler} = require('../controllers/user');

const {createUserValidation, loginUserValidation} = require('../middlewares/validation.userCreate');


// Регистрация пользователя 
router.post('/createuser', createUserValidation, createUserHandler);
router.post('/login', loginUserValidation, loginUserHandler); 
module.exports = router;