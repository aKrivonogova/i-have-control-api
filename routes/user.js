const router = require('express').Router();
const createUserHandler = require('../controllers/user');
const createUserValidation = require('../middlewares/validation.userCreate')


// Регистрация пользователя 
router.post('/createuser', createUserValidation, createUserHandler);

module.exports = router;