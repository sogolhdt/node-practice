const mongoose = require('mongoose');

const usersTable = new mongoose.Schema({
  first_name: {
    type: String,
    // required: [true, 'the user must have name'],
    // unique: true,

  },
  last_name: {
    type: String,
  },
  mobile: {
    type: String,
    // unique: true,
  },
  is_blocked: {
    type: Number,
    default: 0,
  },
  password: {
    type: String,
    default: 0,
  },
  token: {
    type: String,
    default: 0,
  },
  verification_code: {
    type: Number,
    default: 0,
  },
  timestamp: {
    type: String,
    default: 0,
  }
});

const user = mongoose.model('user', usersTable);
module.exports = user;

