const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const AuthError = require('../errors/AuthError');

const userSchema = new mongoose.Schema({
    username: {
		type: String,
		required: true,
	},

	email: {
		type: String, required: true, unique: true
	},

	password: {
		type: String,
		required: true,
	},

    phoneNumber:{
        type: String,
		required: true,
    }

});

userSchema.statics.findUserByCredentials = function (email, password) {
    return this.findOne({ email }).select('+password')
      .then((user) => {
        if (!user) {
          throw new AuthError('необходима авторизация!');
        }
        return bcrypt.compare(password, user.password)
          .then((matched) => {
            if (!matched) {
              throw new AuthError('неправильные почта или пароль');
            }
            return user;
          });
      });
  };


const User = mongoose.model('User', userSchema);

module.exports = User;
