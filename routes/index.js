const router = require('express').Router();
const authRoutes = require('./authRoutes');
const userRoutes  = require('./user')
const authMiddlware = require('../middlewares/auth')
const NotFoundError = require('../errors/NotFoundError');


router.use(authRoutes);
router.use(authMiddlware);
router.use(userRoutes);

router.use((req, res, next) => {
    next(new NotFoundError('Маршрут не найден'));
  });
  
  module.exports = router;