const router = require('express').Router();
const {getCurrentUser} = require('../controllers/user');
// Регистрация пользователя 

router.get('/users/me', getCurrentUser)
module.exports = router;