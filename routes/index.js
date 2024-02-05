const router = require('express').Router();
const authRoutes = require('./authRoutes');
const NotFoundError = require('../errors/NotFoundError');


router.use(authRoutes);

router.use((req, res, next) => {
    next(new NotFoundError('Маршрут не найден'));
  });
  
  module.exports = router;