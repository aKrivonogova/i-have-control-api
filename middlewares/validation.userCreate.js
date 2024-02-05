const { celebrate, Joi } = require('celebrate');
const regExpNumber = /^\+\d{1,4}\d{10,}$/

const createUserValidation = celebrate({
    body: Joi.object().keys({
      password: Joi.string().required().min(8),
      email: Joi.string().required().email(),
      username: Joi.string().required().min(2).max(30),
      phoneNumber: Joi.string().required().pattern(regExpNumber),
    }),
  });

const loginUserValidation = celebrate({
    body: Joi.object().keys({
      password: Joi.string().required().min(8),
      email: Joi.string().required().email(),
    }),
  });


module.exports = {createUserValidation, loginUserValidation};