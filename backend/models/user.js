// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    match: [/^[A-Za-z\s]+$/, 'Full name must contain only alphabetic characters.']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format.']
  },
  password: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model('User', userSchema);
