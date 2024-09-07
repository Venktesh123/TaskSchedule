// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'is invalid']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

// Create a model
const User = mongoose.model('User', userSchema);

module.exports = User;
